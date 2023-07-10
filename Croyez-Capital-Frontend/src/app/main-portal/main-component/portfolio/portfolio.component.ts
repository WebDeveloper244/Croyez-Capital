import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/shared-portal/portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  public getAllportfolioData:any=[];
  public Url='/'

  constructor(
    private readonly portfolioService:PortfolioService,
    private router:Router
  ){
    this.allPortFolioData();
  }

  allPortFolioData(){
    this.portfolioService.getPortfolio().subscribe(({result}:any)=>{
      this.getAllportfolioData = result
    })
  }

  redirectToDetailPage(_id:any){
    this.router.navigate(['portfolioDetails',_id]);
  }
}
