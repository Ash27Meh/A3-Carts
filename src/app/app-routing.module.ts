import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { YourOrderComponent } from './your-order/your-order.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent,
  children:[
    {path: 'home', component:HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}]
  },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'cart', component:CartComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'your_order', component:YourOrderComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
