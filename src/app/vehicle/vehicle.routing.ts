import { Routes } from "@angular/router";
import { VehicleComponent } from "./vehicle.component";

export const VehicleRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: VehicleComponent,
      },
    ],
  },
];
