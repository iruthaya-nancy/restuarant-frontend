import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
   private api = 'http://localhost:8080/reset'
  resetPassword(token: string, password: string): Observable<any> {
    const url = `${this.api}/reset-password/${token}`;
    const body = { password: password };
    return this.http.post(url, body);
  }
}
