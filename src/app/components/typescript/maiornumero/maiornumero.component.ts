import { Component } from '@angular/core';

@Component({
  selector: 'app-maiornumero',
  imports: [],
  templateUrl: './maiornumero.component.html',
  styleUrl: './maiornumero.component.css'
})
export class MaiornumeroComponent {
  valores: number[] = [1, 4, 8, 16, 32, 64, 128, 256];
  resultado!: number;

  maiorNumero(valores: number[]): number {
    let resultado!: number;
    let i;

    for (i = 0; i < valores.length; i++) {
      if (i == 0) {
        resultado = valores[i];
      } else {
        if (valores[i] > resultado) {
          resultado = valores[i];
        }
      }      
    }
    return resultado;
  }

  constructor() {
    this.resultado = this.maiorNumero(this.valores);
  }

}
