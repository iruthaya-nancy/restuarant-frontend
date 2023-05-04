import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {State} from './state.model';

@Injectable({
  providedIn: 'root'
})
export class StateserviceService {

  private apiUrl = 'http://localhost:8080/admin/state';//url that displays all area

  constructor(private http:HttpClient) { }

  getStates():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
