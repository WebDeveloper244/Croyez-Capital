import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementPortalComponent } from './management-portal.component';
import { SignInComponent } from './admin-component/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: ManagementPortalComponent, children:[
    {
      path: '', component: SignInComponent
    },
    {
      path: 'adminLogin', component: SignInComponent
    },
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementPortalRoutingModule { }
