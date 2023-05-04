import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddFoodService } from '../add-food.service';
import { Router } from '@angular/router';
import { menuItem } from 'src/app/customer/customerServices/menu.model';
import { UpdateStatusService } from '../update-status.service';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  
  allFieldsFilled = false;
  name!:String;
  description!:String;
  amount!:number;
  isActive:Boolean = false;

 
 
  isChecked:Boolean=false;

  menuItems!: menuItem[];

  submitted!:Boolean
  id:any
  
  
  constructor(private addfoodservice:AddFoodService,private router:Router,private updateState:UpdateStatusService) {
  
   }

  ngOnInit(): void {
    this.retrieveFoods();
    this.updateStatus(this.id);
    
  }

  // getMenu(){
  //   this.viewMenu.viewMenu().subscribe(menuItems => this.menuItems = menuItems.data)
  // }
  doSomething(){
  
    if(this.isChecked==true){
       this.isActive = true
    }
    else{
      this.isActive = false
    }
  }

  food = {
    name: '',
    description: '',
    amount: '',
    isActive:''
  };
   
  retrieveFoods(): void {
    this.addfoodservice.viewMenu()
      .subscribe(menuItems => {
          this.menuItems = menuItems.data;
        },
        error => {
          console.log(error);
        });
    }

    onSubmit(): void {
      const data = {
        name: this.name,
        description:this.description,
        amount:this.amount,
        isActive:this.isActive
      };
  
    this.addfoodservice.addfood(data).subscribe(response =>{
      this.submitted = true,
      this.retrieveFoods();
      this.food = {
          name: '',
          description: '',
          amount: '',
          isActive:''
      };
    })
  }

  updateAllFieldsFilled() {
    // check if all fields have a value
    if((this.name && this.description && this.amount )){
         this.allFieldsFilled = true;
    }
    else{
      this.allFieldsFilled = false;
    }
  
  }
  onClick()
  {
    this.router.navigate(["adminlogin"])
  }

  updateStatus(menuItem:menuItem){
      menuItem.isActive = !menuItem.isActive 
     localStorage.setItem('update',menuItem.id.toString())
     this.updateState.update();
  
  }
 
}

