export class Lutador {
    nome;
    peso;
    vitorias;
    derrotas;
    definirCategoria() {
        if (this.peso <= 70) {
            return "Leve";

        } else if (this.peso > 70 && this.peso <= 85) {

            return "Médio";

        } else {

            return "Pesado";

        }
    }
    exibirCartel() {
        let totalLutas = this.vitorias + this.derrotas;
        console.log(`
--- Ficha Técnica ---`);
        console.log(`Lutador: ${this.nome}`);
        console.log(`Categoria: ${this.definirCategoria()}`);
        console.log(`Total de Lutas: ${totalLutas}`);
        console.log(`Vitórias: ${this.vitorias} | Derrotas: ${this.derrotas}`);
    }
}