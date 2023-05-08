import { Component, OnInit } from '@angular/core';
import { menuItem } from 'src/app/customer/modals/menu.model';
import { MenuServiceService } from 'src/app/customer/customerServices/menu-service.service';
import { UpdateCostService } from '../AdminServices/update-cost.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-update-cost',
  templateUrl: './update-cost.component.html',
  styleUrls: ['./update-cost.component.css']
})
export class UpdateCostComponent implements OnInit {

  menuItems!: menuItem[];
  name!: String
  id!: number
  price!: number

  constructor(private menuService: MenuServiceService, private updateCostService: UpdateCostService, private router: Router) { }

  ngOnInit(): void {
    this.getMenuItems();
  }
  getMenuItems(): void {
    this.menuService.getMenuItems()
      .subscribe(menuItems => this.menuItems = menuItems.data);
  }

  onSubmit(form: NgForm) {
    const data = form.value;
    var id = data.food;
    this.updateCostService.updatecost(id,this.price);
    window.alert('Cost Updated Successfully');
  }


}
