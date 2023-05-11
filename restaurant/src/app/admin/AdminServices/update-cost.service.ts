import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UpdateCostService {



  constructor(private http: HttpClient, private router: Router) { }

  updatecost(id:number,price: number) {

    return this.http.patch(`http://localhost:8080/menu/${id}?price=${price}`, {}).subscribe(data => {
      this.router.navigate(["addfood"])
    });


  }
}
