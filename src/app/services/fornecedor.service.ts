import { inject, Injectable } from '@angular/core';
import { DbService } from './db.service';
import { Fornecedor } from '../models/fornecedor.model';


@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  //private dbService = inject(DbService);

  constructor(private dbService: DbService) { }

  addFornecedor(fornecedor: Fornecedor) {
    return this.dbService.fornecedores.add(fornecedor);
  }
  
  getAllFornecedores(): Promise<Fornecedor[]> {
    return this.dbService.fornecedores.toArray();
  }
}

