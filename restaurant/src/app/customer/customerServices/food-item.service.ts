import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  constructor(private http:HttpClient) { }

  foodItem():Observable<any>{
   let menu = localStorage.getItem('menu')
   if(menu!=null){
    var food = JSON.parse(menu);
    food = Object.keys(food)
   }
   return this.http.post<any>(`http://localhost:8080/customer/menuid`, food)// pass the list of ods to return the menu 
   
  }
   
    
  }

