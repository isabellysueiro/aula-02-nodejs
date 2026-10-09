import readline from 'readline-sync';
import { Veiculo } from './src/models/Veiculo.js';
const veiculo = new Veiculo();
veiculo.modelo = readline.question("Modelo do Veiculo (ex: Chevrolet S10): ");
veiculo.placa = readline.question("Placa: ");
veiculo.ano = readline.questionInt("Ano: ");
veiculo.kmAtual = readline.questionFloat("KM atual: ");
let kmsAndados = readline.questionFloat("Quantos km rodou no ultimo mes? ");
veiculo.registrarViagem(kmsAndados);
console.log(`
KM Atualizado: ${veiculo.kmAtual}`);
console.log(`Status: ${veiculo.verificarRevisao()}`);