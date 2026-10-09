import readline from 'readline-sync';
import { Pet } from './src/models/Pet.js';

console.log("=== SISTEMA DE GERENCIAMENTO DE PETS ===\n");

const meuPet = new Pet();

meuPet.nome = readline.question("Digite o nome do pet: ");
meuPet.especie = readline.question("Digite a especie do pet: ");
meuPet.idade = readline.questionInt("Digite a idade do pet: ");
meuPet.peso = readline.questionFloat("Digite o peso do pet em kg: ");

console.log("\nGerando ficha do pet...");
meuPet.exibirFicha();