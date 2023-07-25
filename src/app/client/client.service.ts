import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "environments/environment";

export interface Client {
  name: string;
  dateBirth: string;
  cpf: string;
  rg?: string;
  qualification?: string;
  complement: string;
  city: string;
  uf: string;
  cep: string;
  comments?: string;
  phone: string;
  phone2?: string;
  email: string;
  streetName: string;
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
    return this.http.post<any>(`${environment.api}/client/create`, client);
  }

  delete(id: string) {
    return this.http.delete<any>(`${environment.api}/client/delete/${id}
    `);
  }
}
