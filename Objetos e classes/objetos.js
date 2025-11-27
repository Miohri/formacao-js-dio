const gato = {
    nome: 'Lolla',
    idade: 3,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

gato.cor = 'cinza';

//console.log(gato);

gato.nome = 'Plínio';
gato.idade = 6;

gato.descrever();