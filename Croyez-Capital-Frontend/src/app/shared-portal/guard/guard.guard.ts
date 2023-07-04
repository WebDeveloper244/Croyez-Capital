import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(
    private readonly router:Router,
    private readonly loginService:LoginService,
  ){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginService.ifUserLogin()){
        return true
      }else{
        this.router.navigate(['/management-portal/adminLogin'])
        return false
      }
  }
  
}
