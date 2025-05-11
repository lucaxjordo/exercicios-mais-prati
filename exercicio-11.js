//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//utilizando um loop for.

const prompt = require('prompt-sync')();

let soma = 0;

console.log("Digite 5 números para calcular a soma:");

for (let i = 1; i <= 5; i++) {
    const numero = parseFloat(prompt(`Número ${i}: `));
    soma += numero;
}

console.log(`\nA soma total é: ${soma.toFixed(2)}`);