export class SensorTemperatura {
    idSensor;
    localInstalacao;
    temperaturaAtual;
    atualizarLeitura(novaTemperatura) {
        this.temperaturaAtual = novaTemperatura;
    }
    verificarAlerta() {
        if (this.temperaturaAtual > 35) {
            console.log(`ALERTA: Superaquecimento no local $
{this.localInstalacao}`);
        } else {
            console.log(`Temperatura no local ${this.localInstalacao} está
normal.`);
        }
    }
}