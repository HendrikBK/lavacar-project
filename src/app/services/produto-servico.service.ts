import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { from, map, Observable, switchMap } from 'rxjs';
import { ProdutoServico } from '../models/produto-servico.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServicoService {
  constructor(private dbService: DbService) { }
  getAssociacoesByServicoId(servicoId: number): Observable<ProdutoServico[]> {
    const associacoes = from(this.dbService.produtosServico.where('servicoId').equals(servicoId).toArray());
    return associacoes;
  }
}
