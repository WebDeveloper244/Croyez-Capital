import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPortalRoutingModule } from './main-portal-routing.module';
import { MainPortalComponent } from './main-portal.component';
import { AboutComponent } from './main-component/about/about.component';
import { HeaderComponent } from './main-component/header/header.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { ContactUsComponent } from './main-component/contact-us/contact-us.component';
import { FounderComponent } from './main-component/founder/founder.component';
import { OurMissionComponent } from './main-component/our-mission/our-mission.component';
import { PortfolioComponent } from './main-component/portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './main-component/portfolio-details/portfolio-details.component';
import { WhyUsComponent } from './main-component/why-us/why-us.component';


@NgModule({
  declarations: [
    MainPortalComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    FounderComponent,
    OurMissionComponent,
    PortfolioComponent,
    PortfolioDetailsComponent,
    WhyUsComponent
  ],
  imports: [
    CommonModule,
    MainPortalRoutingModule
  ]
})
export class MainPortalModule { }
