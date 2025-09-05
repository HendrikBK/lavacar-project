import { Component } from '@angular/core';

@Component({
  selector: 'app-nota',
  imports: [],
  templateUrl: './nota.component.html',
  styleUrl: './nota.component.css'
})
export class NotaComponent {
  nota!: number;
  conceito!: string;

  classificarNota(nota: number) : string {
    switch (true) {
      case (nota <= 59 ):
        return 'F';
      case (nota <= 69):
        return 'D';
      case (nota <= 79):
        return 'C';
      case (nota <= 89):
        return 'B';
      case (nota <= 100):
        return 'A'
      default:
        return "Nota inválida";
    }
  }

  constructor() {
    this.nota = 87;
    this.conceito = this.classificarNota(this.nota);
  }
}
