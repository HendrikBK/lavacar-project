import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../models/produto.model';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from '../../../services/servico.service';
import { ProdutoService } from '../../../services/produto.service';
import { ProdutoServicoService } from '../../../services/produto-servico.service';
import { ProdutoServico } from '../../../models/produto-servico.model';

@Component({
  selector: 'app-associacao-produtos-servico',
  imports: [],
  templateUrl: './associacao-produtos-servico.component.html',
  styleUrl: './associacao-produtos-servico.component.css'
})
export class AssociacaoProdutosServicoComponent implements OnInit {
  produtos: Produto[] = [];
  produtosSelecionadosIds: Set<number> = new Set<number>();
  produtosServicos: ProdutoServico[] = [];
  servicoId!: number;
  produtosOriginal: Produto[] = [];
  produtosSelecionados: Produto[] = [];
  constructor(private servicoService: ServicoService, private produtoService: ProdutoService, private produtoServicoService: ProdutoServicoService,
    private route: ActivatedRoute) { }
  async ngOnInit() {
    this.servicoId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.servicoId) {
      const servico = await this.servicoService.getServicoById(this.servicoId);
    }
    this.produtoService.getAllProdutos().then((produtos) => {
      this.produtos = produtos;
      this.produtosOriginal = produtos;
    });
    this.loadAllProdutosAssociacoesIndexedDb();
  }

  async loadAllProdutosAssociacoesIndexedDb() {
    this.produtoService.getAllProdutos().then((produtos) => {
      this.produtos = produtos;
      this.produtosOriginal = produtos;
      this.produtoServicoService.getAssociacoesByServicoId(this.servicoId).subscribe({
        next: async (associations: any[]) => {
          this.produtosSelecionadosIds = new Set(associations.map((assoc) => assoc.produtoId));
          for (const idprod of this.produtosSelecionadosIds) {
            const produto = await this.produtoService.getProdutoById(idprod);
            if (produto) {
              const indexParaRemover = this.produtosOriginal.findIndex(p => p.id === idprod);
              if (indexParaRemover > -1) {
                const produtoMovido = this.produtosOriginal.splice(indexParaRemover, 1)[0];
                this.produtosSelecionados.push(produtoMovido);
              }
            }
          }
        }
      });
    });
  }

  salvarAssociacoes() {
    for (const prodId of this.produtosSelecionadosIds) {
      const novaAssociacaoProdutoServico: ProdutoServico = {
        servicoId: this.servicoId,
        produtoId: prodId,
        quantidade: 5
      };
      this.produtosServicos.push(novaAssociacaoProdutoServico);
    }
    //this.produtoServicoService.addMultiplosProdutosServicoAssociacoes(this.produtosServicos);
  }
}