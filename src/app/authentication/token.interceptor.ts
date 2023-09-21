import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "./services/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authService: AuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authService.getToken();
    req = req.clone({
      setHeaders: {
        Authorization: "Bearer " + authToken,
      },
    });
    return next.handle(req);
  }
}
