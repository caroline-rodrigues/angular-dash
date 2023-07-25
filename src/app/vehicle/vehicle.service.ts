import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(`${environment.api}/vehicle/findAll`);
  }

  delete(id: string) {
    return this.http.delete<any>(`${environment.api}/vehicle/delete/${id}
    `);
  }
}
