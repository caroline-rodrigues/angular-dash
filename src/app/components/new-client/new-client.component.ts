import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Client, ClientService } from "app/client/client.service";

@Component({
  selector: "app-new-client-cmp",
  templateUrl: "./new-client.component.html",
})
export class NewClientComponent implements OnInit {
  clienteForm: FormGroup;
  // cliente = {
  //   name: "",
  //   dataNascimento: "",
  //   cpf: "",
  // };
  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      name: ["", Validators.required],
      dateBirth: ["", Validators.required],
      cpf: ["", Validators.required],
      rg: [""],
      qualification: [""],
      complement: ["", Validators.required],
      city: ["", Validators.required],
      uf: ["", Validators.required],
      cep: ["", Validators.required],
      comments: [""],
      phone: ["", Validators.required],
      phone2: [""],
      email: ["", Validators.required],
      streetName: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      console.log(this.clienteForm.value);
      this.clientService.create(this.clienteForm.value as Client);
    } else {
      console.log("Formulário inválido. Verifique os campos obrigatórios.");
    }
  }
}
