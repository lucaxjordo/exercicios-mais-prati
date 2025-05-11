//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.
//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
//Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
//Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')();

console.log("Digite os três lados do triângulo:");

const A = parseFloat(prompt("Lado A: "));
const B = parseFloat(prompt("Lado B: "));
const C = parseFloat(prompt("Lado C: "));

// Verifica se forma triângulo
if (A < B + C && B < A + C && C < A + B) {
    console.log("\nOs lados formam um triângulo!");
    
    // Classifica o tipo de triângulo
    if (A === B && B === C) {
        console.log("Tipo: Equilátero (todos os lados iguais)");
    } else if (A === B || A === C || B === C) {
        console.log("Tipo: Isósceles (dois lados iguais)");
    } else {
        console.log("Tipo: Escaleno (todos os lados diferentes)");
    }
} else {
    console.log("\nOs lados NÃO formam um triângulo!");
    console.log("Condição necessária: cada lado deve ser menor que a soma dos outros dois");
}