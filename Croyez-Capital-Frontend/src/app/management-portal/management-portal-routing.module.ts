import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementPortalComponent } from './management-portal.component';

const routes: Routes = [{ path: '', component: ManagementPortalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementPortalRoutingModule { }
