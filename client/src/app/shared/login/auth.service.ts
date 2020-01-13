import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  getFiguresURL = environment.votesAPI + 'login';

  constructor( private http: HttpClient) { }

  loginUser( user: User ): Observable<User> {
    console.log('sadfasfdsfs');
    return this.http.post<User>(this.getFiguresURL, user);
  }
}
