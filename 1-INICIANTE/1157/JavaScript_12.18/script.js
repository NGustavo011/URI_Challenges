/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
inputInt = parseInt(input);

for(i=1; i<=parseInt(inputInt); i++)
    if(inputInt%i===0)
        console.log(i);