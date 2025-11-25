/* Programa para calcular o valor de uma viagem.

Uso de 3 variáveis:
1 - O preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem. 

Imprimir no console o valor que será gasto na viagem. */

const precoCombustivel = 5.79;
const gastoMedioPorKm = 10;
const distanciaEmKm = 100;

const litrosGastosNaViagem = distanciaEmKm / gastoMedioPorKm;

const valorGasto = litrosGastosNaViagem * precoCombustivel;

console.log(valorGasto.toFixed(2));