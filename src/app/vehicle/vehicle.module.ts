import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VehicleRoutes } from './vehicle.routing';
import { VehicleComponent } from './vehicle.component';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';

@NgModule({
  imports: [CommonModule, JwBootstrapSwitchNg2Module, RouterModule.forChild(VehicleRoutes), FormsModule],

  declarations: [VehicleComponent],
})
export class VehicleModule {}
