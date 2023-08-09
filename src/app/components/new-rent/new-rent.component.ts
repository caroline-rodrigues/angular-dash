import { Component, OnInit } from "@angular/core";
import { ClientService } from "app/client/client.service";
import { VehicleService } from "app/vehicle/vehicle.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { map } from "rxjs/operators";

declare interface User {
  text?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  number?: number;
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
  rentForm: FormGroup;
  selectedClient: any;

  constructor(
    private clientService: ClientService,
    private vehicleService: VehicleService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createRentForm();
    this.findAllClients();
    this.findAllVehicles();
    // this.rentForm = this.formBuilder.group({
    //   cpf: [""],
    //   plate: [""],
    //   email: [""],
    //   idSource: [""],
    //   idDestination: [""],
    //   url: [""],
    // });
  }

  createRentForm() {
    this.rentForm = this.formBuilder.group({
      client: [""],
      cpf: ["", Validators.required],
      plate: ["", Validators.required],
      vehicle: [""],
      email: ["", Validators.email],
      idSource: [""],
      idDestination: [""],
      url: [""],
      // ... other form fields ...
    });

    this.rentForm.get("client").valueChanges.subscribe((selectedClient) => {
      console.log(selectedClient);
      if (selectedClient && selectedClient.cpf) {
        this.rentForm
          .get("cpf")
          .setValue(selectedClient.cpf, { emitEvent: false });
      } else {
        this.rentForm.get("cpf").setValue("", { emitEvent: false });
      }
    });
    this.rentForm.get("vehicle").valueChanges.subscribe((selectedVehicle) => {
      console.log(selectedVehicle);
      if (selectedVehicle && selectedVehicle.plate) {
        this.rentForm
          .get("plate")
          .setValue(selectedVehicle.plate, { emitEvent: false });
      } else {
        this.rentForm.get("plate").setValue("", { emitEvent: false });
      }
    });
  }

  onSubmit() {
    if (this.rentForm.valid) {
      // Do something with the form data
      console.log(this.rentForm.value);
    }
  }

  findAllClients() {
    this.clientService
      .getAll()
      .pipe(map((clientResponse) => clientResponse.results))
      .subscribe((client) => {
        this.clientList = client;
        console.log(this.clientList);
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

  onClientSelect(valorSelecionado: any) {
    console.log({ valorSelecionado });
    this.selectedClient = valorSelecionado;
  }
}
