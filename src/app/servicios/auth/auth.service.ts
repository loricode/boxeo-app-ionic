import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../../interfaces/response/authResponse';
import { User } from '../../interfaces/user/User';
import { BoxeoService } from '../boxeo.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: BoxeoService ) { }

  public login(user: User): Observable<AuthResponse> {
    return this.http.post('/apiAuth.php', user);
  }

}
