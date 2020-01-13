import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  user: User = {
    email: 'carlos@carlos.com',
    password: '123456'
  };

  states = {
    button: ['login', 'sign in'],
    message: [
      'In order to vote, plese login',
      'Are you new? Please sign in'
    ]
  };

  currentState = 0;

  ngOnInit() {
  }

  changeState(curr) {
    this.currentState = curr;
  }

  onSubmit() {
    this.authService.loginUser(this.user)
    .subscribe(console.log);
  }

}
