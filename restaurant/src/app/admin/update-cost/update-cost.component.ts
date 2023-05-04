import { Component, OnInit } from '@angular/core';
import { menuItem } from 'src/app/customer/customerServices/menu.model';
import { MenuServiceService } from 'src/app/customer/customerServices/menu-service.service';
import { UpdateCostService } from '../update-cost.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-update-cost',
  templateUrl: './update-cost.component.html',
  styleUrls: ['./update-cost.component.css']
})
export class UpdateCostComponent implements OnInit {

  menuItems!: menuItem[];
  name!:String
  id!:number
  price!:number

  constructor(private menuService:MenuServiceService,private updatecostservice:UpdateCostService,private router:Router) { }

  ngOnInit(): void {
    this.getMenuItems();
  }
  getMenuItems(): void {
    this.menuService.getMenuItems()
      .subscribe(menuItems => this.menuItems = menuItems.data);
  }

  onSubmit(form:NgForm){
    const data = form.value;
    var id = data.food;
    // var price = data.price;
    window.localStorage.setItem('id',id);
    // window.localStorage.setItem('price',price);
    this.updatecostservice.updatecost(this.price);
    
  }


}
