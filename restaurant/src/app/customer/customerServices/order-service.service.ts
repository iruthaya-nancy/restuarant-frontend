import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { order } from './Order.model';

//api to order
@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  
  // need customer id and payment mode id
  paymentid = localStorage.getItem('paymentid');
  id = localStorage.getItem('id');
  private apiUrl = `http://localhost:8080/order?id=${this.id}&paymentid=${this.paymentid}`


  constructor(private http:HttpClient) { }

  confirmOrder(){
    
      let menu = localStorage.getItem('menu');
      if(menu!=null){
      var food = JSON.parse(menu);
  }
      // quantity:window.localStorage.getItem('quantity'),
      // menuId :window.localStorage.getItem('menuId'
    console.log(window.localStorage.getItem('customerId'));
    
    //window.localStorage.removeItem('id');
   const menuPayload = this.buildMenu(food);
   console.log(menuPayload)
    return this.http.post<any>(this.apiUrl,menuPayload).subscribe(data=>{
      localStorage.setItem('orderid',data.data);
    });
      //console.log(data);
     // window.localStorage.setItem('id',data.toString());
     //window.localStorage.removeItem('paymentid');
    
  }
  buildMenu(foods: any){
   return Object.keys(foods).map(key => ({
        menuId: key,
        quantity: foods[key]
      }))
  }
}
