import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  username: String = "";
  visible: boolean = false;
  userData: any;
  constructor(private user:UserService){}
  ngOnInit(){

  }
  dataGet(User :any){
    // const user = this.username;
    this.user.getDataByUsername(User).subscribe((result) => {
      if(result && result.length > 0) {
        this.userData = result[0];
        this.visible = true;
        console.log(User);
      }
      else {
        alert('Data does not exist');
      }
    });
  }
}
