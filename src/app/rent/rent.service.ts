import { Injectable } from "@angular/core";
import { Rent } from "./rent";
import { HttpClient } from "@angular/common/http";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class RentService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(`${environment.api}/rent/findAll`);
  }

  delete(id: string) {
    console.log("opa", id);
    return this.http.delete<any>(`${environment.api}/rent/delete/${id}
    `);
  }
}
