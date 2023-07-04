import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementPortalRoutingModule } from './management-portal-routing.module';
import { ManagementPortalComponent } from './management-portal.component';
import { SignInComponent } from './admin-component/sign-in/sign-in.component';
import { SignUpComponent } from './admin-component/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManagementPortalComponent,
    SignInComponent,
    SignUpComponent,

  ],
  imports: [
    CommonModule,
    ManagementPortalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManagementPortalModule { }
