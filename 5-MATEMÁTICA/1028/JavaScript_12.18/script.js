/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
const casosTeste = parseInt(lines[0]);

for(i=1; i<=casosTeste; i++){
    const valorTeste = lines[i];
    const figurinhasRicardo = parseInt(valorTeste.split(" ")[0]);
    const figurinhasVicente = parseInt(valorTeste.split(" ")[1]);

    const tamanhoMaiorPilha = encontrarMaiorDivisor(figurinhasRicardo, figurinhasVicente);

    console.log(tamanhoMaiorPilha);
}

function encontrarMaiorDivisor(num1, num2) {
    if (num2 === 0) {
      return num1;
    } else {
      return encontrarMaiorDivisor(num2, num1 % num2);
    }
}