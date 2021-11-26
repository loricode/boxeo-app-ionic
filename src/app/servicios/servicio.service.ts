import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private url = 'http://localhost/backend/';

  constructor(
      private route: Router,
      private http: HttpClient
  ) { }

  iniciarSesion( email: string, contrasena: string): Observable<any> {
    return this.http.get('http://localhost/apirest/login.php?email='+ email+
    '&contrasena='+contrasena+'', {});
  }

  irA(pagina: string){
     this.route.navigateByUrl(pagina);
  }
}
