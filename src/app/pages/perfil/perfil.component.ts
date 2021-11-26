import { Component, OnInit } from '@angular/core';
import { CompetitorService } from '../../servicios/competitors/competitor.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  user = {
    id:'',
    firstName:'',
    lastName:'',
    email:''
  };

  constructor(
    private competitorService: CompetitorService,
    public toastController: ToastController
  ) { }

  ngOnInit(): void {
   this.getUser();
  }

  public update(): void{
    this.competitorService.updateUser({...this.user})
      .subscribe(resp => {
         this.user =  resp.data;
         this.presentToast(resp.message);
       });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  private getUser(): void {
   const { id } = JSON.parse(localStorage.getItem('user'));
    this.competitorService.getUser(id)
     .subscribe(resp => {
        this.user = resp;
     },(err) => {
       console.log(err);
     });
  }

}
