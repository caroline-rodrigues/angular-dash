import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "environments/environment";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private readonly JWT_TOKEN = "JWT_TOKEN";
  private readonly REFRESH_TOKEN = "REFRESH_TOKEN";
  private loggedUser: string;

  constructor(private http: HttpClient, private router: Router) {}

  login(user: { email: string; password: string }) {
    return this.http
      .post<any>(`${environment.api}/auth/login`, user)
      .subscribe((result) => {
        localStorage.setItem("access_token", result.access_token);
        this.router.navigate(["/dashboard"]);
      });
  }

  handleError(error: HttpErrorResponse) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Erro : ${error.status}\n ${error.message}`;
    }
    return throwError(msg);
  }

  getToken() {
    return localStorage.getItem("access_token");
  }
  test() {
    console.log("opa");
  }
  isLoggedIn(): boolean {
    let authToken = localStorage.getItem("access_token");

    const islogged = authToken !== null ? true : false;
    return islogged;
  }
  doLogout() {
    let removeToken = localStorage.removeItem("access_token");
    if (removeToken == null) {
      this.router.navigate(["pages/login"]);
    }
  }
}
