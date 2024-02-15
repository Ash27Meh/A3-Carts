import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  changetype: boolean;
  viewIcon: boolean;
  password: string;
  confirmpassword: string;
  name: string;
  email: string;
  DOB: string;
  phonenumber: string;
  address: any;
  constructor(private router: Router) {
    this.name = "";
    this.email = "";
    this.DOB = "";
    this.phonenumber = "";
    this.password = "";
    this.changetype = true;
    this.viewIcon = true;
    this.confirmpassword = "";
  }
  showpassword() {
    this.changetype = !this.changetype
    this.viewIcon = !this.viewIcon
  }
  signup() {
    this.router.navigate(['/login']);
  }
}
