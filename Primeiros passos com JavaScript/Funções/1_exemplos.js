// Chamar nome
function sayMyName (name) {
    console.log ('My name is: ' + name)
}

// Calcular quadrado
function quadrado (valor) {
    return valor * valor
}

const quadradoDeCinco = quadrado (5);
console.log(quadradoDeCinco);

// Calcular valor de juros
function incrementarJuros (valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10))