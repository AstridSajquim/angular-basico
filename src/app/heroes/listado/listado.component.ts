import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[]=['Spiderman', 'Ironman', 'Hulk', 'Thor','Capitán América'];
  heroeBorrado:string='';
  borrarHeroe(){
    console.log('Borrando...')
    const nombreHeroe = this.heroes.shift() || '';
    this.heroeBorrado = nombreHeroe;
  }
}
