/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
function fatorial(num){
    if(num===0)
        return 1;
    else
        return num*fatorial(num-1);
}

inputInt = parseInt(input);
valorFinal = fatorial(inputInt);
console.log(valorFinal); 