import { Component, OnInit } from "@angular/core";
import { ClientService } from "app/client/client.service";
import { VehicleService } from "app/vehicle/vehicle.service";
import { map } from "rxjs/operators";

declare interface User {
  text?: string;
  email?: string; //  must be valid email format
  password?: string; // required, value must be equal to confirm password.
  confirmPassword?: string; // required, value must be equal to password.
  number?: number; // required, value must be equal to password.
  url?: string;
  idSource?: string;
  idDestination?: string;
}

@Component({
  selector: "app-new-rent-cmp",
  templateUrl: "./new-rent.component.html",
})
export class NewRentComponent implements OnInit {
  public typeValidation: User;
  clientList: any[] = [];
  vehicleList: any[] = [];

  constructor(
    private clientService: ClientService,
    private vehicleService: VehicleService
  ) {}

  ngOnInit() {
    this.typeValidation = {
      text: "",
      email: "",
      idSource: "",
      idDestination: "",
      url: "",
    };
    this.findAllClients();
    this.findAllVehicles();
  }

  findAllClients() {
    this.clientService
      .getAll()
      .pipe(map((clientResponse) => clientResponse.results))
      .subscribe((client) => {
        this.clientList = client;
      });
  }
  findAllVehicles() {
    this.vehicleService
      .getAll()
      .pipe(map((vehicletResponse) => vehicletResponse.results))
      .subscribe((vehicle) => {
        this.vehicleList = vehicle;
        console.log(vehicle);
      });
  }
}
