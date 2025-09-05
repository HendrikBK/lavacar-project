import { Component } from '@angular/core';

@Component({
  selector: 'app-primo',
  imports: [],
  templateUrl: './primo.component.html',
  styleUrl: './primo.component.css'
})
export class PrimoComponent {

  numero! : number;
  resultado! : string | undefined;

  primo(numero: number): string | undefined {
    let i;
    for (i = 2; i <= numero; i++) {
      if (numero % i) {
        return "não é primo";
      } else {
        return "é primo";
      }
    }
    return;
  }

  constructor() {
    this.numero = 27;
    this.resultado = this.primo(this.numero);
  }

}
