import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class RentService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(`${environment.api}/rent/findAll`);
  }
  allRentStatus() {
    return this.http.get<any>(`${environment.api}/rent/rentalStatus`);
  }

  delete(id: string) {
    return this.http.delete<any>(`${environment.api}/rent/delete/${id}
    `);
  }

  create(rent: RentDto) {
    return this.http.post<any>(`${environment.api}/rent/create`, rent);
  }

  getById(id: string) {
    return this.http.get<any>(`${environment.api}/rent/findById/${id}`);
  }

  update(rent: any, id: string) {
    return this.http.put<any>(`${environment.api}/rent/update/${id}`, rent);
  }
}
