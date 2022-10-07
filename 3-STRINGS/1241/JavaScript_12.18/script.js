/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
const casosTeste = parseInt(lines[0]);

for(i=1; i<=casosTeste; i++){
    const valorTeste = lines[i];
    const [num1, num2] = valorTeste.split(' ');
    if((num1.trim()).endsWith(num2.trim())){
        console.log("encaixa");
        continue;
    }
    console.log("nao encaixa");
}