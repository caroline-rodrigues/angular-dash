import { Routes } from "@angular/router";
import { RentComponent } from "./rent.component";

export const RentRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: RentComponent,
      },
    ],
  },
];
