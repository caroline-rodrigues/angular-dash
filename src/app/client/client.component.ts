import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";
import { ClientService } from "./client.service";

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
  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.getAll(false);
  }

  getAll(event: boolean) {
    this.clientService
      .getAll()
      .pipe(map((clientResponse) => clientResponse.results))
      .subscribe((clientList) => {
        this.clientList = clientList;
        this.totalPages = Math.ceil(this.clientList.length / this.itemsPerPage);

        if (event && this.filteredRows.length === 1 && this.currentPage !== 1) {
          this.currentPage = this.totalPages;
        }

        this.filteredRows = this.paginate(this.clientList);
        this.totalPagesArray = this.calculateTotalPagesArray(
          this.currentPage,
          this.totalPages
        );
      });
  }

  delete(client: string) {
    this.clientService.delete(client).subscribe(() => {
      this.getAll(true);
    });
  }

  editProfile(clientId: string): void {
    this.router.navigate(["/components/new-client"], {
      queryParams: { id: clientId },
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
