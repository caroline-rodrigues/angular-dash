import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ClientComponent } from "./client.component";
import { ClientRoutes } from "./client.routing";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ClientRoutes), FormsModule],

  declarations: [ClientComponent],
})
export class ClientModule {}
