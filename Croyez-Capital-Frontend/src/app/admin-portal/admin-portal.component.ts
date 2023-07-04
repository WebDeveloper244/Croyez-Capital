import { Component } from '@angular/core';
import { LoginService } from '../shared-portal/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent {
  constructor(
    private loginService:LoginService,
    private router:Router
  ){

  }


  logOut(){
    this.loginService.deleteLoginTokenFromLocalStorage();
    this.router.navigate(['/aboutUs']);
  }
}
