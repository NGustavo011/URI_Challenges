/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
const quantidadeCasos = parseInt(lines[0]);
for(i=1; i<=quantidadeCasos*2; i+=2){
    const selecao = lines[i];
    const valores = lines[i+1];
    const soma = parseInt(valores.split(" ")[0]) + parseInt(valores.split(" ")[1]);
    const jogadorPar = /\w+ PAR/.exec(selecao)[0].replace("PAR","").trim();
    const jogadorImpar = /\w+ IMPAR/.exec(selecao)[0].replace("IMPAR","").trim();
    let vencedor;
    if(soma%2===0)
        vencedor = jogadorPar;
    else
        vencedor = jogadorImpar;
    console.log(vencedor);
}