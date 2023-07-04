import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPortalComponent } from './admin-portal.component';
import { CreatePortfolioComponent } from './admin-component/create-portfolio/create-portfolio.component';
import { PortfolioDetailsComponent } from './admin-component/portfolio-details/portfolio-details.component';

const routes: Routes = [
  { path: '', component: AdminPortalComponent, children:[
    {
      path: '', component: CreatePortfolioComponent
    },
    {
      path: 'createPortfolio', component: CreatePortfolioComponent
    },
    {
      path: 'portfolioDetails', component: PortfolioDetailsComponent
    },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPortalRoutingModule { }
