import { Component } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  imports: [],
  templateUrl: './tabuada.component.html',
  styleUrl: './tabuada.component.css'
})
export class TabuadaComponent {
  numero! : number;
  resultado: number[] = [];

  tabuada(numero: number): void {
    let i;    
    for (i = 0; i < 10; i++) {
      this.resultado.push((i+1) * numero);
    }
  }

  constructor() {
    console.log("aa");
    this.numero = 7;
    this.tabuada(this.numero);
  }

}
