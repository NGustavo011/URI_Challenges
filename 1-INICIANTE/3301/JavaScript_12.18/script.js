/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
const sobrinhos = ["huguinho", "zezinho", "luisinho"]

const valores = lines[0]

const arrValores = valores.split(" ")
const arrValoresOriginal = [...arrValores]
arrValores.sort()

const posicaoSobrinhoDoMeio = arrValoresOriginal.indexOf(arrValores[1])

console.log(sobrinhos[posicaoSobrinhoDoMeio])