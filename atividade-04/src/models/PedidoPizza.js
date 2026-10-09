export class PedidoPizza {
    sabor;
    tamanho;
    quantidade;
    precoUnitario;
    calcularTotal() {
        return this.precoUnitario * this.quantidade;
    }
    exibirRecibo() {
        console.log(`
--- Recibo ---`);
        console.log(`Pedido: ${this.quantidade}x Pizza ${this.tamanho} de $
{this.sabor}`);
        console.log(`Total a pagar: R$ ${this.calcularTotal().toFixed(2)}`);
    }
}