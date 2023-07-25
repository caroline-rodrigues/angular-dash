import { Component, OnInit } from "@angular/core";
import { ClientService } from "./client.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-client-cmp",
  templateUrl: "./client.component.html",
})
export class ClientComponent implements OnInit {
  currentPage: number = 1;
  itemsPerPage: number = 10;
  pagesToShow: number = 3;
  filteredRows: any[];
  totalPagesArray: any[] = [];
  totalPages: number;
  clientList: any[] = [];
  headerRow: string[] = [
    "ID",
    "Nome",
    "CPF",
    "Data cadastro",
    "Aniversário",
    "Situação",
    "Ações",
  ];
  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService
      .getAll()
      .pipe(map((clientResponse) => clientResponse.results))
      .subscribe((client) => {
        this.clientList = client;
        this.filteredRows = this.paginate(this.clientList);
        this.totalPages = Math.ceil(this.clientList.length / this.itemsPerPage);
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
      this.filteredRows = this.paginate(this.clientList);
      this.totalPagesArray = this.calculateTotalPagesArray(
        this.currentPage,
        this.totalPages
      );
    }
  }
}
