/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
const x = parseInt(lines[0])
const y = parseInt(lines[1])

let menor=x;
let maior=y;

let soma=0;

if(x>y){
    menor = y
    maior = x
}

for(let i=menor+1; i<maior;i++){
    if(i%2!==0)
        soma = soma+i;
}

console.log(soma)