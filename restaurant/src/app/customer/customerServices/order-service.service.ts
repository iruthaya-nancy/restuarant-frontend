import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { order } from '../modals/Order.model';

//api to order
@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {


  paymentid = localStorage.getItem('paymentid');
  id = localStorage.getItem('id');
  private order = `http://localhost:8080/order?id=${this.id}&paymentid=${this.paymentid}`


  constructor(private http: HttpClient) { }

  confirmOrder() {

    let menu = localStorage.getItem('menu');
    if (menu != null) {
      var food = JSON.parse(menu);
    }

    console.log(window.localStorage.getItem('customerId'));


    const menuPayload = this.buildMenu(food);
    console.log(menuPayload)
    return this.http.post<any>(this.order, menuPayload).subscribe(data => {
      localStorage.setItem('orderid', data.data);
    });


  }
  buildMenu(foods: any) {
    return Object.keys(foods).map(key => ({
      menuId: key,
      quantity: foods[key]
    }))
  }
}
