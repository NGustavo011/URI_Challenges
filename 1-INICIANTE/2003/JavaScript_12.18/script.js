/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
const casosTeste = lines.length;

const horaMarcadaInicial = "8:00"
const horaMarcada = horaMarcadaInicial.split(":").map((valor)=>Number(valor));
const horaMarcadaEmMinutos = horaMarcada[0]*60 + horaMarcada[1];

for(i=0; i<casosTeste; i++){
    if(lines[i]=="")
        break;

    const horaQueAcordou = lines[i].split(":").map((valor)=>Number(valor));
    const horaQueAcordouEmMinutos = horaQueAcordou[0]*60 + horaQueAcordou[1];

    let tempoDeAtrasoEmMinutos = horaMarcadaEmMinutos - horaQueAcordouEmMinutos - 60;
    
    if(tempoDeAtrasoEmMinutos > 0)
        tempoDeAtrasoEmMinutos = 0;
    
    console.log(`Atraso maximo: ${Math.abs(tempoDeAtrasoEmMinutos)}`);
}