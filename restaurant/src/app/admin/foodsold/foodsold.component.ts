import { Component, OnInit } from '@angular/core';
import { ViewSoldFoodsComponent } from '../view-sold-foods/view-sold-foods.component';
import { viewFood } from '../viewFood.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface FoodSold {
  name: string;
  count: number;
}

@Component({
  selector: 'app-foodsold',
  templateUrl: './foodsold.component.html',
  styleUrls: ['./foodsold.component.css']
})



export class FoodsoldComponent implements OnInit {

  //viewFoods!:viewFood[]
    Food!:FoodSold[];

  fromDate = localStorage.getItem('fromDate');
  toDate  = localStorage.getItem('toDate');

  private url = `http://localhost:8080/menu/FoodSold/${this.fromDate}/${this.toDate}`

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.viewFood().subscribe((res: any) =>{
      this.Food = res.data;
    });

  }



  viewFood():Observable<any>{
    return this.http.get<any>(this.url);
  }

  onClick(){
    this.router.navigate(["addfood"])
      //window.localStorage.removeItem("id");
      history.pushState(null, '');
    window.onpopstate = function () {
    history.go(1);
  }
}
}
