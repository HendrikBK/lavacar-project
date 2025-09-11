import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nota',
  imports: [CommonModule, FormsModule],
  templateUrl: './nota.component.html',
  styleUrl: './nota.component.css'
})
export class NotaComponent {
  nota: number | null = null;
  conceito: string = '';

  classificarNota(): void {
    if(this.nota != null) {
      switch (true) {
        case (this.nota <= 59 ):
          this.conceito = 'F';
          break;
        case (this.nota <= 69):
          this.conceito = 'D';
          break;
        case (this.nota <= 79):
          this.conceito = 'C';
          break;
        case (this.nota <= 89):
          this.conceito = 'B';
          break;
        case (this.nota <= 100):
          this.conceito = 'A'
          break;
        default:
          this.conceito = "Nota inválida";
          break;
      }
    } else {
      this.conceito =  "Nova inválida"
    }
  }

  constructor() {
    //this.conceito = this.classificarNota(this.nota);
  }
}
