import readline from 'readline-sync';
import { Aluno } from './src/models/Aluno.js';
const aluno = new Aluno();
aluno.nome = readline.question("Nome do Aluno: ");
aluno.nota1 = readline.questionFloat("Nota 1: ");
aluno.nota2 = readline.questionFloat("Nota 2: ");
console.log(`
Relatório de ${aluno.nome}:`);
console.log(`Média: ${aluno.calcularMedia()}`);
console.log(`Status: ${aluno.verificarAprovacao()}`);