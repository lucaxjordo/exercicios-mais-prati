//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')();

const nota = parseFloat(prompt('Digite a nota (0 a 10): '));

if (nota >= 7.0 && nota <= 10.0) {
    console.log('Aprovado');
} else if (nota >= 5.0 && nota < 7.0) {
    console.log('Recuperação');
} else if (nota >= 0.0 && nota < 5.0) {
    console.log('Reprovado');
} else {
    console.log('Nota inválida! Digite um valor entre 0 e 10');
}