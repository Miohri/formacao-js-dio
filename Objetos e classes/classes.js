class Gato {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}


function compararGatos(g1, g2) {
    if (g1.idade > g2.idade) {
        console.log(`${g1.nome} é mais velho que ${g2.nome}`);
    } else if (g1.idade < g2.idade) {
        console.log(`${g2.nome} é mais velho que ${g1.nome}`);
    } else {
        console.log(`${g1.nome} e ${g2.nome} tem a mesma idade`);
    }
}

const plinio = new Gato('Plínio', 6);

const lolla = new Gato('Lolla', 4);

compararGatos(plinio, lolla);