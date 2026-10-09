export class Funcionario {
    nome;
    cargo;
    salarioBase;
    horasExtras;
    calcularValorHoraExtra() {
        // Valor da hora normal (base/220) + 50% de adicional (x 1.5)
        return (this.salarioBase / 220) * 1.5;
    }
    calcularSalarioFinal() {
        let valorTotalExtras = this.horasExtras * this.calcularValorHoraExtra();
        return this.salarioBase + valorTotalExtras;
    }
}