import { Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth/auth-layout.component";
import { AuthGuard } from "./authentication/auth-guard.service";

export const AppRoutes: Routes = [
  {
    path: "",
    redirectTo: "pages/login",
    pathMatch: "full",
  },
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    // canActivateChild: [AuthGuardChildService],
    children: [
      {
        path: "",
        loadChildren: "./dashboard/dashboard.module#DashboardModule",
        canActivate: [AuthGuard],
      },
      {
        path: "components",
        loadChildren: "./components/components.module#ComponentsModule",
        canActivate: [AuthGuard],
      },
      {
        path: "forms",
        loadChildren: "./forms/forms.module#Forms",
        canActivate: [AuthGuard],
      },
      {
        path: "rent",
        loadChildren: "./rent/rent.module#RentModule",
        canActivate: [AuthGuard],
      },
      {
        path: "vehicle",
        loadChildren: "./vehicle/vehicle.module#VehicleModule",
        canActivate: [AuthGuard],
      },
      {
        path: "tables",
        loadChildren: "./tables/tables.module#TablesModule",
        canActivate: [AuthGuard],
      },
      {
        path: "maps",
        loadChildren: "./maps/maps.module#MapsModule",
        canActivate: [AuthGuard],
      },
      {
        path: "charts",
        loadChildren: "./charts/charts.module#ChartsModule",
        canActivate: [AuthGuard],
      },
      {
        path: "calendar",
        loadChildren: "./calendar/calendar.module#CalendarModule",
        canActivate: [AuthGuard],
      },
      {
        path: "client",
        loadChildren: "./client/client.module#ClientModule",
        canActivate: [AuthGuard],
      },
      {
        path: "",
        loadChildren: "./userpage/user.module#UserModule",
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "pages",
        loadChildren: "./pages/pages.module#PagesModule",
      },
    ],
  },
  // {
  //   path: "",
  //   component: NewRentComponent,
  //   children: [
  //     {
  //       path: "/components/new-rent",
  //       loadChildren: "./pages/pages.module#PagesModule",
  //     },
  //   ],
  // },
];
