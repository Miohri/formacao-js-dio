/* Faça um programa para calcular o valor de uma viagem. 

Variáveis:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível no carro;
4 - Gasto médio de combustível do carro por Km;
5 - Distância em Km da viagem.

Imprimir no console o valor gasto para realizar a viagem. */

const precoEtanol = 4.13;
const precoGasolina = 6.14;
const tipoCombustivel = 'gasolina';
const gastoMedioPorKm = 12;
const distanciaEmKmViagem = 166;

const litrosGastosNaViagem = distanciaEmKmViagem / gastoMedioPorKm;

if (tipoCombustivel === 'etanol') {
    console.log('O valor gasto na viagem é: ' + litrosGastosNaViagem * precoEtanol)
} else {
    console.log('O valor gasto na viagem é: ' + litrosGastosNaViagem * precoGasolina)
}