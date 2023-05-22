/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
const valores = lines[0]

const [e, f, c] = valores.split(" ").map((valor)=>
    Number(valor)
)

let garrafasVazias = e+f;
let garrafasBebidas = 0;

while(garrafasVazias>=c){
    garrafasVazias = garrafasVazias - c + 1;
    garrafasBebidas = garrafasBebidas + 1;
}

console.log(garrafasBebidas)