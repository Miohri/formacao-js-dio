/*
Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que, dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo.

- Abaixo de 18.5: abaixo do peso;
- Entre 18.5 e 25: peso normal;
- Entre 25 e 30: acima do peso;
- Entre 30 e 40: obeso;
- Acima de 40: obesidade grave.
*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Seu IMC é ' + imc.toFixed(2) + ' o que significa que você está abaixo do peso.'
    } else if (imc >= 18.5 && imc < 25) {
        return 'Seu IMC é ' + imc.toFixed(2) + ' o que significa que você está com peso normal.'
    } else if (imc >= 25 && imc < 30) {
        return 'Seu IMC é ' + imc.toFixed(2) + ' o que significa que você está acima do peso.'
    } else if (imc >= 30 && imc < 40) {
        return 'Seu IMC é ' + imc.toFixed(2) + ' o que significa que você está obeso.'
    } else {
        return 'Seu IMC é ' + imc.toFixed(2) + ' o que significa que você está com obesidade grave.'
    }
}

function main() {
    const peso = 53;
    const altura = 1.68;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc))
}

main();