import { Component } from '@angular/core';

@Component({
  selector: 'app-idade',
  imports: [],
  templateUrl: './idade.component.html',
  styleUrl: './idade.component.css'
})
export class IdadeComponent {
  idade!: number;
  resultado!: string;

  mostrarIdade(idade: number) : string {
    if (idade < 0) {
      return "Idade inválida";
    } else if (idade < 13) {
      return "Criança";
    } else if ( idade < 18) {
      return "Adolescente";
    } else if (idade < 60) {
      return "Adulto";
    } else {
      return "Idoso";
    }
  }
  
  constructor(){

    this.idade = 27;   
    this.resultado = this.mostrarIdade(this.idade);
  }
}
