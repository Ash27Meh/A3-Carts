import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';

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
  userForm!: FormGroup;
  constructor(private router:Router, private formBuilder: FormBuilder, private user: UserService){
    this.username="";
    this.password="";    
    this.changetype=true;
    this.viewIcon=true;
  }
  ngOnInit(){
    this.initializeForm();
  }
  initializeForm(): void {
    this.userForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]],
      pass:['',[Validators.required,Validators.nullValidator]]
    });
  }
  login(){
    const data = this.userForm;
    this.user.getData(data);
    if (this.user.isLoggedin) {
      localStorage.setItem("IsAuthorized","true")
      this.router.navigate(['dashboard/home']);
    }else{
      alert("Invalid Data !")
    }
  }
  showpassword(){
    this.changetype=!this.changetype
    this.viewIcon=!this.viewIcon 
  }
}
