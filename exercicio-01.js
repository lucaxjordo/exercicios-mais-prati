// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Digite um número: '));

if(numero % 2 === 0) {
    console.log('O número é par.');
}
else {
    console.log('O número é ímpar.');
}
