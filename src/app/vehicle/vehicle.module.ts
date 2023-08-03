import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { VehicleRoutes } from "./vehicle.routing";
import { VehicleComponent } from "./vehicle.component";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(VehicleRoutes), FormsModule],

  declarations: [VehicleComponent],
})
export class VehicleModule {}
