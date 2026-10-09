import readline from 'readline-sync';
import { SensorTemperatura } from './src/models/SensorTemperatura.js';
const sensor = new SensorTemperatura();
sensor.idSensor = 1;
sensor.localInstalacao = "Estufa Principal";
sensor.temperaturaAtual = 25.0;
for (let i = 1; i <= 3; i++) {
    let temp = readline.questionFloat(`
Informe a leitura ${i} da temperatura: `);
    sensor.atualizarLeitura(temp);
    sensor.verificarAlerta();
}