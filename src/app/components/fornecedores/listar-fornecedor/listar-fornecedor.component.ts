import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../../../models/fornecedor.model';
import { FornecedorService } from '../../../services/fornecedor.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-fornecedor',
  imports: [ReactiveFormsModule],
  templateUrl: './listar-fornecedor.component.html',
  styleUrl: './listar-fornecedor.component.css'
})
export class ListarFornecedorComponent implements OnInit {

  fornecedores: Fornecedor[] = [];
  filtro = new FormControl('');

  constructor(private fornecedorService: FornecedorService, private router: Router) { };

  ngOnInit(): void {
    this.getAllFornecedores();
  }

  getAllFornecedores() {
    this.fornecedorService.getAllFornecedores().then(fornecedores => {
      this.fornecedores = fornecedores;
    });
  }

  editFornecedor(id: number) {
    this.router.navigate(['/fornecedores/editar-fornecedor', id]);
  }
  deleteFornecedor(id: number) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Esta ação não pode ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.fornecedorService.deleteFornecedor(id).then(() => {
          this.getAllFornecedores();
        });
        Swal.fire('Excluído!', 'O fornecedor foi excluído com sucesso.', 'success');
      }
    });
  }
  viewProdutosFornecedor(id: number) {
    this.router.navigate(['/fornecedor', id, 'produtos']);
  }
  getFornecedoresFiltrados(): Fornecedor[] {
    const filtro = this.filtro.value?.toLowerCase() || '';
    return this.fornecedores.filter(fornecedor => {
      return fornecedor.nome.toLowerCase().includes(filtro) ||
        fornecedor.cnpj.toLowerCase().includes(filtro) ||
        fornecedor.fone.toLowerCase().includes(filtro);
    });
  }
}
