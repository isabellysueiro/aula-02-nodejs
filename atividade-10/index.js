import readline from 'readline-sync';
import { Personagem } from './src/models/Personagem.js';
const heroi = new Personagem();
heroi.nome = readline.question("Nome do Herói: ");
heroi.classe = readline.question("Classe (Mago/Guerreiro/etc): ");
heroi.pontosVida = 100;
heroi.forca = 20;
console.log(`
Um monstro atacou ${heroi.nome}!`);
let dano = readline.questionInt("Quanto de dano o monstro causou? ");
heroi.sofrerDano(dano);
console.log(`
Status Atual: Vida Restante = ${heroi.pontosVida}`);