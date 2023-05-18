/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
const entradaOriginal = lines[0].toString();
const entradaSemConsoantes = entradaOriginal.replace(/[bcdfghjklmnpqrstvwxyz]/gi, "");
const entradaSemConsoantesInvertida = entradaSemConsoantes.split("").reverse().join("")

if(entradaSemConsoantes === entradaSemConsoantesInvertida)
    console.log("S")
else
    console.log("N")