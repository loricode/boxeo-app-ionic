import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/interfaz';
import { AlertController } from '@ionic/angular';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.page.html',
  styleUrls: ['./segunda.page.scss'],
})
export class SegundaPage implements OnInit {


objCliente:any={
    nombre:'',
    apellido: '',
    peso:'',
    email:'',
    contrasena:'',
    imagen:''
  }

  constructor(private http: HttpClient, private alerta:AlertController) { }


 /* objCliente: ICliente={
    nombre : '',
    apellido : '',
    peso :'',
    email: '',
    contrasena : ''
  
  }
*/
  ngOnInit() {

//this.guardar();

  }

entradadatos(){

  let mi_alerta = this.alerta.create({

    
    

  });

  this.http.get("http://localhost/apirest/login.php?email="+this.objCliente.email+
  "&contrasena="+this.objCliente.contrasena+"").subscribe(snap=>
   {
     console.log(snap); 
   
   }); 

}



  guardar(){

   this.http.get("http://localhost/apirest/altas.php?nombre="+this.objCliente.nombre+
   "&apellido="+this.objCliente.apellido+"&peso="+this.objCliente.peso+"&email="+this.objCliente.email+
   "&contrasena="+this.objCliente.contrasena+"").subscribe(snap=>
    {
      console.log(snap); 
    
    });
  }
  /*

  //CREAR CLIENTES
 crearCliente(){
  console.log(this.objCliente);
  this.ser.crear(this.objCliente).subscribe(respuesta=>{
    console.log(respuesta);
    if(respuesta.info.id>0){
      let msm:string=respuesta.mensaje;
     
    }else{
     let msm:string=respuesta.mensaje;
    
    }
  });
}
*/
}
