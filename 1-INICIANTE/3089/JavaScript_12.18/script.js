/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
let i=0;
while(lines[i]!=='0'){
    const numPresentes = parseInt(lines[i]);
    const valores = lines[i+1].split(' ');
    let maior;
    let menor;
    for(let j=0; j<numPresentes; j++){
        const soma = parseInt(valores[j])+parseInt(valores[valores.length-1-j]);
        if(j===0){
            maior = soma;
            menor = soma;
        }
        if(soma>maior){
            maior=soma;
        }
        if(soma<menor){
            menor=soma;
        }
    }
    console.log(`${maior} ${menor}`);
    i+=2;
}