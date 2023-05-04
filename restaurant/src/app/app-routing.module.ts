import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from    './customer/signup-page/signup-page.component';
import { LoginPageComponent } from    './shared-component/login-page/login-page.component';
import { MenuComponent } from './customer/menu/menu.component';
import { OrderComponent } from './customer/order/order.component';
import { FoodsoldComponent } from './admin/foodsold/foodsold.component';
import { ViewSoldFoodsComponent } from './admin/view-sold-foods/view-sold-foods.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { AddFoodComponent } from './admin/add-food/add-food.component';
import { UpdateCostComponent } from './admin/update-cost/update-cost.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full"},
  {path:"login", component:LoginPageComponent},
  {path:"signUp", component:SignupPageComponent},
  {path:"menu",component:MenuComponent},
  {path:"order",component:OrderComponent},
  {path:"viewfood",component:ViewSoldFoodsComponent},
  {path:"foodsold",component:FoodsoldComponent},
  {path:"adminlogin",component:LoginComponent},
  {path:"addfood",component:AddFoodComponent},
  {path:"updatecost",component:UpdateCostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
