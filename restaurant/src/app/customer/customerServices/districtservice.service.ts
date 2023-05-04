import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { District } from './district.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DistrictserviceService {

  private apiUrl = 'http://localhost:8080/admin/district';//url that displays all area

  constructor(private http:HttpClient) { }

  getDistricts():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
