export class Pet {
    nome;
    especie;
    idade;
    peso;

    verificarSaude() {
        if (this.peso < 2) {
            return "Abaixo do peso";
        } else {
            return "Peso normal";
        }
    }

    exibirFicha() {
        console.log("\n===== FICHA DO PET =====");
        console.log(`Nome: ${this.nome}`);
        console.log(`Espécie: ${this.especie}`);
        console.log(`Idade: ${this.idade} anos`);
        console.log(`Peso: ${this.peso} kg`);
        console.log(`Status de Saúde: ${this.verificarSaude()}`);
        console.log("========================\n");
    }
}