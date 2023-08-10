import { Component, OnInit } from "@angular/core";
import { ClientService } from "app/client/client.service";
import { VehicleService } from "app/vehicle/vehicle.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { map } from "rxjs/operators";
import { RentService } from "app/rent/rent.service";
import { OccurrenceService } from "app/occurrence/occurrence.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-new-rent-cmp",
  templateUrl: "./new-rent.component.html",
})
export class NewRentComponent implements OnInit {
  clientList: any[] = [];
  vehicleList: any[] = [];
  rentForm: FormGroup;
  rentDto: RentDto;
  occurrenceForm: FormGroup;
  occurrenceList: any[] = [];
  rentId: string;
  headerRow: string[] = ["Data de entrega", "Tipo de ocorrência", "Observação"];
  occurrenceType: string[] = ["TESTE", "TESTE2", "TESTE3", "TESTE4", "TESTE5"];

  constructor(
    private clientService: ClientService,
    private vehicleService: VehicleService,
    private rentService: RentService,
    private occurrenceService: OccurrenceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.createRentForm();
    this.findAllClients();
    this.findAllVehicles();
  }

  createRentForm() {
    this.rentForm = this.formBuilder.group({
      clientId: ["", Validators.required],
      cpf: ["", Validators.required],
      plate: ["", Validators.required],
      vehicleId: ["", Validators.required],
      idDestination: [""],
      startDate: [""],
      exitTime: [""],
      outputKm: [""],
      endDate: [""],
      arrivalTime: [""],
      arrivalKM: [""],
      card: [""],
      cardNumber: [""],
      securityCode: [""],
      validity: [""],
      franchise: [""],
      aboutCard: [""],
      dailyValue: [""],
      excedentKm: [""],
      otherExpenses: [""],
      extraHour: [""],
      discounts: [""],
      totalReceivable: [""],
      aboutRent: [""],
    });

    this.occurrenceForm = this.formBuilder.group({
      createdAt: [""],
      observation: [""],
      type: [""],
    });

    this.rentForm.get("clientId").valueChanges.subscribe((selectedClient) => {
      console.log(selectedClient);
      if (selectedClient && selectedClient.cpf) {
        this.rentForm
          .get("cpf")
          .setValue(selectedClient.cpf, { emitEvent: false });
      } else {
        this.rentForm.get("cpf").setValue("", { emitEvent: false });
      }
    });
    this.rentForm.get("vehicleId").valueChanges.subscribe((selectedVehicle) => {
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
    if (this.rentForm.valid && !this.rentId) {
      const rent = this.rentForm.value as RentDto;
      rent.occurrences = this.occurrenceList as OccurrenceDto[];
      this.occurrenceList.forEach((occurrence) => {
        this.occurrenceService.create(occurrence as OccurrenceDto).subscribe();
      });
      this.rentService.create(rent).subscribe();
    } else if (this.rentForm.valid && this.rentId) {
      const rent = this.rentForm.value as RentDto;
      rent.occurrences = this.occurrenceList as OccurrenceDto[];
      this.router.navigate(["/rent"]);
    } else {
      console.log("Formulário inválido. Verifique os campos obrigatórios.");
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

  formatDateToISO(dateStr: string) {
    const [day, month, year] = dateStr.split("/");
    return `${year}-${month}-${day}`;
  }

  onCreateOcuurence() {
    if (this.occurrenceForm.valid && !this.rentId) {
      this.occurrenceList.push(this.occurrenceForm.value);
    } else if (this.occurrenceForm.valid && this.rentId) {
      this.occurrenceList.push(this.occurrenceForm.value);
    } else {
      console.log("Formulário inválido. Verifique os campos obrigatórios.");
    }
  }

  removeOcurrence(i: any) {
    if (this.occurrenceList[i]._id) {
      this.occurrenceService.delete(this.occurrenceList[i]._id).subscribe();
    }
    this.occurrenceList.splice(i, 1);
  }
}
