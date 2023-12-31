import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientRoutes } from './client.routing';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';

@NgModule({
  imports: [CommonModule, JwBootstrapSwitchNg2Module, RouterModule.forChild(ClientRoutes), FormsModule],

  declarations: [ClientComponent],
})
export class ClientModule {}
