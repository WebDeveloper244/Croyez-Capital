import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/shared-portal/login/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  public LoginForm: any|FormGroup
  public token:any

  constructor(
    private formBuilder:FormBuilder,
    private loginService:LoginService,
    private taoster:ToastrService,
    private router:Router
    ) { 
    this.initializeMyLoginForm()
  }

  initializeMyLoginForm(){
    this.LoginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required])
    })
  }

  SubmitLoginForm(){
    const value = this.LoginForm.value
    console.log(value);
    this.loginService.createLoginForm(value).subscribe(({token,data,message}:any)=>{
      this.taoster[data ? 'success' : 'error'](message);
       this.loginService.saveLoginTokenToLocalStorage(token);
       this.token = token;
       if(token === undefined){
        this.router.navigate(['/aboutUs']);
        this.loginService.deleteLoginTokenFromLocalStorage()
       }
       else{
        this.router.navigate(['/admin-portal/createPortfolio'])
       }
    })
  }
}
