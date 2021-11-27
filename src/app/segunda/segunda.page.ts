import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CompetitorService } from '../servicios/competitors/competitor.service';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {


objCliente: any = {
    nombre:'',
    apellido: '',
    peso:'',
    email:'',
    contrasena:'',
    imagen:'',
    edad:'',
    telefono:''
  };

  constructor(
    private competitorService: CompetitorService,
    private alerta: AlertController
  ) { }

  ngOnInit(): void { }

  public guardar(): void{
    this.competitorService.createUser({...this.objCliente})
      .subscribe(resp => {
        console.log(resp);
      });
  }

}
