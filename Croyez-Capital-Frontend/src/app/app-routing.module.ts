import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'admin-portal', loadChildren: () => import('./admin-portal/admin-portal.module').then(m => m.AdminPortalModule) }, { path: 'main-portal', loadChildren: () => import('./main-portal/main-portal.module').then(m => m.MainPortalModule) }, { path: 'management-portal', loadChildren: () => import('./management-portal/management-portal.module').then(m => m.ManagementPortalModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
