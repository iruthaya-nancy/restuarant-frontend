import { Component, OnInit } from '@angular/core';
import { menuItem } from '../customerServices/menu.model';
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
  //image:any[] = [];
  menuItems!: menuItem[];
  //allImages:any[] = [];
  buttonType:any
  quantity:any;

  cart!:Map<number,number>
  
  menuform!:FormGroup
  constructor(private menuService:MenuServiceService,private router:Router,private orderService:OrderServiceService) { 

    const list = localStorage.getItem('cart');
    if(list!=null)
    {
    this.cart = new Map<number,number>(JSON.parse(list))
    }
  }

  ngOnInit(): void {
    this.getMenuItems();
    //this.allImages = this.imageService.getImages();  
    //this.OrderForm = this.formBuilder.group({})
  }
  getMenuItems(): void {
    this.menuService.getMenuItems()
      .subscribe(menuItems => this.menuItems = menuItems.data);
  }

  // doOrder(id:Number)
  //   {
  //     if(id != 0){
  //       window.localStorage.setItem('menuId',id.toString());
  //       console.log(window.localStorage.getItem('menuId'))
  //       window.alert("order");
  //       this.router.navigate(["order"])
  //     }
  // }

  // addTocart(foodId:number,quantity:number){
  //   if (this.cart.has(foodId)) {
         
  //   }
  //   this.cart.set(foodId, quantity);
  //   localStorage.setItem('cartItems', JSON.stringify([...this.cart]));
  // }

  onClick(buttonType: any): void {
    
    if(buttonType==="Next") {
      this.router.navigate(["order"])
    }
    else
    {
        
        //  const list = window.localStorage.getItem('menu')
        //  const foods  = new Array();
       
        // foods.push(this.quantity,buttonType.toString());
        // window.localStorage.setItem('menu',JSON.stringify(foods))
        /**
         * ------------------------------------
         
        const list = window.localStorage.getItem('menu');
        if(list  != null){
          var menu = JSON.parse(list)
        }  
        
        if(typeof menu !== 'undefined'&& menu.length === 0){
             menu.set(buttonType,this.quantity)
             window.localStorage.setItem('menu',JSON.stringify(menu));
        }
        else{
             map.set(buttonType.toString(),this.quantity);
             window.localStorage.setItem('menu',JSON.stringify(map));
        }
        */
        this.quantity = window.prompt('Enter quantity:');
        const list = window.localStorage.getItem('menu');
        let menu;
        
        if (list != null) {
          menu = JSON.parse(list);
        }else{
          menu = {}
        }
        
        // if (menu.length === 0) {
        //   menu.push({ [buttonType]: this.quantity });
        //   window.localStorage.setItem('menu', JSON.stringify(menu));
        // } else {
        //   const map = new Map();
          menu[buttonType] = this.quantity;
          console.log(menu)
          window.localStorage.setItem('menu', JSON.stringify(menu));
        // }
        
        
        
        
    }
    history.pushState(null, '');
    window.onpopstate = function () {
    history.go(1);
};
    
}

}



