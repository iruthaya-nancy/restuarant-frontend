import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from '../modals/state.model';

@Injectable({
  providedIn: 'root'
})
export class StateserviceService {

  private getState = 'http://localhost:8080/admin/state';//url that displays all state

  constructor(private http: HttpClient) { }

  getStates(): Observable<any> {
    return this.http.get<any>(this.getState);
  }
}
