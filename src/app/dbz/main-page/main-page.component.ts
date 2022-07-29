import { Component } from '@angular/core';
interface Personaje {
  nombre:String;
  poder:Number;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  personajes:Personaje[]=[
    {
      nombre:"Goku",
      poder:9005,
    },
    {
      nombre:"Vegeta",
      poder:7500,
    }
  ]
  nuevo:Personaje = {
    nombre:'',
    poder:0
  }
  agregar(){
    if(this.nuevo.nombre.trim().length ===0 ){ return;}
    this.personajes.push(this.nuevo)
    this.nuevo={
      nombre:"",
      poder:0,
    }
    console.log(this.nuevo)
  }
}
