import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { OccurrenceService } from "app/occurrence/occurrence.service";
import { VehicleService } from "app/vehicle/vehicle.service";

@Component({
  selector: "app-new-vehicle-cmp",
  templateUrl: "./new-vehicle.component.html",
})
export class NewVehicletComponent implements OnInit {
  vehicleForm: FormGroup;
  occurrenceForm: FormGroup;
  occurrenceList: any[] = [];
  headerRow: string[] = ["Data de entrega", "Tipo de ocorrência", "Observação"];
  occurrenceType: string[] = ["Avaria", "Atraso", "Outros"];
  vehicleId: string;

  constructor(
    private formBuilder: FormBuilder,
    private vehicleService: VehicleService,
    private occurrenceService: OccurrenceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.createVehicleForm();
  }

  createVehicleForm() {
    this.vehicleForm = this.formBuilder.group({
      name: ["", Validators.required],
      purchaseDate: ["", Validators.required],
      brand: ["", Validators.required],
      color: ["", Validators.required],
      plate: ["", Validators.required],
      chassi: ["", Validators.required],
      year: ["", Validators.required],
      maintenance: [false],
      rented: [false],
    });

    this.occurrenceForm = this.formBuilder.group({
      createdAt: ["", Validators.required],
      observation: [""],
      type: ["", Validators.required],
    });

    this.route.queryParams.subscribe((queryParams) => {
      if (queryParams.id) {
        this.vehicleId = queryParams.id;
        this.loadVehicle(this.vehicleId);
      }
    });
  }

  onSubmit() {
    if (this.vehicleForm.valid && !this.vehicleId) {
      const vehicle = this.vehicleForm.value as VehicleDto;
      vehicle.occurrences = this.occurrenceList as OccurrenceDto[];
      vehicle.available = true;
      this.occurrenceList.forEach((occurrence) => {
        this.occurrenceService.create(occurrence as OccurrenceDto).subscribe();
      });
      this.vehicleService.create(this.vehicleForm.value).subscribe();

      this.router.navigate(["/vehicle"]);
    } else if (this.vehicleForm.valid && this.vehicleId) {
      const vehicle = this.vehicleForm.value as VehicleDto;
      console.log({ vehicle });
      vehicle.occurrences = this.occurrenceList as OccurrenceDto[];
      this.onUpdateClient(vehicle, this.vehicleId);
      this.router.navigate(["/vehicle"]);
    } else {
      console.log("Formulário inválido. Verifique os campos obrigatórios.");
    }
  }

  onCreateOcuurence() {
    if (this.occurrenceForm.valid && !this.vehicleId) {
      this.occurrenceList.push(this.occurrenceForm.value);
    } else if (this.occurrenceForm.valid && this.vehicleId) {
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

  loadVehicle(vehicleId: string) {
    this.vehicleService.getVehicleById(vehicleId).subscribe((vehicle) => {
      console.log({ vehicle });
      this.vehicleForm.patchValue(vehicle);
      this.occurrenceList = vehicle.occurrences;
      this.onAvaible(this.vehicleForm.value.available);
    });
  }

  onUpdateClient(client: any, id: string) {
    this.vehicleService.update(client, id).subscribe();
  }

  isAvaible() {
    this.onAvaible(this.vehicleForm.value.available);
  }

  onAvaible(isAvaible: any) {
    this.vehicleForm.get("available").setValue(isAvaible);
  }
}
