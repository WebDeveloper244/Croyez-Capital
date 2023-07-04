import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared-portal/guard/guard.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./main-portal/main-portal.module').then(m => m.MainPortalModule) }, 
  { path: 'main-portal', loadChildren: () => import('./main-portal/main-portal.module').then(m => m.MainPortalModule) }, 
  { path: 'admin-portal', canActivate :[authGuard], loadChildren: () => import('./admin-portal/admin-portal.module').then(m => m.AdminPortalModule) }, 
  { path: 'management-portal', loadChildren: () => import('./management-portal/management-portal.module').then(m => m.ManagementPortalModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
