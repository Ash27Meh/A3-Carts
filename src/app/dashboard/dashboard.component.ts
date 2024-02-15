import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  visible:boolean; 
  constructor(private router:Router){
    this.visible=false;
  }
Login() {
  this.router.navigate(['login'])
}
}