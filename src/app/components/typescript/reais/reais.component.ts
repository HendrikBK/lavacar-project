import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reais',
  imports: [CommonModule],
  templateUrl: './reais.component.html',
  styleUrl: './reais.component.css'
})
export class ReaisComponent {
  reais! : number;
  dolares! : number;
  cotacao! : number;

  dolaresParaReais(dolares:number, cotacao:number) : number {
    let reais;
    reais = dolares * cotacao;
    return reais;
  }

  constructor() {
    this.dolares = 50;
    this.cotacao = 1.5;
    this.reais = this.dolaresParaReais(this.dolares, this.cotacao);
  }

}
