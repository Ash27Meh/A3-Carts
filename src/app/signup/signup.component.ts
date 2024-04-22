import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/users/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  userForm!: FormGroup;
  constructor(private router: Router, private user: UserService, private formBuilder: FormBuilder) {
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
  signup(): void {
    if (this.userForm.invalid) {
      console.error('Invalid form data. Please check your inputs.');
      return;
    }
    const data = this.userForm.value;
    console.log('Form data:', data);
    this.user.insertData(data).subscribe(
      () => {
        console.log('User details submitted successfully!');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error inserting data:', error);
        // Handle error - show error message or redirect to an error page
      }
    );
  }
  ngOnInit(): void{
    this.initializeForm();
  }
  initializeForm(): void {
    this.userForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]],
      email:['',[Validators.required,Validators.email]],
      DOB:['',[Validators.required]],
      phone_num:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      address:['',[Validators.required]],
      pass:['',[Validators.required,Validators.nullValidator]],
      confirm_pass:['',[Validators.required,Validators.nullValidator]]
    });
  }
}
