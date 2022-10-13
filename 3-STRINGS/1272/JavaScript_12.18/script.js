/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
const casosTeste = parseInt(lines[0]);
for(i=1; i<=casosTeste; i++){
    const valorTeste = lines[i];
    const valores = valorTeste.split(" ");
    let valorEncontrado = '';
    valores.forEach((valor)=>{
        if(valor!=='')
            valorEncontrado+=valor[0];
    })
    console.log(valorEncontrado);
}