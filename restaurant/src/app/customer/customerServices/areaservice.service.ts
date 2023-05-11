import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AreaserviceService {

  private getArea = 'http://localhost:8080/admin/area';//url that displays all area

  constructor(private http: HttpClient) { }

  getAreas(): Observable<any> {
    return this.http.get<any>(this.getArea);
  }
}
