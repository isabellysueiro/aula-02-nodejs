export class Conta {
titular;
saldo = 0;
depositar(valor) {
this.saldo += valor;
}
sacar(valor) {
if (valor <= this.saldo) {
this.saldo -= valor;

} else {
console.log("Saldo insuficiente para saque!");
}
}
exibirSaldo() {
console.log(`
Titular: ${this.titular} | Saldo Atual: R$ ${this.saldo.toFixed(2)}`);
}
}