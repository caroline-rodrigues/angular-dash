import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RentComponent } from "./rent.component";
import { RentRoutes } from "./rent.routing";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(RentRoutes), FormsModule],

  declarations: [RentComponent],
})
export class RentModule {}
