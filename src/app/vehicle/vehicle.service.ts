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

  getVehicleById(id: string) {
    return this.http.get<any>(`${environment.api}/vehicle/findById/${id}`);
  }

  delete(id: string) {
    return this.http.delete<any>(`${environment.api}/vehicle/delete/${id}
    `);
  }

  create(vehicle: any) {
    return this.http.post<any>(`${environment.api}/vehicle/create/`, vehicle);
  }

  update(vehicle: any, id: string) {
    return this.http.put<any>(
      `${environment.api}/vehicle/update/${id}`,
      vehicle
    );
  }
}
