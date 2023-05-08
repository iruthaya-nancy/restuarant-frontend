import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { foodSold } from 'src/app/customer/modals/foodSold';



@Component({
  selector: 'app-foodsold',
  templateUrl: './foodsold.component.html',
  styleUrls: ['./foodsold.component.css']
})



export class FoodsoldComponent implements OnInit {


  Foods!: foodSold[];

  fromDate = localStorage.getItem('fromDate');
  toDate = localStorage.getItem('toDate');

  private getFoodSold = `http://localhost:8080/menu/FoodSold/${this.fromDate}/${this.toDate}`

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.viewFood().subscribe((res: any) => {
      this.Foods = res.data;
    });

  }



  viewFood(): Observable<any> {
    return this.http.get<any>(this.getFoodSold);
  }

  goBack() {
    this.router.navigate(["addfood"])
    history.pushState(null, '');
    window.onpopstate = function () {
      history.go(1);
    }
  }
}
