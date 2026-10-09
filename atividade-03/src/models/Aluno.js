export class Aluno {
    nome;
    nota1;
    nota2;
    calcularMedia() {
        return (this.nota1 + this.nota2) / 2;
    }
    verificarAprovacao() {
        if (this.calcularMedia() >= 7) {
            return "Aprovado";

        }
        return "Reprovado";
    }
}