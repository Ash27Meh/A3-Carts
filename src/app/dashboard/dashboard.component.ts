import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  data:any;
  constructor(private router: Router, private userservice: UserService) { }
  Cart() {
      this.router.navigate(['cart']);
  }
  Your_Order() {
      this.router.navigate(['your_order']);
  }
  Profile() {

    this.router.navigate(['profile']);
  }
  Logout() {
    this.router.navigate(['/dashboard']);
    localStorage.setItem("IsAuthorized", "false");
    window.location.reload();
  }
  Toggle() {
    this.Visible = !this.Visible;
  }
  Login() {
    this.router.navigate(['login'])
  }
  Authorized: any = localStorage.getItem("IsAuthorized") === 'true';
  Visible: boolean = false;
}
