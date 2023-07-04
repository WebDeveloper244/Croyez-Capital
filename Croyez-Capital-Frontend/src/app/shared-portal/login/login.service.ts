import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private HttpClient:HttpClient
  ) { }

  createLoginForm(payLoad: any) {
    return this.HttpClient.post('http://localhost:8989/adminmanagementRouter/AdminLogin', payLoad);
  }
  saveLoginTokenToLocalStorage(Payload: any) {
    return localStorage.setItem('Access-Token', Payload)
  }
  ifUserLogin() {
    return localStorage.getItem('Access-Token') !== null;
  }
  deleteLoginTokenFromLocalStorage() {
    return localStorage.removeItem('Access-Token')
  }
}
