import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "environments/environment";

export interface Client {
  name: string;
  birthDate: string;
  cpf: string;
  rg?: string;
  qualification?: string;
  complement: string;
  city: string;
  state: string;
  cep: string;
  comments?: string;
  phone: string;
  phone2?: string;
  email: string;
  streetName: string;
  active: boolean;
}

@Injectable({
  providedIn: "root",
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(`${environment.api}/client/findAll`);
  }

  create(client: Client) {
    console.log(client);
    return this.http.post<Client>(`${environment.api}/client/create`, client);
  }
  update(client: Client, id: string) {
    console.log("deu bom no subs");
    return this.http.put<Client>(
      `${environment.api}/client/update/${id}`,
      client
    );
  }

  delete(id: string) {
    return this.http.delete<Client>(`${environment.api}/client/delete/${id}
    `);
  }

  getClientById(id: string) {
    return this.http.get<any>(`${environment.api}/client/findById/${id}
    `);
  }
}
