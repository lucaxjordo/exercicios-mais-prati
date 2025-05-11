//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.

let n1 = 0;
let n2 = 1;
let proximoTermo;

console.log("Os 10 primeiros números da sequência de Fibonacci:");

for (let i = 1; i <= 10; i++) {
    console.log(n1);
    proximoTermo = n1 + n2;
    n1 = n2;
    n2 = proximoTermo;
}