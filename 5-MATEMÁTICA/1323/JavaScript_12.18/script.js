/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
let i=0;
let entrada = parseInt(lines[i]);

while(entrada!==0){
    const res = encontraQuantidadeQuadrados(entrada, 0)

    console.log(res)

    i++;
    entrada = parseInt(lines[i]);
}

function encontraQuantidadeQuadrados(x, soma){
    if(x===1)
        return soma+x
    soma += x**2
    return encontraQuantidadeQuadrados(x-1, soma)
}