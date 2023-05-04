import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import{Observable} from 'rxjs';
import { Area } from './area.model';
import { District } from './district.model';
import { State } from './state.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  private apiUrl = 'http://localhost:8080/customer/signup';

  constructor(private http:HttpClient,private router:Router) { }

  signUp(firstName:String,lastName:String,password:String,email:String,phoneNumber:String,doorNo:String,street:String,area:number,district:number,state:number){
    const userdata = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email,
      phoneNumber:phoneNumber,
      doorNo:doorNo,
      street:street,
      area:{id:area},
      district:{id:district},
      state:{id:state}
    };
    this.http.post<any>(this.apiUrl, userdata).subscribe(data =>{
      console.log(data);
      localStorage.setItem('id',data.data);
      this.router.navigate(["menu"])

    },(err:HttpErrorResponse)=>{
      if(err.status === 404){
        window.alert(err.message)
      }

      else if(err.status===500){
        window.alert('Sign up failed please contact the administrator')
      }
    })
  }

  // signUp(data: any): Observable<any> {
  //   console.log(data);
  //   return this.http.post<any>(this.apiUrl, data);
  // }
}
