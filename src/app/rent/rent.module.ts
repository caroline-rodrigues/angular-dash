import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { RentRoutes } from "./rent.routing";
import { RentComponent } from "./rent.component";
import { LbdModule } from "../lbd/lbd.module";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(RentRoutes)],

  declarations: [RentComponent],
})
export class RentModule {}
