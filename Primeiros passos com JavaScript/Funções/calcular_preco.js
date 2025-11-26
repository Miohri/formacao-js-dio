function calcularPreco(precoDoProduto, formaDePagamento) {
    if (formaDePagamento === 1) {
        console.log('O valor será: ' + (precoDoProduto * 0.9));
    } else if (formaDePagamento === 2) {
        console.log('O valor será: ' + (precoDoProduto * 0.85));
    } else if (formaDePagamento === 3) {
        console.log('O valor será: ' + precoDoProduto);
    } else {
        console.log('O valor será: ' + (precoDoProduto * 1.10));
    }
}

calcularPreco(100, 1);