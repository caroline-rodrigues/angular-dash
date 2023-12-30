import { Component, OnInit } from '@angular/core';
import { ClientService } from 'app/client/client.service';
import { VehicleService } from 'app/vehicle/vehicle.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { RentService } from 'app/rent/rent.service';
import { OccurrenceService } from 'app/occurrence/occurrence.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-rent-cmp',
  templateUrl: './new-rent.component.html',
})
export class NewRentComponent implements OnInit {
  clientList: any[] = [];
  vehicleList: any[] = [];
  rentForm: FormGroup;
  rentDto: RentDto;
  occurrenceForm: FormGroup;
  occurrenceList: any[] = [];
  rentId: string;
  headerRow: string[] = ['Data de entrega', 'Tipo de ocorrência', 'Observação'];
  occurrenceType: string[] = ['Multas', 'Avarias', 'Combustível', 'outros'];
  vehicleToUpdate: any;
  submitted = false;
  errorMessages: string;
  createErrorMessage: string;
  defaultMessageVehicle: string = 'Selecione um veículo';
  hasVihiclelist: boolean = false;
  hasClientList: boolean = false;

  constructor(
    private clientService: ClientService,
    private vehicleService: VehicleService,
    private rentService: RentService,
    private occurrenceService: OccurrenceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.createRentForm();
    this.route.queryParams.subscribe(queryParams => {
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
      clientId: ['', Validators.required],
      cpf: ['', Validators.required],
      plate: ['', Validators.required],
      vehicle: ['', Validators.required],
      startDate: [null],
      exitTime: [''],
      outputKm: [''],
      endDate: [null],
      arrivalTime: [''],
      arrivalKM: [''],
      card: [''],
      cardNumber: [''],
      securityCode: [''],
      validity: [null],
      franchise: [''],
      aboutCard: [''],
      dailyValue: [''],
      excedentKm: [''],
      otherExpenses: [''],
      extraHour: [''],
      discounts: [''],
      totalReceivable: [''],
      aboutRent: [''],
    });

    this.occurrenceForm = this.formBuilder.group({
      createdAt: ['', Validators.required],
      observation: [''],
      type: ['', Validators.required],
    });

    this.rentForm.get('clientId').valueChanges.subscribe(selectedClient => {
      if (selectedClient && selectedClient.cpf) {
        this.rentForm.get('cpf').setValue(selectedClient.cpf, { emitEvent: false });
      } else {
        this.rentForm.get('cpf').setValue('', { emitEvent: false });
      }
    });
    this.rentForm.get('vehicle').valueChanges.subscribe(selectedVehicle => {
      if (selectedVehicle && selectedVehicle.plate) {
        this.rentForm.get('plate').setValue(selectedVehicle.plate, { emitEvent: false });
      } else {
        this.rentForm.get('plate').setValue('', { emitEvent: false });
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.rentForm.valid && !this.rentId) {
      const rent = this.rentForm.value as RentDto;
      rent.occurrences = this.occurrenceList as OccurrenceDto[];
      rent.vehicle.rented = true;
      rent.endDate = this.rentForm.get('endDate').value
        ? this.formatDateToISO(new Date(this.rentForm.get('endDate').value).toLocaleDateString(), '-', 'true')
        : null;
      rent.startDate = this.rentForm.get('startDate').value
        ? this.formatDateToISO(new Date(this.rentForm.get('startDate').value).toLocaleDateString(), '-', 'true')
        : null;
      const vehicleUpdate = rent.vehicle;
      this.vehicleService.update(vehicleUpdate, vehicleUpdate._id).subscribe();
      this.occurrenceList.forEach(occurrence => {
        this.occurrenceService.create(occurrence as OccurrenceDto).subscribe();
      });
      this.rentService.create(rent).subscribe();
      this.router.navigate(['/rent']);
    } else if (this.rentForm.valid && this.rentId) {
      const rent = this.rentForm.value as RentDto;
      rent.occurrences = this.occurrenceList as OccurrenceDto[];
      this.onUpdateRent(rent, this.rentId);
      this.router.navigate(['/rent']);
    } else {
      this.errorMessages = 'Formulário inválido. Verifique os campos obrigatórios.';
    }
  }

  findAllClients() {
    this.clientService
      .getAll()
      .pipe(map(clientResponse => clientResponse.results))
      .subscribe(client => {
        const clientToUpdateForm = this.rentForm.get('clientId').value;
        if (clientToUpdateForm !== '') {
          const filteredClients = client.filter(clientToFilter => clientToFilter._id !== clientToUpdateForm);
          this.clientService.getClientById(clientToUpdateForm).subscribe(clientResult => {
            this.clientList.unshift(clientResult);
            this.rentForm.get('cpf').setValue(clientResult.cpf);
            this.clientList = [clientResult, ...filteredClients];
          });
        } else {
          this.clientList = client.filter(clientToFilter => !clientToFilter.plataform_user);
        }
      });
    this.clientList.length > 0 ? (this.hasClientList = true) : (this.hasClientList = false);
  }
  findAllVehicles() {
    this.vehicleService
      .getAll()
      .pipe(map(vehicletResponse => vehicletResponse.results))
      .subscribe(vehicle => {
        const vehicleToUpdateForm = this.rentForm.get('vehicle').value;
        if (vehicleToUpdateForm !== '') {
          const filteredVehicles = vehicle.filter(vehicle => vehicle._id !== vehicleToUpdateForm);
          this.vehicleService.getVehicleById(vehicleToUpdateForm).subscribe(vehicleResult => {
            this.vehicleList.unshift(vehicleResult);
            this.rentForm.get('plate').setValue(vehicleResult.plate);
            this.vehicleList = [vehicleResult, ...filteredVehicles];
          });
        } else {
          const list = vehicle.filter(vehicle => !vehicle.rented);
          console.log({ list });
          this.vehicleList = list;
        }
      });
    this.vehicleList.length > 0 ? (this.hasVihiclelist = true) : (this.hasVihiclelist = false);
  }

  private formatDateToISO(dateStr: string, spliter: string, plus?: string) {
    const [day, month, year] = dateStr.split('/');
    const dayPlus = plus ? Number(day) + 1 : Number(day);
    return `${year}${spliter}${month}${spliter}${dayPlus}`;
  }

  onCreateOcuurence() {
    if (this.occurrenceForm.valid && !this.rentId) {
      this.occurrenceList.push(this.occurrenceForm.value);
    } else if (this.occurrenceForm.valid && this.rentId) {
      this.occurrenceList.push(this.occurrenceForm.value);
    } else {
      this.createErrorMessage = 'Formulário inválido. Verifique os campos obrigatórios.';
    }
  }

  removeOcurrence(i: any) {
    if (this.occurrenceList[i]._id) {
      this.occurrenceService.delete(this.occurrenceList[i]._id).subscribe();
    }
    this.occurrenceList.splice(i, 1);
  }

  loadRent(rentId: string) {
    this.rentService.getById(rentId).subscribe(rent => {
      rent.startDate = rent.startDate ? this.formatDateToISO(new Date(rent.startDate).toLocaleDateString(), '-') : null;
      rent.endDate = rent.endDate ? this.formatDateToISO(new Date(rent.endDate).toLocaleDateString(), '-') : null;
      rent.validity = rent.validity ? this.formatDateToISO(new Date(rent.validity).toLocaleDateString(), '-') : null;
      this.rentForm.patchValue(rent);

      this.occurrenceList = rent.occurrences.map(ocorrunce => {
        ocorrunce.createdAt = this.formatDateToISO(new Date(ocorrunce.createdAt).toLocaleDateString(), '/');
        return ocorrunce;
      });
      this.findAllVehicles();
      this.findAllClients();
    });
  }

  onUpdateRent(rent: any, id: string) {
    this.rentService.update(rent, id).subscribe();
  }
}
