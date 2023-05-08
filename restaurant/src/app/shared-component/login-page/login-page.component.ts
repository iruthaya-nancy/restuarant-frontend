import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
declare var $: any;




@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public loginForm !: FormGroup
  loginFailed!: boolean;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
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
        this.loginForm.reset()
        this.router.navigate(["menu"])
        console.log(data);
        localStorage.setItem('id',data.data);
        $('.toast').toast('show');
       
      },(err:HttpErrorResponse)=>{
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




