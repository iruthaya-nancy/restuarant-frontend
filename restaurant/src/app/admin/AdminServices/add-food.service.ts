import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AddFoodService {

  private toAddFood = `http://localhost:8080/menu`;
  constructor(private http: HttpClient, private router: Router) { }

  addfood(data: any): Observable<any> {
    return this.http.post<any>(this.toAddFood, data);
  }

  viewMenu(): Observable<any> {
    return this.http.get<any>(this.toAddFood);
  }
}
