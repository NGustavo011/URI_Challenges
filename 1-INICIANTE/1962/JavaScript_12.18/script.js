/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
const quantidadeCasos = parseInt(lines[0]);
const anoAtualConsiderado = 2015;

for(i=1; i<=quantidadeCasos; i++){
    let tempo = "D.C.";
    let ano = anoAtualConsiderado-lines[i];

    if(ano<=0){
        tempo="A.C.";
        ano = ano - 1
    }   
    
    console.log(`${Math.abs(ano)} ${tempo}`)
}