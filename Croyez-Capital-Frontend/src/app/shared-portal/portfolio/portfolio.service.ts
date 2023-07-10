import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(
    private HttpClient:HttpClient
  ) { }

  createPortfolio(PayLoad:any){
    return this.HttpClient.post('http://localhost:8989/portfolioManagement/portfolioData', PayLoad);
  }
  getPortfolio(){
    return this.HttpClient.get('http://localhost:8989/portfolioManagement/getPortFolioData');
  }
  getPortfolioById(_id:any){
    return this.HttpClient.get(`http://localhost:8989/portfolioManagement/getPortFolioDataById/${_id}`);
  }
  updatePortfolio(payLoad:any){
    return this.HttpClient.post('http://localhost:8989/portfolioManagement/updatePortFolioDataById', payLoad);
  }
  deletePortfolio(_id:any){
    return this.HttpClient.delete(`http://localhost:8989/portfolioManagement/deletePortFolioData/${_id}`);
  }
}
