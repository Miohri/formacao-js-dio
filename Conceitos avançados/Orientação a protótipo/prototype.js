function Pessoa (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}

const marcella = new Pessoa('Marcella', 25)
marcella.falar()