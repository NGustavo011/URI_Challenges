/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
let soma=0;
let count = 0;
for(count; count<lines.length; count++){
    idade = parseInt(lines[count]);
    if(idade<0)
        break;
    soma+=idade;
}
console.log((soma/(count)).toFixed(2));