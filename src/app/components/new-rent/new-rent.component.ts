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
  vehicleToUpdate: any;

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
    this.route.queryParams.subscribe((queryParams) => {
      if (queryParams.id) {
        this.rentId = queryParams.id;
        this.loadRent(this.rentId);
      }
    });
    this.findAllVehicles();
    this.findAllClients();
  }

  createRentForm() {
    this.rentForm = this.formBuilder.group({
      clientId: ["", Validators.required],
      cpf: ["", Validators.required],
      plate: ["", Validators.required],
      vehicleId: ["", Validators.required],
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
      if (selectedClient && selectedClient.cpf) {
        this.rentForm
          .get("cpf")
          .setValue(selectedClient.cpf, { emitEvent: false });
      } else {
        this.rentForm.get("cpf").setValue("", { emitEvent: false });
      }
    });
    this.rentForm.get("vehicleId").valueChanges.subscribe((selectedVehicle) => {
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
      this.router.navigate(["/rent"]);
    } else if (this.rentForm.valid && this.rentId) {
      const rent = this.rentForm.value as RentDto;
      rent.occurrences = this.occurrenceList as OccurrenceDto[];
      this.onUpdateRent(rent, this.rentId);
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
        const clientToUpdateForm = this.rentForm.get("clientId").value;
        if (clientToUpdateForm !== "") {
          const filteredClients = client.filter(
            (v) => v._id !== clientToUpdateForm
          );
          this.clientService
            .getClientById(clientToUpdateForm)
            .subscribe((clientResult) => {
              this.clientList.unshift(clientResult);
              this.rentForm.get("cpf").setValue(clientResult.cpf);
              this.clientList = [clientResult, ...filteredClients];
            });
        } else {
          this.clientList = client;
        }
      });
  }
  findAllVehicles() {
    this.vehicleService
      .getAll()
      .pipe(map((vehicletResponse) => vehicletResponse.results))
      .subscribe((vehicle) => {
        const vehicleToUpdateForm = this.rentForm.get("vehicleId").value;
        if (vehicleToUpdateForm !== "") {
          const filteredVehicles = vehicle.filter(
            (v) => v._id !== vehicleToUpdateForm
          );
          this.vehicleService
            .getVehicleById(vehicleToUpdateForm)
            .subscribe((vehicleResult) => {
              this.vehicleList.unshift(vehicleResult);
              this.rentForm.get("plate").setValue(vehicleResult.plate);
              this.vehicleList = [vehicleResult, ...filteredVehicles];
            });
        } else {
          this.vehicleList = vehicle;
        }
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

  loadRent(rentId: string) {
    this.rentService.getById(rentId).subscribe((rent) => {
      this.rentForm.patchValue(rent);
      this.rentForm
        .get("startDate")
        .setValue(
          this.formatDateToISO(new Date(rent.startDate).toLocaleDateString())
        );
      this.rentForm
        .get("endDate")
        .setValue(
          this.formatDateToISO(new Date(rent.endDate).toLocaleDateString())
        );
      this.rentForm
        .get("validity")
        .setValue(
          this.formatDateToISO(new Date(rent.validity).toLocaleDateString())
        );
      this.occurrenceList = rent.occurrences;
      this.findAllVehicles();
      this.findAllClients();
    });
  }

  onUpdateRent(rent: any, id: string) {
    this.rentService.update(rent, id).subscribe();
  }
}
