import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { paymentmode } from './paymentmode.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentmodeServiceService {



  private api = 'http://localhost:8080/admin/paymentMode';

  constructor(private http:HttpClient) { }
  getPaymentMode():Observable<any>{
    return this.http.get<any>(this.api);
  }
}
