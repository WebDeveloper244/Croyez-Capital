import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PortfolioService } from 'src/app/shared-portal/portfolio/portfolio.service';

@Component({
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.css']
})
export class CreatePortfolioComponent {
  public portfolioForm: any|FormGroup
  public portfolioImage:string='';

  constructor(
    private formBuilder:FormBuilder,
    private readonly portfolioService:PortfolioService,
    private toastrService: ToastrService
    ) { 
    this.initializeMyLoginForm()
  }

  initializeMyLoginForm(){
    this.portfolioForm = this.formBuilder.group({
      titleName:  new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
      shortDescription:new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
      addYear:new FormControl ('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      description: new FormControl ('', Validators.required),
      website: new FormControl(''),
      twitter: new FormControl(''),
      linkedIn: new FormControl(''),
      image: new FormControl('',Validators.required),
    })
  }

  getImage(event:any){
    this.portfolioImage = event.target.files[0];
  }

  submitPortfolioForm(){

     const multiPartFormData = new FormData()
     multiPartFormData.append('titleName',this.portfolioForm.get('titleName').value);  // getting value fom myProduct form through getter and setter function
     multiPartFormData.append('shortDescription',this.portfolioForm.get('shortDescription').value);
     multiPartFormData.append('addYear',this.portfolioForm.get('addYear').value);
     multiPartFormData.append('website',this.portfolioForm.get('website').value);
     multiPartFormData.append('twitter',this.portfolioForm.get('twitter').value);
     multiPartFormData.append('linkedIn',this.portfolioForm.get('linkedIn').value);
     multiPartFormData.append('description',this.portfolioForm.get('description').value);
     multiPartFormData.append('image',this.portfolioImage);

    this.portfolioService.createPortfolio(multiPartFormData).subscribe(({ data, message }: any)=>{
      this.toastrService[data ? 'success' : 'error'](message);
      this.portfolioForm.reset()
    })

  }
}
