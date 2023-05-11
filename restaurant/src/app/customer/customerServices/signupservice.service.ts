import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Area } from '../modals/area.model';
import { District } from '../modals/district.model';
import { State } from '../modals/state.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  private toSignUp = 'http://localhost:8080/customer/signup';

  constructor(private http:HttpClient,private toastr:ToastrService , private router: Router) { }

  signUp(firstName: String, lastName: String, password: String, email: String, phoneNumber: String, doorNo: String, street: String, area: number, district: number, state: number) {
    const userdata = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email,
      phoneNumber: phoneNumber,
      doorNo: doorNo,
      street: street,
      area: { id: area },
      district: { id: district },
      state: { id: state }
    };
    this.http.post<any>(this.toSignUp, userdata).subscribe(data => {
      console.log(data);
      localStorage.setItem('id', data.data);
      this.router.navigate(["menu"])

    }, (err: HttpErrorResponse) => {
      if (err.status === 404) {
        this.toastr.error('Login Failed')
      }
      else if (err.status === 409) {
        this.toastr.warning('User Already Exist')
      }

      else if (err.status === 500) {
        this.toastr.error('Login Failed.Please Contact the administrator')
      }
    })
  }

}
