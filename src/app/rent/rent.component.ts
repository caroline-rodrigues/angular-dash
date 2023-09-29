import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";
import { RentService } from "./rent.service";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

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
  selector: "rent-cmp",
  templateUrl: "./rent.component.html",
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
  headerRow: string[] = [
    "ID",
    "Nome",
    "CPF",
    "Data devolução",
    "Modelo",
    "Situação",
    "Ações",
  ];

  constructor(private rentService: RentService, private router: Router) {}

  ngOnInit() {
    this.getAll(false);
  }

  paginate(data: any[]): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return data.slice(startIndex, endIndex);
  }

  getAll(event: boolean) {
    this.rentService
      .getAll()
      .pipe(map((rentResponse) => rentResponse.filteredEntityResults))
      .subscribe((rentList) => {
        this.rentList = rentList.map((rent) => {
          const { _id, endDate } = rent.rent;
          const { name, cpf } = rent.client;
          const { brand } = rent.vehicle;
          return {
            rent: {
              _id,
              endDate: this.formatDateToISO(
                new Date(endDate).toLocaleDateString(),
                "-"
              ),
            },
            client: {
              name,
              cpf,
            },
            vehicle: {
              brand,
            },
            status: rent.status,
          };
        });
        console.log(rentList);
        this.totalPages = Math.ceil(this.rentList.length / this.itemsPerPage);

        if (event && this.filteredRows.length === 1 && this.currentPage !== 1) {
          this.currentPage = this.totalPages;
        }

        this.filteredRows = this.paginate(this.rentList);
        this.totalPagesArray = this.calculateTotalPagesArray(
          this.currentPage,
          this.totalPages
        );
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
      this.totalPagesArray = this.calculateTotalPagesArray(
        this.currentPage,
        this.totalPages
      );
    }
  }

  onDeletedRent(rentId: string) {
    this.rentService.delete(rentId).subscribe(() => {
      this.getAll(true);
    });
  }

  editRent(rentId: string): void {
    this.router.navigate(["/components/new-rent"], {
      queryParams: { id: rentId },
    });
  }

  filterItems() {
    console.log(this.searchQuery);
    this.filteredRows = this.paginate(this.rentList).filter((rent) => {
      const { _id, endDate } = rent.rent;
      const { name, cpf } = rent.client;
      const contentString = `${_id}${name}${cpf}${endDate}`;
      console.log(contentString);
      return contentString
        .toString()
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase());
    });
  }

  private formatDateToISO(dateStr: string, spliter: string) {
    const [day, month, year] = dateStr.split("/");
    return `${year}${spliter}${month}${spliter}${day}`;
  }
}
