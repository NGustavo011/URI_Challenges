/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
const casosTeste = parseInt(lines[0]);
let vencedor;

for(i=1; i<=casosTeste; i++){
    const valorTeste = lines[i];
    const x = valorTeste.split(" ")[0];
    const y = valorTeste.split(" ")[1];
    
    const funcRafael = ((3*x)**2)+(y**2)
    const funcBeto = ((2*(x**2))+(5*y)**2)
    const funcCarlos = (-100*x) + (y**3)

    if(funcRafael>funcBeto && funcRafael>funcCarlos)
        vencedor = "Rafael"
    else if(funcBeto>funcRafael && funcBeto>funcCarlos)
        vencedor = "Beto"
    else
        vencedor = "Carlos"

    //console.log(funcBeto)
    console.log(`${vencedor} ganhou`);
}