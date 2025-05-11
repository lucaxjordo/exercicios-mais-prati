//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//utilizando um loop for ou while.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um número inteiro positivo: '));
let fatorial = 1;
let contador = 1;

if (numero < 0) {
    console.log('Não existe fatorial de número negativo!');
} else if (numero === 0) {
    console.log('O fatorial de 0 é 1');
} else {
    while (contador <= numero) {
        fatorial *= contador;
        contador++;
    }
    console.log(`O fatorial de ${numero} é ${fatorial}`);
}