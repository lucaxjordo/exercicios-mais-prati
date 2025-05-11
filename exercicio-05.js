//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//utilizando if-else.

const prompt = require('prompt-sync')();

// Função para converter vírgula em ponto
const formatarNumero = (valor) => parseFloat(valor.replace(',', '.'));

const peso = formatarNumero(prompt('Digite seu peso em kg: '));
const altura = formatarNumero(prompt('Digite sua altura em metros: '));

const imc = peso / (altura * altura);

console.log(`\nSeu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log('Classificação: Baixo peso');
} else if (imc < 25) {
    console.log('Classificação: Peso normal');
} else if (imc < 30) {
    console.log('Classificação: Sobrepeso');
} else if (imc < 35) {
    console.log('Classificação: Obesidade Grau I');
} else if (imc < 40) {
    console.log('Classificação: Obesidade Grau II');
} else {
    console.log('Classificação: Obesidade Grau III (Obesidade mórbida)');
}