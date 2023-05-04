import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { FoodsoldComponent } from '../foodsold/foodsold.component';

@Component({
  selector: 'app-view-sold-foods',
  templateUrl: './view-sold-foods.component.html',
  styleUrls: ['./view-sold-foods.component.css']
})
export class ViewSoldFoodsComponent implements OnInit {

 
  
  constructor(private router:Router,private http:HttpClient,private datePipe: DatePipe) { }

  ngOnInit(): void {
   this.onViewFood()
  }

  

 
    
    
  onSubmit(){
    var Date1 = (<HTMLInputElement>document.getElementById("from"));
    var Date2 = (<HTMLInputElement>document.getElementById("to"));
    // var from = this.datePipe.transform(Date1,"yyyy-MM-dd");
    // var to = this.datePipe.transform(dates.toDate,"yyyy-MM-dd");
    // if(from!=null && to!=null){
    // localStorage.setItem('fromDate',from);
    // localStorage.setItem('toDate',to);
    
    
    localStorage.setItem("fromDate",Date1.value);
    localStorage.setItem("toDate",Date2.value);
  

    
    this.router.navigate(["foodsold"])
    
    
    
  }
  @ViewChild(FoodsoldComponent) foodComponent!: FoodsoldComponent;
  onViewFood() {
    this.foodComponent.viewFood();
  }
  
  
  
}

