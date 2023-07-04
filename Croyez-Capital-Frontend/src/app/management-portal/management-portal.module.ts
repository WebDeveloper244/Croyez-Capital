import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementPortalRoutingModule } from './management-portal-routing.module';
import { ManagementPortalComponent } from './management-portal.component';


@NgModule({
  declarations: [
    ManagementPortalComponent
  ],
  imports: [
    CommonModule,
    ManagementPortalRoutingModule
  ]
})
export class ManagementPortalModule { }
