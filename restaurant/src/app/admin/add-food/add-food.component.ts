import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddFoodService } from '../AdminServices/add-food.service';
import { Router } from '@angular/router';
import { menuItem } from 'src/app/customer/modals/menu.model';
import { UpdateStatusService } from '../AdminServices/update-status.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  allFieldsFilled = false;
  name!: string;
  description!: string;
  amount!: number;
  isActive: boolean = false;



  isChecked: boolean = false;

  menuItems!: menuItem[];

  submitted!: boolean
  id: any


  constructor(private addFoodService: AddFoodService, private router: Router, private updateState: UpdateStatusService) {


  }

  ngOnInit(): void {
    this.retrieveFoods();
    this.updateStatus(this.id);

    history.pushState(null, '');
    window.onpopstate = function () {
      history.go(1);
    }

  }


  getAvailability() {

    if (this.isChecked == true) {
      this.isActive = true
    }
    else {
      this.isActive = false
    }
  }

  food = {
    name: '',
    description: '',
    amount: '',
    isActive: ''
  };

  retrieveFoods(): void {
    this.addFoodService.viewMenu()
      .subscribe(menuItems => {
        this.menuItems = menuItems.data;
      },
        error => {
          console.log(error);
        });
  }

  addFood(): void {
    const data = {
      name: this.name,
      description: this.description,
      amount: this.amount,
      isActive: this.isActive
    };

    this.addFoodService.addfood(data).subscribe(response => {
      this.submitted = true,
      this.retrieveFoods();
      this.food = {
        name: '',
        description: '',
        amount: '',
        isActive: ''
      };
    })
    window.alert('Food Added Successfully');
  }

  updateAllFieldsFilled() {
    if ((this.name && this.description && this.amount)) {
      this.allFieldsFilled = true;
    }
    else {
      this.allFieldsFilled = false;
    }

  }
  Logout() {
    this.router.navigate(["adminlogin"])
  }

  updateStatus(menuItem: menuItem) {
    menuItem.isActive = !menuItem.isActive
    localStorage.setItem('update', menuItem.id.toString())
    this.updateState.update();

  }



}

