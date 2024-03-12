import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  changetype:boolean;
  viewIcon:boolean;

  username:string;
  password:string;
  constructor(private router:Router){
    this.username="";
    this.password="";
    
    this.changetype=true;
    this.viewIcon=true;
  }
  login(){
    if(this.username.toLowerCase()=="ashik" && this.password=="Ashik@123")
    {
      this.router.navigate(['/dashboard']);
      localStorage.setItem("IsAuthorized","true");
    }
  }
  showpassword(){
    this.changetype=!this.changetype
    this.viewIcon=!this.viewIcon 
  }
}
