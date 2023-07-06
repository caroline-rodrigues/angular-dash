import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Rent } from "./rent";
import { RentService } from "./rent.service";
import { map } from "rxjs/operators";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  moduleId: module.id,
  selector: "rent-cmp",
  templateUrl: "./rent.component.html",
})
export class RentComponent implements OnInit {
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

  constructor(private rentService: RentService) {}

  ngOnInit() {
    // this.rentService.getAll().subscribe((rent) => {
    //   this.rentList = rent;
    // });
    // this.rentService
    //   .getAll()
    //   .pipe(
    //     map((rentResponse) => {
    //       rentResponse?.results;
    //     })
    //   )
    //   .subscribe((rent) => {
    //     this.rentList = rent;
    //   });

    this.rentService
      .getAll()
      .pipe(map((rentResponse) => rentResponse.filteredEntityResults))
      .subscribe((rent) => {
        this.rentList.push(...rent);
        // this.rentList = this.rentList.flat()
      });
    console.log("sub", this.rentList);
    // console.log(this.rentList);

    // this.rentTable.dataRows.

    // this.rentTable.headerRow = [
    //   "#",
    //   "Name",
    //   "Job Position",
    //   "Since",
    //   "Salary",
    //   "Actions",
    // ];
    // this.rentList.forEach((rent) => {
    //   this.rentTable.dataRows.push(rent);
    // });
  }

  delete(id: string) {
    this.rentService.delete(id).subscribe(() => {
      this.onDeleteRent.emit(id);
      console.log("delete", id);
    });
  }

  onDeletedRent(id: string) {
    console.log("id", id);
    if (id) {
      console.log("opaaa");
      const index = this.rentList.findIndex(
        (rentItem) => rentItem.rent._id == id
      );
      this.rentList.splice(index, 1);
    }
  }
}
