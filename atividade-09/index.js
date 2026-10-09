import readline from 'readline-sync';
import { Funcionario } from './src/models/Funcionario.js';
const func = new Funcionario();
func.nome = readline.question("Nome do funcionario: ");
func.cargo = readline.question("Cargo: ");
func.salarioBase = readline.questionFloat("Salário base: R$ ");
func.horasExtras = readline.questionFloat("Horas extras no mês: ");
console.log(`
--- Holerite ---`);
console.log(`Funcionário: ${func.nome} (${func.cargo})`);
console.log(`Salário Final: R$ ${func.calcularSalarioFinal().toFixed(2)}`);