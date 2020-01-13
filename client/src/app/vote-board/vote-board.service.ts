import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { PublicFigure } from '../shared/public-figure.interface';

@Injectable({
  providedIn: 'root'
})
export class VoteBoardService {

  getFiguresURL = environment.votesAPI + 'figures';

  constructor(private http: HttpClient) {
  }

  getFigures(): Observable<PublicFigure[]> {
    return this.http.get<PublicFigure[]>(this.getFiguresURL);
  }
}
