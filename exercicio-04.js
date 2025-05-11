

const prompt = require('prompt-sync')();

console.log(`
=== MENU ===
1. Calcular IMC
2. Converter Celsius para Fahrenheit
3. Sair
`);

const opcao = parseInt(prompt('Escolha uma opção (1-3): '));

switch (opcao) {
    case 1:
        const peso = parseFloat(prompt('Digite seu peso (kg): '));
        const altura = parseFloat(prompt('Digite sua altura (m): '));
        const imc = peso / (altura * altura);
        console.log(`Seu IMC é: ${imc.toFixed(2)}`);
        break;
        
    case 2:
        const celsius = parseFloat(prompt('Digite a temperatura em Celsius: '));
        const fahrenheit = (celsius * 9/5) + 32;
        console.log(`${celsius}°C equivalem a ${fahrenheit.toFixed(1)}°F`);
        break;
        
    case 3:
        console.log('Saindo do programa...');
        break;
        
    default:
        console.log('Opção inválida! Escolha entre 1 e 3.');
}