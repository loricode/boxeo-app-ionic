import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Competitor } from '../../interfaces/response/Competitor';
import { BoxeoService } from '../boxeo.service';

@Injectable({
  providedIn: 'root'
})
export class CompetitorService {

  constructor( private http: BoxeoService ) { }

  public getCompetitors(): Observable<Competitor[]>{
    return this.http.get('/apiCompetitor.php').pipe(
      map((resp) => {
         const { email } = JSON.parse(localStorage.getItem('user'));
         return resp.filter(item => item.email !== email);
      })
    );
  }

  public getUser(id: string): Observable<any>{
    return this.http.get(`/api.php?id=${id}`);
  }

  public updateUser(obj: any): Observable<any>{
    return this.http.put('/api.php', obj);
  }
}
