import readline from 'readline-sync';
import { PedidoPizza } from './src/models/PedidoPizza.js';
const pedido = new PedidoPizza();
pedido.sabor = readline.question("Sabor da Pizza: ");
pedido.tamanho = readline.question("Tamanho (P/M/G): ");
pedido.quantidade = readline.questionInt("Quantidade: ");
pedido.precoUnitario = readline.questionFloat("Preco unitario: R$ ");
pedido.exibirRecibo();