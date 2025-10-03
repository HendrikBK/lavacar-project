import { Component, OnInit } from '@angular/core';
import { Servico } from '../../../models/servico.model';
import { ServicoService } from '../../../services/servico.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-servicos',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './listar-servicos.component.html',
  styleUrl: './listar-servicos.component.css'
})
export class ListarServicosComponent implements OnInit {
  servicos: Servico[] = [];
  constructor(private servicoService: ServicoService) { }
  ngOnInit() {
    this.getAllServicos();
  }
  getAllServicos() {
    this.servicoService.getAllServicos().then(servicos => {
      this.servicos = servicos;
    });
  }
}