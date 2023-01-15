/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
const casosTeste = parseInt(lines[0]);

for(i=1; i<=casosTeste; i++){
    const textos = lines[i];
    const [texto1, texto2] = textos.split(' ');
    let quantidadeIteracao = texto2.length; 
    if(texto1.length > texto2.length)
        quantidadeIteracao = texto1.length;
    
    let textoFinal = '';
    for(j=0; j<quantidadeIteracao; j++){
        if(texto1[j])
            textoFinal += texto1[j]
        if(texto2[j])
            textoFinal += texto2[j]
    }

    console.log(textoFinal);
}