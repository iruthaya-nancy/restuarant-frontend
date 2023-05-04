import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      //email: ['',Validators.required],
      firstName:[''],
      password: ['', Validators.required ]
  })
    
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.http.post<any>("http://localhost:8080/admin/login",this.loginForm.value)
      .subscribe(data=>{
        //this.toastrService.success('Message Success!', 'Title Success!');
        this.loginForm.reset()
        this.router.navigate(["addfood"])
        console.log(data);
        localStorage.setItem('id',data.data);
      },(err:HttpErrorResponse)=>{
        //this.toastrService.error('Message Error!', 'Title Error!');
        //this.router.navigate(["menu"])
        if(err.status === 401){
          // this.snackBar.open('Error message', 'Close', {
          //   duration: 3000,
          //   panelClass: ['mat-toolbar', 'mat-warn']
          // });
         // this.alert.customAlert('Login Failed');
         window.alert('Please Check the username or password')
          
        }
        else if (err.status === 404) {
          // handle 404 Not Found error
          window.alert('No User found')
        }
        else if(err.status === 500){
          window.alert('contact the administrator')
        } 

      }
      );
    }
    history.pushState(null, '');
    window.onpopstate = function () {
    history.go(1);
};
    

}

}
