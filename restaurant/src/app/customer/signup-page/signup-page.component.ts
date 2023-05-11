import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignupserviceService  } from '../customerServices/signupservice.service';
import { NgForm } from '@angular/forms';
import { Area } from '../modals/area.model';
import { AreaserviceService } from '../customerServices/areaservice.service';
import { District } from '../modals/district.model';
import { DistrictserviceService } from '../customerServices/districtservice.service';
import { State } from '../modals/state.model';
import { StateserviceService } from '../customerServices/stateservice.service';
import { ToastrService } from 'ngx-toastr';



@Component({

  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
  providers:[SignupserviceService ]
 
})
export class SignupPageComponent implements OnInit {

  allFieldsFilled = false;
  
  firstName:String;
  lastName: string;
  email: string;
  password: string;
  retype:String;
  phoneNumber:String;
  doorNo:String;
  street:String;
  areas!: Area[];
  area: number;
  districts!: District[];
  district : number;
  states!:State[];
  state :number;

  validPassword!:Boolean


  constructor(private formBuilder: FormBuilder,public toastr:ToastrService, private http: HttpClient, private router: Router,private signupService: SignupserviceService,private areaService:AreaserviceService,private distrctService:DistrictserviceService,private stateService :StateserviceService) {

   
    this.firstName = '';
    this.lastName = '';
    this.password = '';
    this.email = '';

    this.retype = '';
    this.phoneNumber = '';
    this.doorNo = '';
    this.street = '';
    this.area = 0;
    this.district = 0;
    this.state = 0;

   }



  ngOnInit() {
    
    this.areaService.getAreas().subscribe(
      areas => {this.areas = areas.data; console.log(areas)},
      error => console.log(error)
    );

    this.distrctService.getDistricts().subscribe(
      districts => {this.districts= districts.data; console.log(districts)},
      error => console.log(error)
    );

    this.stateService.getStates().subscribe(
      states=> {this.states = states.data;},
      error => console.log(error)
    );

  }

  updateAllFieldsFilled() {
    if((this.firstName && this.lastName && this.email && this.password && this.doorNo && this.phoneNumber && this.street && this.area && this.district && this.state)){
         this.allFieldsFilled = true;
    }
    else
    {
      this.allFieldsFilled = false;
    }
  }

  onSubmit() {
    if(this.password === this.retype)
    {
    this.signupService.signUp(this.firstName,this.lastName,  this.password,this.email, this.phoneNumber,this.doorNo,this.street ,this.area,this.district,this.state);
    }
    else{
       this.toastr.error('Password did not match');
    }

  }
}


  



