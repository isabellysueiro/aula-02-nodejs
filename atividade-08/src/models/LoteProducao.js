export class LoteProducao {
    nomeProduto;
    litrosMateriaPrima;
    rendimentoPorLitro;
    calcularPrevisao() {
        return this.litrosMateriaPrima * this.rendimentoPorLitro;
    }
    exibirRelatorioProducao() {
        console.log(`
--- Relatório do Lote ---`);
        console.log(`Produto: ${this.nomeProduto}`);
        console.log(`Previsão de Produção: ${this.calcularPrevisao()} unidades`)
            ;
    }
}