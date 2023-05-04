import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateStatusService {
 
  
  
  constructor(private http:HttpClient) { }

  update(){
     var id = localStorage.getItem('update');
    this.http.patch( `http://localhost:8080/admin/update?id=${id}`,{}).subscribe(data =>{
      console.log(data);
    })
  }
}
