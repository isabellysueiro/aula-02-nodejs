import readline from 'readline-sync';
import { Lutador } from './src/models/Lutador.js';
const atleta = new Lutador();
atleta.nome = readline.question("Nome do lutador: ");
atleta.peso = readline.questionFloat("Peso atual (kg): ");
atleta.vitorias = readline.questionInt("Vitorias: ");
atleta.derrotas = readline.questionInt("Derrotas: ");
atleta.exibirCartel();