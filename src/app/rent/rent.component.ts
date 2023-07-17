import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Rent } from "./rent";
import { RentService } from "./rent.service";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { Subject } from "rxjs";

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
  searchQuery: string;
  filteredRows: Row[];
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

  constructor(private rentService: RentService) {}

  ngOnInit() {
    this.rows = [
      {
        rent: {
          _id: "1",
          endDate: "2023-07-20",
          situation: "active",
        },
        client: {
          name: "John Doe",
          cpf: "12345678901",
        },
        vehicle: {
          brand: "Toyota",
        },
      },
      {
        rent: {
          _id: "2",
          endDate: "2023-07-22",
          situation: "inactive",
        },
        client: {
          name: "Jane Smith",
          cpf: "98765432109",
        },
        vehicle: {
          brand: "Honda",
        },
      },
      {
        rent: {
          _id: "3",
          endDate: "2023-07-25",
          situation: "active",
        },
        client: {
          name: "Michael Johnson",
          cpf: "45678912304",
        },
        vehicle: {
          brand: "Ford",
        },
      },
      {
        rent: {
          _id: "4",
          endDate: "2023-07-30",
          situation: "inactive",
        },
        client: {
          name: "Emily Davis",
          cpf: "65432198706",
        },
        vehicle: {
          brand: "Chevrolet",
        },
      },
      {
        rent: {
          _id: "5",
          endDate: "2023-08-02",
          situation: "active",
        },
        client: {
          name: "Daniel Wilson",
          cpf: "78912345603",
        },
        vehicle: {
          brand: "Volkswagen",
        },
      },
    ];
    this.filteredRows = this.rows;
    this.searchQueryChanged
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((query) => {
        this.search(query);
      });
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

  search(query: string): void {
    if (query) {
      this.filteredRows = this.rows.filter((row) => {
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
      this.filteredRows = this.rows;
    }
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
