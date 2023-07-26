import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Client, ClientService } from "app/client/client.service";

@Component({
  selector: "app-new-client-cmp",
  templateUrl: "./new-client.component.html",
})
export class NewClientComponent implements OnInit {
  clienteForm: FormGroup;
  clientId: string;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      name: ["", Validators.required],
      birthDate: ["", Validators.required],
      cpf: ["", Validators.required],
      rg: [""],
      qualification: [""],
      complement: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      cep: ["", Validators.required],
      comments: [""],
      phone: ["", Validators.required],
      phone2: [""],
      email: ["", Validators.required],
      streetName: ["", Validators.required],
      active: [true],
    });

    this.route.queryParams.subscribe((queryParams) => {
      if (queryParams.id) {
        this.clientId = queryParams.id;
        this.loadClientData(this.clientId);
      }
    });
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      this.clientService.create(this.clienteForm.value as Client).subscribe();
      this.router.navigate(["/client"]);
    } else {
      console.log("Formulário inválido. Verifique os campos obrigatórios.");
    }
  }

  loadClientData(clientId: string) {
    this.clientService.getClientById(clientId).subscribe((client) => {
      console.log(client);
      client.birthDate = this.formatDateToISO(new Date().toLocaleDateString());

      this.clienteForm.patchValue(client);
      console.log(this.clienteForm.value);

      this.clienteForm.patchValue(client);
    });
  }

  formatDateToISO(dateStr: string) {
    const [day, month, year] = dateStr.split("/");
    return `${year}-${month}-${day}`;
  }
}
