/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
const casosTeste = parseInt(lines[0]);

for(i=1; i<=casosTeste; i++){
    valorTeste = parseInt(lines[i]);
    let soma=0;
    for(j=1; j<valorTeste; j++)
        if(valorTeste%j===0)
            soma+=j;
    if(soma === valorTeste){
        console.log(`${valorTeste} eh perfeito`);
        continue;
    }
    console.log(`${valorTeste} nao eh perfeito`);
}