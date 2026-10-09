export class Veiculo {
    modelo;
    placa;
    ano;
    kmAtual;
    registrarViagem(kmPercorrido) {
        this.kmAtual += kmPercorrido;
    }
    verificarRevisao() {
        if (this.kmAtual > 10000) {
            return "Revisão Necessária!";

        }
        return "Tudo certo!";
    }
}