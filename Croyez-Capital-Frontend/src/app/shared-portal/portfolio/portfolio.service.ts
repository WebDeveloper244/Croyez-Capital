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
    return this.HttpClient.post('/portfolioManagement/portfolioData', PayLoad);
  }
  getPortfolio(){
    return this.HttpClient.get('/portfolioManagement/getPortFolioData');
  }
  getPortfolioById(_id:any){
    return this.HttpClient.get(`/portfolioManagement/getPortFolioDataById/${_id}`);
  }
  updatePortfolio(payLoad:any){
    return this.HttpClient.post('/portfolioManagement/updatePortFolioDataById', payLoad);
  }
  deletePortfolio(_id:any){
    return this.HttpClient.delete(`/portfolioManagement/deletePortFolioData/${_id}`);
  }
}
