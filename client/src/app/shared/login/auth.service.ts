import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginURL = environment.votesAPI + 'login';
  registerURL = environment.votesAPI + 'user';

  constructor( private http: HttpClient) { }

  loginUser( user: User ): Observable<User> {
    return this.http.post<User>(this.loginURL, user);
  }

  registerUser( user: User ): Observable<User> {
    return this.http.post<User>(this.registerURL, user);
  }

}
