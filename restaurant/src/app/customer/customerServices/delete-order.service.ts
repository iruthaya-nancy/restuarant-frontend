import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteOrderService {

  
  constructor(private http:HttpClient) { }

  deleteOrder(){
    const orderId = localStorage.getItem('orderid');
    this.http.delete(`http://localhost:8080/customer/order?id=${orderId}`).subscribe(data=>{
      console.log(data);
    });
  }
}
