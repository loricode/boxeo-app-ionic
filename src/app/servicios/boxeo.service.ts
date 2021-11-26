import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoxeoService {

  baseUrl = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  public post(path: string, obj: any): Observable<any> {
    return this.http.post(this.baseUrl + path, obj);
  }

  public get(path: string): Observable<any> {
    return this.http.get(this.baseUrl + path);
  }

  public put(path: string, obj: any): Observable<any>{
    return this.http.put(this.baseUrl + path, obj);
  }

}
