import { Component, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
})
export class VehicleComponent implements OnInit {
  searchQuery: string = '';
  pagesToShow: number = 3;
  totalPagesArray: any[] = [];
  filteredRows: any[];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  vehicleList: any[] = [];
  totalPages: number;
  loading: boolean = false;
  headerRow: string[] = ['ID', 'Modelo', 'Chassi', 'Data cadastro', 'Ano', 'Ações'];
  constructor(private vehicleService: VehicleService, private router: Router) {}

  ngOnInit() {
    this.getAll(false);
  }

  getAll(event: boolean) {
    this.loading = true;
    this.vehicleService
      .findAllVehicles()
      .pipe(map(vehicleResponse => vehicleResponse.results))
      .subscribe(vehicleList => {
        this.vehicleList = vehicleList;
        this.totalPages = Math.ceil(this.vehicleList.length / this.itemsPerPage);

        if (event && this.filteredRows.length === 1 && this.currentPage !== 1) {
          this.currentPage = this.totalPages;
        }

        this.filteredRows = this.paginate(this.vehicleList);
        this.totalPagesArray = this.calculateTotalPagesArray(this.currentPage, this.totalPages);
        this.loading = false;
      });
  }

  paginate(data: any[]): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return data.slice(startIndex, endIndex);
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

  filterItems() {
    this.filteredRows = this.paginate(this.vehicleList).filter(vehicle => {
      const vehicleValues = Object.keys(vehicle).map(keyframes => vehicle[keyframes]);
      return vehicleValues.toString().toLowerCase().includes(this.searchQuery.toLowerCase());
    });
  }

  delete(vehicle: string) {
    this.vehicleService.delete(vehicle).subscribe(() => {
      this.getAll(true);
    });
    swal({
      title: 'Deseja deletar o veículo ?',
      text: 'Esta ação não pode ser desfeita!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, finalizar!',
      cancelButtonText: 'Não, manter o veículo.',
      confirmButtonClass: 'btn btn-fill btn-success btn-mr-5',
      cancelButtonClass: 'btn btn-fill btn-danger',
      buttonsStyling: false,
    }).then(result => {
      if (result.value) {
        swal({
          title: 'Deletado !',
          text: 'O veículo foi deletado.',
          type: 'success',
          confirmButtonClass: 'btn btn-fill btn-success',
          buttonsStyling: false,
        }).catch(swal.noop);
        this.vehicleService.delete(vehicle).subscribe(() => {
          this.getAll(true);
        });
      } else {
        swal({
          title: 'Cancelado',
          text: 'O veículo não foi deletado.',
          type: 'error',
          confirmButtonClass: 'btn btn-fill btn-info',
          buttonsStyling: false,
        }).catch(swal.noop);
      }
    });
  }

  editProfile(vehicleId: string): void {
    this.router.navigate(['/components/new-vehicle'], {
      queryParams: { id: vehicleId },
    });
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.filteredRows = this.paginate(this.vehicleList);
      this.totalPagesArray = this.calculateTotalPagesArray(this.currentPage, this.totalPages);
    }
  }
}
