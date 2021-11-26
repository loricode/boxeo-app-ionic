import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){ }

  canActivate(): boolean {
    let security = true;
    if(!localStorage.getItem('user')){ //si no existe el usuario en el localstorage proteccion basica
      security = false;
      this.router.navigateByUrl('home');
    }
    return security;
  }
}
