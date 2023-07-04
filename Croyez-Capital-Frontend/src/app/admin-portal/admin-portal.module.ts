import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPortalRoutingModule } from './admin-portal-routing.module';
import { AdminPortalComponent } from './admin-portal.component';
import { CreatePortfolioComponent } from './admin-component/create-portfolio/create-portfolio.component';
import { PortfolioDetailsComponent } from './admin-component/portfolio-details/portfolio-details.component';
import { SideBarComponent } from './admin-component/side-bar/side-bar.component';
// material
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
// material
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    AdminPortalComponent,
    CreatePortfolioComponent,
    PortfolioDetailsComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    AdminPortalRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminPortalModule { }
