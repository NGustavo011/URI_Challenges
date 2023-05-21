/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
const casosTeste = lines.length;
let patinhosQueVoltaramDeLa;

for(i=0; i<casosTeste; i++){
    const patinhosQueForamPassear = BigInt(lines[i]);

    if(patinhosQueForamPassear==BigInt(-1))
        break;

    patinhosQueVoltaramDeLa = patinhosQueForamPassear;
    
    if(patinhosQueForamPassear>BigInt(0))
        patinhosQueVoltaramDeLa = patinhosQueVoltaramDeLa-BigInt(1);

    console.log(patinhosQueVoltaramDeLa.toString().replace("n",""));
}