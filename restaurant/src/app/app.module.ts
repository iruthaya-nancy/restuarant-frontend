import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { SignupPageComponent } from './customer/signup-page/signup-page.component';
import { LoginPageComponent } from './shared-component/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './customer/menu/menu.component';
import { OrderComponent } from './customer/order/order.component';
import { ViewSoldFoodsComponent } from './admin/view-sold-foods/view-sold-foods.component';
import { FoodsoldComponent } from './admin/foodsold/foodsold.component';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './admin/login/login.component';
import { AddFoodComponent } from './admin/add-food/add-food.component';
import { UpdateCostComponent } from './admin/update-cost/update-cost.component';
import { EmailComponent } from './customer/email/email.component';





@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AdminComponent,
    LoginPageComponent ,
    SignupPageComponent,
    MenuComponent,
    OrderComponent,
    ViewSoldFoodsComponent,
    FoodsoldComponent,
    LoginComponent,
    AddFoodComponent,
    UpdateCostComponent,
    EmailComponent,
    
  
    
  
     ],
  imports: [
    BrowserModule,
    FormsModule,  
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  
  ],
  providers: [DatePipe],

bootstrap: [AppComponent]
})
export class AppModule { }
