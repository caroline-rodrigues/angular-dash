import { Routes } from "@angular/router";

import { ButtonsComponent } from "./buttons/buttons.component";
import { GridSystemComponent } from "./grid/grid.component";
import { IconsComponent } from "./icons/icons.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { PanelsComponent } from "./panels/panels.component";
import { SweetAlertComponent } from "./sweetalert/sweetalert.component";
import { TypographyComponent } from "./typography/typography.component";
import { NewRentComponent } from "./new-rent/new-rent.component";
import { NewClientComponent } from "./new-client/new-client.component";
import { NewVehicletComponent } from "./new-vehicle/new-vehicle.component";
import { AuthGuard } from "app/authentication/auth-guard.service";

export const ComponentsRoutes: Routes = [
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "buttons",
        component: ButtonsComponent,
      },
    ],
  },
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "grid",
        component: GridSystemComponent,
      },
    ],
  },
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "icons",
        component: IconsComponent,
      },
    ],
  },
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "notifications",
        component: NotificationsComponent,
      },
    ],
  },
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "panels",
        component: PanelsComponent,
      },
    ],
  },
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "sweet-alert",
        component: SweetAlertComponent,
      },
    ],
  },
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "typography",
        component: TypographyComponent,
      },
    ],
  },
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "new-rent",
        component: NewRentComponent,
      },
    ],
  },
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "new-client",
        component: NewClientComponent,
      },
    ],
  },
  {
    path: "",
    canActivate: [AuthGuard],
    children: [
      {
        path: "new-vehicle",
        component: NewVehicletComponent,
      },
    ],
  },
];
