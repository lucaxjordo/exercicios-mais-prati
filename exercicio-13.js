//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.

const prompt = require('prompt-sync')();

let soma = 0;
let quantidade = 0;
let numero;

console.log("Digite números decimais (0 para encerrar):");

do {
    numero = parseFloat(prompt(`Número ${quantidade + 1}: `));
    
    if (numero !== 0) {
        soma += numero;
        quantidade++;
    }

} while (numero !== 0);

if (quantidade > 0) {
    const media = soma / quantidade;
    console.log(`\nMédia dos ${quantidade} números digitados: ${media.toFixed(2)}`);
} else {
    console.log("\nNenhum número foi digitado para cálculo da média.");
}