/*
Faça um algoritmo que, dado as 3 notas tiradas por um aluno em uma semestre da faculdade, calcule e imprima sua média e sua classificação conforte os dados abaixo:

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5: reprovado;
- Média entre 5 e 7: recuperação;
- Média acima de 7: passou de semestre.
*/

const nota1 = 2;
const nota2 = 3;
const nota3 = 4;

const mediaDeNotas = (nota1 + nota2 + nota3) / 3;

if (mediaDeNotas < 5) {
    console.log('Sua média é: ' + mediaDeNotas.toFixed(2) + ' e você foi reprovado.');
} else if (mediaDeNotas >= 5 && mediaDeNotas < 7) {
    console.log('Sua média é ' + mediaDeNotas.toFixed(2) + ' e você está de recuperação.');
} else {
    console.log('Sua média é ' + mediaDeNotas.toFixed(2) + ' e você passou de semestre.');
}