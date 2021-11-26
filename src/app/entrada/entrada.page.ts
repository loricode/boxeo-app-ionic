import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { User } from '../interfaces/user/User';
import { AuthService } from '../servicios/auth/auth.service';


@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit, OnDestroy {

  subcription$: Subscription;

  user: User = {
    email:'',
    password:''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
  ) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.removeSubcription();
  }

  public login(): void {
    this.subcription$ = this.authService.login({...this.user})
      .subscribe(resp => {
         if(resp.login){
          localStorage.setItem('user', JSON.stringify(resp.data));
          this.router.navigateByUrl('competidores');
         }else{
          this.presentAlert();
         }
      });
  }

  public removeSubcription(){
    this.subcription$.unsubscribe();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class', //diseño
      header: 'boxeo app',
      subHeader: 'login',
      message: 'no autorizado.',
      buttons: ['OK']
    });

    await alert.present();
    await alert.onDidDismiss();
  }

}
