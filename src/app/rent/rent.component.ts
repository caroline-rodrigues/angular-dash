import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { RentService } from './rent.service';
import { ClientService } from 'app/client/client.service';
import swal from 'sweetalert2';
import { VehicleService } from 'app/vehicle/vehicle.service';

interface Row {
  rent?: {
    _id: string;
    endDate: string;
    situation: string;
  };
  client?: {
    name: string;
    cpf: string;
  };
  vehicle?: {
    brand: string;
  };
  status: string;
}

@Component({
  moduleId: module.id,
  selector: 'rent-cmp',
  templateUrl: './rent.component.html',
})
export class RentComponent implements OnInit {
  currentPage: number = 1;
  itemsPerPage: number = 10;
  pagesToShow: number = 3;
  searchQuery: string;
  totalPages: number;
  filteredRows: any[];
  totalPagesArray: any[] = [];
  rows: Row[];
  rentList: any[] = [];
  loading: boolean = false;
  headerRow: string[] = ['ID', 'Nome', 'CPF', 'Data devolução', 'Modelo', 'Situação', 'Ações'];
  disabled: boolean = false;

  constructor(
    private rentService: RentService,
    private clientService: ClientService,
    private router: Router,
    private vehicleService: VehicleService,
  ) {}

  ngOnInit() {
    this.getAll(false);
  }

  paginate(data: any[]): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return data.slice(startIndex, endIndex);
  }

  getAll(event: boolean) {
    this.loading = true;
    this.rentService
      .getAll()
      .pipe(map(rentResponse => rentResponse.filteredEntityResults))
      .subscribe(rentList => {
        this.rentList = rentList.map(rent => {
          const { _id, endDate, isEnable } = rent.rent;
          const { name, cpf } = rent.client;
          const { brand } = rent.vehicle;
          return {
            rent: {
              _id,
              endDate: endDate ? this.formatDateToISO(new Date(endDate).toLocaleDateString(), '/') : null,
              isEnable,
            },
            client: {
              name,
              cpf,
            },
            vehicle: {
              brand,
              _id,
            },
            status: rent.status,
          };
        });
        this.totalPages = Math.ceil(this.rentList.length / this.itemsPerPage);

        if (event && this.filteredRows.length === 1 && this.currentPage !== 1) {
          this.currentPage = this.totalPages;
        }

        this.filteredRows = this.paginate(this.rentList);
        this.totalPagesArray = this.calculateTotalPagesArray(this.currentPage, this.totalPages);
        this.loading = false;
      });
  }

  calculateTotalPagesArray(currentPage: number, totalPages: number): number[] {
    const pagesArray: number[] = [];
    const startPage = Math.max(1, currentPage - this.pagesToShow);
    const endPage = Math.min(totalPages, currentPage + this.pagesToShow);

    for (let i = startPage; i <= endPage; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.filteredRows = this.paginate(this.rentList);
      this.totalPagesArray = this.calculateTotalPagesArray(this.currentPage, this.totalPages);
    }
  }

  onDeletedRent(rentId: string) {
    swal({
      title: 'Deseja deletar o aluguel ?',
      text: 'Esta ação não pode ser desfeita!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, finalizar!',
      cancelButtonText: 'Não, manter aluguel.',
      confirmButtonClass: 'btn btn-fill btn-success btn-mr-5',
      cancelButtonClass: 'btn btn-fill btn-danger',
      buttonsStyling: false,
    }).then(result => {
      if (result.value) {
        swal({
          title: 'Deletado !',
          text: 'O aluguel foi deletado.',
          type: 'success',
          confirmButtonClass: 'btn btn-fill btn-success',
          buttonsStyling: false,
        }).catch(swal.noop);
        this.rentService.delete(rentId).subscribe(() => {
          this.getAll(true);
        });
        this.rentService.getById(rentId).subscribe(rent => {
          this.clientService.getClientById(rent.clientId).subscribe(rentToRemove => {
            const rentToRemoveIndex = rentToRemove.rentList.findIndex(rent => rent._id === rentId);
            rentToRemove.rentList.splice(rentToRemoveIndex, 1);
            this.clientService.update(rentToRemove, rentToRemove._id).subscribe();
          });
        });
      } else {
        swal({
          title: 'Cancelado',
          text: 'O aluguel não foi deletado.',
          type: 'error',
          confirmButtonClass: 'btn btn-fill btn-info',
          buttonsStyling: false,
        }).catch(swal.noop);
      }
    });
  }

  editRent(rentId: string): void {
    this.router.navigate(['/components/new-rent'], {
      queryParams: { id: rentId },
    });
  }

  filterItems() {
    console.log(this.searchQuery);
    this.filteredRows = this.paginate(this.rentList).filter(rent => {
      const { _id, endDate } = rent.rent;
      const { name, cpf } = rent.client;
      const contentString = `${_id}${name}${cpf}${endDate}`;
      return contentString.toString().toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

  private formatDateToISO(dateStr: string, spliter: string) {
    const [day, month, year] = dateStr.split('/');
    return `${year}${spliter}${month}${spliter}${day}`;
  }

  isEnableRent(rentId: string) {
    swal({
      title: 'Deseja finalizar o aluguel ?',
      text: 'Esta ação permite manter esse manter esse aluguel no hisórico. Mas finaliza e remove o carro utilizado nesse aluguel.',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, finalizar!',
      cancelButtonText: 'Não, manter aluguel.',
      confirmButtonClass: 'btn btn-fill btn-success btn-mr-5',
      cancelButtonClass: 'btn btn-fill btn-danger',
      buttonsStyling: false,
    }).then(result => {
      if (result.value) {
        swal({
          title: 'Finalizado!',
          text: 'O aluguel foi finalizado.',
          type: 'success',
          confirmButtonClass: 'btn btn-fill btn-success',
          buttonsStyling: false,
        }).catch(swal.noop);
        this.rentService.getById(rentId).subscribe(rent => {
          const { vehicle } = rent;
          this.rentService.update({ isEnable: false, status: 'Finalizado' }, rentId).subscribe(() => {});
          this.vehicleService.update({ rented: false }, vehicle).subscribe(() => {});
        });
      } else {
        swal({
          title: 'Cancelado',
          text: 'O aluguel não foi finalizado.',
          type: 'error',
          confirmButtonClass: 'btn btn-fill btn-info',
          buttonsStyling: false,
        }).catch(swal.noop);
      }
    });
  }
}
