import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { menuItem } from '../modals/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  private getMenu = "http://localhost:8080/customer/menu";

  constructor(private http: HttpClient) { }

  getMenuItems(): Observable<any> {
    return this.http.get<any>(this.getMenu);
  }
}
