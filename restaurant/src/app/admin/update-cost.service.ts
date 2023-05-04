import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UpdateCostService {


   
  constructor(private http:HttpClient,private router:Router) { }

  updatecost(price:number){

      const id = window.localStorage.getItem('id');
      return this.http.patch(`http://localhost:8080/menu/${id}?price=${price}`,{}).subscribe(data=>{
        this.router.navigate(["addfood"])
      });
      

  }
}
