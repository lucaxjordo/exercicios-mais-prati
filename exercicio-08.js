//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente. 
//O exercicio está pedindo para considerar não ler valores iguais, mas também inclui a verificação de valores iguais

const prompt = require('prompt-sync')();

const valor1 = parseFloat(prompt('Digite o primeiro valor: '));
const valor2 = parseFloat(prompt('Digite o segundo valor: '));

if (valor1 === valor2) {
    console.log('\nOs valores são iguais!');
} else if (valor1 < valor2) {
    console.log(`\nValores em ordem crescente: ${valor1}, ${valor2}`);
} else {
    console.log(`\nValores em ordem crescente: ${valor2}, ${valor1}`);
}