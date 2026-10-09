import readline from 'readline-sync';
import { LoteProducao } from './src/models/LoteProducao.js';
const lote = new LoteProducao();
lote.nomeProduto = readline.question("Produto a ser feito: ");
lote.litrosMateriaPrima = readline.questionFloat("Litros de oleo coletado: ");
lote.rendimentoPorLitro =
    readline.questionInt("Rendimento por litro (unidades): ");
lote.exibirRelatorioProducao();