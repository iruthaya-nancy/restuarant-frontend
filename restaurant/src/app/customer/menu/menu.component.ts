import { Component, OnInit } from '@angular/core';
import { menuItem } from '../modals/menu.model';
import { MenuServiceService } from '../customerServices/menu-service.service';
import { Router } from '@angular/router';
import { OrderServiceService } from '../customerServices/order-service.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems!: menuItem[];

  buttonType: any
  quantity: any;

  cart!: Map<number, number>

  menuform!: FormGroup
  constructor(private menuService: MenuServiceService, private router: Router, private orderService: OrderServiceService) {

    const list = localStorage.getItem('cart');
    if (list != null) {
      this.cart = new Map<number, number>(JSON.parse(list))
    }
  }

  ngOnInit(): void {
    this.getMenuItems();

  }
  getMenuItems(): void {
    this.menuService.getMenuItems()
      .subscribe(menuItems => this.menuItems = menuItems.data);
  }



  onClick(buttonType: any): void {

    if (buttonType === "Next") {
      this.router.navigate(["order"])
    }
    else 
    {


      this.quantity = window.prompt('Enter quantity:');
      const list = window.localStorage.getItem('menu');
      let menu;

      if (list != null) {
        menu = JSON.parse(list);
      } else {
        menu = {}
      }


      menu[buttonType] = this.quantity;
      console.log(menu)
      window.localStorage.setItem('menu', JSON.stringify(menu));

    }
    history.pushState(null, '');
    window.onpopstate = function () {
      history.go(1);
    };

  }

}



