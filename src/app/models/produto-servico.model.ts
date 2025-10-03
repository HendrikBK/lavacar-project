export class ProdutoServico {
    servicoId: number;
    produtoId: number;
    quantidade: number;
    constructor(servicoId: number, produtoId: number, quantidade: number) {
        this.produtoId = produtoId;
        this.servicoId = servicoId;
        this.quantidade = quantidade
    }
    }