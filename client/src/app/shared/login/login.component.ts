import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../user.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  fields: User[] = [{ name: '', email: '', password: '' }, { name: '', email: '', password: '' }];

  states = {
    button: ['login', 'sign in'],
    message: [
      'In order to vote, plese login',
      'Are you new? Please sign in'
    ]
  };

  currentForm = 0;
  currentUser: User;
  showForm = false;

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl( null, [Validators.required, Validators.email]),
      password: new FormControl( null, Validators.required)
    })
  }

  changeState(curr) {
    this.fields[this.currentForm] = this.loginForm.value;
    this.currentForm = curr;
    this.loginForm.setValue(this.fields[this.currentForm]);
  }

  onSubmit() {
    if (this.currentForm == 0) {
      this.authService.loginUser(this.loginForm.value)
      .subscribe(console.log);
    } else {
      this.authService.registerUser(this.loginForm.value)
      .subscribe( res => {
        this.currentUser = res
        console.log("current user", this.currentUser)
      });
    }
  }

  updateUser() {

  }

}
