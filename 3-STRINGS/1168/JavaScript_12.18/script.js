/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
const casosTeste = parseInt(lines[0]);

for(i=1; i<=casosTeste; i++){
    const valorTeste = lines[i];
    let soma=0;

    for(var num of valorTeste) {
        switch(num){
            case '0':
                soma+=6;
                break;
            case '1':
                soma+=2;
                break; 
            case '2':
                soma+=5;
                break; 
            case '3':
                soma+=5;
                break; 
            case '4':
                soma+=4;
                break;
            case '5':
                soma+=5;
                break;
            case '6':
                soma+=6;
                break;
            case '7':
                soma+=3;
                break;
            case '8':
                soma+=7;
                break;
            case '9':
                soma+=6;
                break; 
        }
    }
    console.log(`${soma} leds`);
}