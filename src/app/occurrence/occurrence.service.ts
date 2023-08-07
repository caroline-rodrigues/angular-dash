import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class OccurrenceService {
  constructor(private http: HttpClient) {}

  create(occurrence: any) {
    return this.http.post<OccurrenceDto>(
      `${environment.api}/occurrence/create`,
      occurrence
    );
  }

  delete(id: string) {
    console.log(id);
    return this.http.delete<any>(`${environment.api}/occurrence/delete/${id}
    `);
  }
}
