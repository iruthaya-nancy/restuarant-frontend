import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { District } from '../modals/district.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DistrictserviceService {

  private getDistrict = 'http://localhost:8080/admin/district';

  constructor(private http: HttpClient) { }

  getDistricts(): Observable<any> {
    return this.http.get<any>(this.getDistrict);
  }
}
