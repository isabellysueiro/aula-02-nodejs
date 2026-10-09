import readline from 'readline-sync';
import { Conta } from './src/models/Conta.js';
const minhaConta = new Conta();
minhaConta.titular = readline.question("Nome do titular: ");
let deposito = readline.questionFloat("Deseja depositar quanto? R$ ");
minhaConta.depositar(deposito);
let saque = readline.questionFloat("Deseja sacar quanto? R$ ");
minhaConta.sacar(saque);
minhaConta.exibirSaldo();