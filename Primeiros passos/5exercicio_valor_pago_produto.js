/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.

Código de condição de pagamento:
1) À vista no débito: 10% de desconto.
2) À vista dinheiro ou PIX: 15% de desconto.
3) Em 2x: preço normal.
4) Acima de duas vezes: juros de 10%.
*/

const precoDoProduto = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log('O valor será: ' + (precoDoProduto * 0.9));
} else if (formaDePagamento === 2) {
    console.log('O valor será: ' + (precoDoProduto * 0.85));
} else if (formaDePagamento === 3) {
    console.log('O valor será: ' + precoDoProduto);
} else {
    console.log('O valor será: ' + (precoDoProduto * 1.10));
}
