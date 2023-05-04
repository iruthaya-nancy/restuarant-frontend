import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
//import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
//import { MatSnackBar } from '@angular/material/snack-bar';
//import { AlertComponent } from '../alert/alert.component';
declare var $: any;




@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  //constructor() { }
  public loginForm !: FormGroup
  loginFailed!: boolean;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      //email: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
  })
}

  doLogin()
  {
    if(this.loginForm.valid){
      localStorage.setItem('email',this.loginForm.value.email)
      this.http.post<any>("http://localhost:8080/customer/login",this.loginForm.value)
      .subscribe(data=>{
        //this.toastrService.success('Message Success!', 'Title Success!');
        this.loginForm.reset()
        this.router.navigate(["menu"])
        console.log(data);
        localStorage.setItem('id',data.data);
        $('.toast').toast('show');
       
      },(err:HttpErrorResponse)=>{
        //this.toastrService.error('Message Error!', 'Title Error!');
        //this.router.navigate(["menu"])
        if(err.status === 401){
     
         this.loginFailed = true;
          
        }
        else if (err.status === 404) {
          window.alert('login failed please contact the administratr')
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




