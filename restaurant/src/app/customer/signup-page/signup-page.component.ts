import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignupserviceService  } from '../customerServices/signupservice.service';
import { NgForm } from '@angular/forms';
import { Area } from '../customerServices/area.model';
import { AreaserviceService } from '../customerServices/areaservice.service';
import { District } from '../customerServices/district.model';
import { DistrictserviceService } from '../customerServices/districtservice.service';
import { State } from '../customerServices/state.model';
import { StateserviceService } from '../customerServices/stateservice.service';
//import { ToastrService } from 'ngx-toastr';



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
  

  // public signUpForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,private signupService: SignupserviceService,private areaService:AreaserviceService,private distrctService:DistrictserviceService,private stateService :StateserviceService) {
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


  // ngOnInit(): void {
  //   this.signUpForm = this.formBuilder.group({
  //     email: ['',Validators.required],
  //     
  // })

  ngOnInit() {
    // Retrieve the list of areas from the server
 
  
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
    // check if all fields have a value
    if((this.firstName && this.lastName && this.email && this.password && this.doorNo && this.phoneNumber && this.street && this.area && this.district && this.state)){
         this.allFieldsFilled = true;
    }
    else
    {
      this.allFieldsFilled = false;
    }
  }


  // public isPasswordValid(password: string): boolean {
  //   const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  //   return regex.test(password);
  // }



  onSubmit() {
    // Submit the customer area details to the server
    //console.log('Selected area ID:', this.selectedAreaId);
    // ...
    //const data = { firstname: this.firstname, lastname:this.lastname, email: this.email, password: this.password,phone: this.phone,doorNo:this.doorNo,streetName:this.streetName ,selectedAreaId:this.selectedAreaId,selectedDistrictId:this.selectedDistrictId,selectedStateId:this.selectedStateId};
    if(this.password === this.retype)
    {
    this.signupService.signUp(this.firstName,this.lastName,  this.password,this.email, this.phoneNumber,this.doorNo,this.street ,this.area,this.district,this.state)
     // window.localStorage.setItem('customerId',id.toString());
    }
    else{
       window.alert('pasword did not match')
    }
      
     
      //this.toastr.success('Form submitted successfully!');

  }
}



// doSignIn(){
//   if(this.signUpForm.valid){this.http.post<any>("http://localhost:8080/customer/signup",this.signUpForm.value)
//   .subscribe(res=>
//     {
//     this.signUpForm.reset()
//     this.router.navigate(["Menu"])},
//     err=>{
//       //this.toastrService.error('Message Error!', 'Title Error!');
//       window.alert("sign failed")
//     })
//   }

  



