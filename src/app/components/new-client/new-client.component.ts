import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, ClientService } from 'app/client/client.service';

@Component({
  selector: 'app-new-client-cmp',
  templateUrl: './new-client.component.html',
})
export class NewClientComponent implements OnInit {
  clienteForm: FormGroup;
  submitted = false;
  clientId: string;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      name: ['', Validators.required],
      birthDate: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: [''],
      qualification: [''],
      complement: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      cep: ['', Validators.required],
      observation: [''],
      phone: ['', Validators.required],
      phone2: [''],
      email: ['', Validators.required],
      streetName: ['', Validators.required],
      plataform_user: [false, Validators.required],
      password: [''],
      driveLink: [''],
      active: [true],
    });

    this.route.queryParams.subscribe(queryParams => {
      if (queryParams.id) {
        this.clientId = queryParams.id;
        this.loadClientData(this.clientId);
      }
    });
    this.onPassword(this.clienteForm.value.plataform_user);
  }

  becomeAdmin() {
    this.onPassword(this.clienteForm.value.plataform_user);
  }

  onPassword(enable: boolean) {
    if (enable === true) {
      this.clienteForm.controls['password'].setValidators([Validators.required]);
      this.clienteForm.controls['password'].enable();
    } else {
      this.clienteForm.controls['password'].disable();
      this.clienteForm.controls['password'].clearValidators();
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.clienteForm.valid && !this.clientId) {
      this.clientService.create(this.clienteForm.value as Client).subscribe();
      this.router.navigate(['/client']);
    } else if (this.clienteForm.valid && this.clientId) {
      this.onUpdateClient(this.clienteForm.value, this.clientId);
      this.router.navigate(['/client']);
    } else {
      this.errorMessage = 'Formulário inválido. Verifique os campos obrigatórios.';
    }
  }

  loadClientData(clientId: string) {
    this.clientService.getClientById(clientId).subscribe(client => {
      client.birthDate = this.formatDateToISO(new Date(client.birthDate).toLocaleDateString(), '-');
      this.clienteForm.patchValue(client);
      this.onPassword(this.clienteForm.value.plataform_user);
    });
  }

  onUpdateClient(client: any, id: string) {
    this.clientService.update(client, id).subscribe();
  }

  private formatDateToISO(dateStr: string, spliter: string, plus?: string) {
    const [day, month, year] = dateStr.split('/');
    const dayPlus = plus ? Number(day) + 1 : Number(day);
    return `${year}${spliter}${month}${spliter}${dayPlus}`;
  }
}
