import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PaymentmodeServiceService } from '../customerServices/paymentmode-service.service';
import { paymentmode } from '../modals/paymentmode.model';
import { OrderServiceService } from '../customerServices/order-service.service';
import { NgForm } from '@angular/forms';
import { order } from '../modals/Order.model';
import { DeleteOrderService } from '../customerServices/delete-order.service';
import { FoodItemService } from '../customerServices/food-item.service';
import { menuItem } from '../modals/menu.model';
import { ToastrService } from 'ngx-toastr';

/*
  to confirm order
  1.menuid from menu component its in local storage
  2.customer id from customer component in  ,,
  3.choose the payment mode then display the food id from the local storage 
*/
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderServiceService]
})

export class OrderComponent implements OnInit {

  customerId!: number;// as requestparam
  menuId!: number;// in body
  buttonType!: any
  paymentmodes!: paymentmode[];
  paymentid !: number;
  disableButton: boolean = true
  item!: menuItem[];
  showCancelToast: boolean = false;
  list!: number[];
  


  constructor(private http: HttpClient,private toastr:ToastrService, private router: Router, private paymentmodeservice: PaymentmodeServiceService, private orderService: OrderServiceService, private deleteOrderService: DeleteOrderService, private getfoodItem: FoodItemService) {

  }

  ngOnInit(): void {
    this.getfoodItem.foodItem().subscribe(
      item => {
        this.item = item.data;
        this.list = this.item.map(food => food.amount);
      }, error => console.log(error))

    this.paymentmodeservice.getPaymentMode().subscribe(
      paymentmodes => { this.paymentmodes = paymentmodes.data },
      error => console.log(error)
    )
  }
  food = {
    name: '',
    amount: '',
  };

  toConfirmOrder(form: NgForm) {
    this.disableButton = false;
    const data = form.value;
    console.log(data);
    localStorage.setItem('paymentid', data.PaymentMode)

    setTimeout(() => {
      this.disableButton = true;
    }, 35000);

   
    this.orderService.confirmOrder();
    const Btn = document.getElementById('confirm');
    if (Btn) {
      this.toastr.success('Order Confirmed');
    }

    document.getElementById('confirm')?.addEventListener("click", function () {
      var timeleft = 30;

      var downloadTimer = setInterval(function function1() {
        const count = document.getElementById("countdown");
        if (count) {
          count.innerHTML = timeleft + "&nbsp" + "seconds remaining to cancel the order";
        }
        timeleft -= 1;
        if (timeleft <= 0) {
          clearInterval(downloadTimer);
          const c = document.getElementById("countdown");
          if (c) {
            c.innerHTML = "Time is up!"
          }
        }
      }, 1000);

    });


  }


  toCalculateTotal():any{
    
    let total = 0;
    let val;
        const food = window.localStorage.getItem('menu');
        if (food != null) {
          const menu = JSON.parse(food) as { [key: string]: number };
          const values = Object.values(menu);
          for (let i = 0; i < values.length; i++) {
            total += values[i] * this.list[i];
          }
              return total;
        }
    
  }
  


  onClick(buttonType: any) {
    if (buttonType === "delete") {
      this.toastr.success('Order Cancelled successfully')
      this.disableButton = true;
      this.deleteOrderService.deleteOrder();
    }
    else {

      this.router.navigate(["login"])
      window.localStorage.removeItem("id");
      window.localStorage.removeItem("menu");


    }


  }

  deleteFood(id: any) {

    const liveToastBtn = document.getElementById('liveToastBtn');
    if (liveToastBtn) {
      window.alert("Food cancelled successfully")
    }
    const food = window.localStorage.getItem('menu');
    if (food != null) {
      var menu = JSON.parse(food);
    }

    delete menu[id];
    window.localStorage.setItem('menu', JSON.stringify(menu));
    this.item = this.item.filter(food => food.id != id)
    console.log(this.item);

  }


}
