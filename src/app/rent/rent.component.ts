import { Component, OnInit } from "@angular/core";
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
  public tableData2: TableData;
  public tableData1: TableData;
  constructor(private rentService: RentService) {}

  ngOnInit() {
    this.tableData1 = {
      headerRow: ["#", "Name", "Job Position", "Since", "Salary", "Actions"],
      dataRows: [
        ["1", "Andrew Mike", "Develop", "2013", "99,225", ""],
        ["2", "John Doe", "Design", "2012", "89,241", ""],
        ["3", "Alex Mike", "Design", "2010", "92,144", ""],
        ["4", "Mike Monday", "Marketing", "2013", "49,990", ""],
        ["5", "Paul Dickens", "Communication", "2015", "69,201", ""],
      ],
    };
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
      .pipe(map((rentResponse) => rentResponse.results as Rent[]))
      .subscribe((rent) => {
        this.rentList = rent;
        // console.log("sub", this.rentList);
      });
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
}
