import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPortalComponent } from './main-portal.component';

const routes: Routes = [{ path: '', component: MainPortalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPortalRoutingModule { }
