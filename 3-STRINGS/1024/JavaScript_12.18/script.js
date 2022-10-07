/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
function replaceAt(texto, indice, novoValor){
    texto[indice] = novoValor;
}

function primeiraRegra(texto){
    const textoArray = texto.split('');
    for(j=0; j<texto.length; j++){
        const caractere = texto.charCodeAt(j);
        if((caractere>=65 && caractere<=90) || (caractere>=97 && caractere<=122)){
            const caractereDeslocado = String.fromCharCode(caractere+3);
            replaceAt(textoArray, j, caractereDeslocado);
        }
    }
    return textoArray.join('');
}

function segundaRegra(texto){
    textoCaracteres = texto.split("");
    textoCaracteres  = textoCaracteres.reverse();
    texto = textoCaracteres.join("");
    return texto; 
    
}

function terceiraRegra(texto){
    metadeEncontrada = Math.trunc(texto.length/2);
    const textoArray = texto.split('');
    for(j=metadeEncontrada; j<texto.length; j++){
        const caractere = texto.charCodeAt(j);
        const caractereDeslocado = String.fromCharCode(caractere-1);
        replaceAt(textoArray, j, caractereDeslocado);
    }
    return textoArray.join('');
}

const casosTeste = parseInt(lines[0]);

for(i=1; i<=casosTeste; i++){
    let valorTeste = lines[i].trim();
    
    valorTeste = primeiraRegra(valorTeste);
    valorTeste = segundaRegra(valorTeste);
    valorTeste = terceiraRegra(valorTeste);
    console.log(valorTeste);
}