import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PortfolioService } from 'src/app/shared-portal/portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent {
  public portfolioForm: any | FormGroup
  public getAllPortFolioData: any = [];
  public Url = '/'
  public visible: boolean = false;
  public makeMyIdPublic: any
  public getIdPortFolioData: any = []


  constructor(
    private readonly portFolioService: PortfolioService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {

  }

  ngOnInit() {
    this.getPortFolioData()
    this.initializeMyLoginForm()
  }


  initializeMyLoginForm() {
    this.portfolioForm = this.formBuilder.group({
      titleName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
      shortDescription: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]),
      addYear: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      description: new FormControl('', Validators.required),
      // image: new FormControl('',Validators.required),
    })
  }

  showDialog() {
    this.visible = true;
  }

  getPortFolioData() {
    this.portFolioService.getPortfolio().subscribe((res: any) => {
      this.getAllPortFolioData = res.result
      console.log(this.getAllPortFolioData);
    })
  }

  
  getPortFolioDataById(Id: any) {
    this.makeMyIdPublic = Id;
    this.portFolioService.getPortfolioById(Id).subscribe(({result}: any) => {
      this.getIdPortFolioData = result;
      console.log(this.getIdPortFolioData);

      this.portfolioForm = this.formBuilder.group({
        titleName: new FormControl(this.getIdPortFolioData?.titleName),
        shortDescription: new FormControl(this.getIdPortFolioData?.shortDescription),
        addYear: new FormControl(this.getIdPortFolioData?.addYear),
        description: new FormControl(this.getIdPortFolioData?.description),
        // image: new FormControl(''),
      })

    })
  }
  deletePortFolioData(Id: any) {
    this.portFolioService.deletePortfolio(Id).subscribe(({ data, message }: any) => {
      this.toastrService[data ? 'success' : 'error'](message);
      this.getPortFolioData()
    })
  }

  updatePortfolioForm() {
    let payLoad = this.portfolioForm.value
    payLoad['_id'] = this.makeMyIdPublic;
    this.portFolioService.updatePortfolio(payLoad).subscribe(({ data, message }: any) => {
      this.toastrService[data ? 'success' : 'error'](message);
      this.getPortFolioDataById(this.makeMyIdPublic)
      this.getPortFolioData()
    })

  }

}
