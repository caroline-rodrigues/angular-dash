import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Rent } from "./rent";
import { RentService } from "./rent.service";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

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
  filteredRows: Row[];
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

  @Output()
  onDeleteRent = new EventEmitter();

  private searchQueryChanged = new Subject<string>();

  constructor(private rentService: RentService, private router: Router) {}

  ngOnInit() {
    this.findAllRent();
    this.searchQueryChanged
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((query) => {
        this.search(query);
      });

    for (let i = 1; i <= 4; i++) {
      this.totalPagesArray.push(i);
    }
  }
  paginate(data: any[]): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return data.slice(startIndex, endIndex);
  }

  search(query: string): void {
    if (query) {
      this.currentPage = 1;
      this.filteredRows = this.rentList.filter((row) => {
        return (
          row.client.name.toLowerCase().includes(query.toLowerCase()) ||
          row.client.cpf.includes(query.toLowerCase()) ||
          row.rent._id.includes(query.toLowerCase()) ||
          row.rent.endDate.includes(query.toLowerCase()) ||
          row.vehicle.brand.toLowerCase().includes(query.toLowerCase()) ||
          row.rent.situation.toLowerCase().includes(query.toLowerCase())
        );
      });
    } else {
      this.filteredRows = this.paginate(this.rentList);
    }
  }

  findAllRent() {
    this.rentService
      .getAll()
      .pipe(map((rentResponse) => rentResponse.filteredEntityResults))
      .subscribe((rent) => {
        this.rentList = rent;
        this.filteredRows = this.paginate(this.rentList);
        this.totalPages = Math.ceil(this.rentList.length / this.itemsPerPage);
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

  delete(id: string) {
    this.rentService.delete(id).subscribe(() => {
      this.onDeleteRent.emit(id);
    });
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

  onDeletedRent(id: string) {
    if (id) {
      const index = this.rentList.findIndex(
        (rentItem) => rentItem.rent._id == id
      );
      this.rentList.splice(index, 1);
      this.findAllRent();
    }
  }

  editRent(rentId: string): void {
    this.router.navigate(["/components/new-rent"], {
      queryParams: { id: rentId },
    });
  }
}
