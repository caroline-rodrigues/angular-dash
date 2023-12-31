import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RentComponent } from './rent.component';
import { RentRoutes } from './rent.routing';

@NgModule({
  imports: [CommonModule, JwBootstrapSwitchNg2Module, RouterModule.forChild(RentRoutes), FormsModule],

  declarations: [RentComponent],
})
export class RentModule {}
