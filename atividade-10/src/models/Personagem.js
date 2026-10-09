export class Personagem {
    nome;
    classe;
    pontosVida;
    forca;
    sofrerDano(quantidadeDano) {
        this.pontosVida -= quantidadeDano;
        if (this.pontosVida <= 0) {
            this.pontosVida = 0;
            console.log("Game Over! O personagem foi derrotado.");
}
    }
    recuperarVida(pocao) {
        this.pontosVida += pocao;
    }
}