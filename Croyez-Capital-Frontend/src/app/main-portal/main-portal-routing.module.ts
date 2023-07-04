import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPortalComponent } from './main-portal.component';
import { AboutComponent } from './main-component/about/about.component';
import { ContactUsComponent } from './main-component/contact-us/contact-us.component';
import { FounderComponent } from './main-component/founder/founder.component';
import { OurMissionComponent } from './main-component/our-mission/our-mission.component';
import { PortfolioDetailsComponent } from './main-component/portfolio-details/portfolio-details.component';
import { PortfolioComponent } from './main-component/portfolio/portfolio.component';
import { WhyUsComponent } from './main-component/why-us/why-us.component';

const routes: Routes = [
  { 
    path: '', component: MainPortalComponent, children:[
      {
        path: '', component: AboutComponent
      },
      {
        path: 'aboutUs', component: AboutComponent
      },
      {
        path: 'founder', component: FounderComponent
      },
      {
        path: 'whyUs', component: WhyUsComponent
      },
      {
        path: 'ourMission', component: OurMissionComponent
      },
      {
        path: 'portfolio', component: PortfolioComponent
      },
      {
        path: 'contactUs', component: ContactUsComponent
      },
      {
        path: 'portfolioDetails/:Id', component: PortfolioDetailsComponent
      },
    ]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPortalRoutingModule { }
