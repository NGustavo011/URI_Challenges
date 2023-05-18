/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
const casosTeste = parseInt(lines[0]);

for(i=1; i<=casosTeste; i++){
    const fraseCodificada = lines[i];
    
    const primeiraMetadeCodificada = fraseCodificada.slice(0, fraseCodificada.length/2)
    const segundaMetadeCodificada = fraseCodificada.slice(fraseCodificada.length/2, fraseCodificada.length)

    let primeiraMetadeDecodificada='';
    let segundaMetadeDecodificada='';

    for(j=0;j<primeiraMetadeCodificada.length;j++){
        primeiraMetadeDecodificada += primeiraMetadeCodificada[primeiraMetadeCodificada.length-j-1];
        segundaMetadeDecodificada += segundaMetadeCodificada[primeiraMetadeCodificada.length-j-1];
    }

    console.log(primeiraMetadeDecodificada+segundaMetadeDecodificada)
}