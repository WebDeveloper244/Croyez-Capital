import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/shared-portal/portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit{
  public getId :any
  public getIdData:object|any={};
  public Url='/'
  constructor(
    private activatedRoute: ActivatedRoute,
    private portfolioService:PortfolioService
    
  ){
   
  }

  ngOnInit(): void {
    this.callingMyActivatedRoute();
    this.getIdPortFolioData();
  }
  public callingMyActivatedRoute() {
    this.getId = this.activatedRoute.snapshot.paramMap.get('Id')
    console.log(this.getId);
  }

  public getIdPortFolioData(){

    this.portfolioService.getPortfolioById(this.getId).subscribe(({result}:any)=>{
      this.getIdData = result
      console.log(result);
    })

  }  
}
