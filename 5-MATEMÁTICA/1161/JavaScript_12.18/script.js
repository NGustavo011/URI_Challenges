/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var size = lines.length;
for (let i = 0; i < size; i++) {
  var [m, n] = lines[i].split(" ");
  
  if(m=="" || n =="")
    break;

  console.log((calcularFatorial(m) + calcularFatorial(n)).toString().replace("n",""));
}
function calcularFatorial(n) {
  const valorInicial = BigInt(1)

  if (n < 0) {
    return NaN; // Retorna NaN para entradas inválidas
  }
  
  if (n === 0 || n === 1) {
    return valorInicial; // Fatorial de 0 e 1 é 1
  }
  
  let fatorial = valorInicial;
  
  for (let i = 2; i <= n; i++) {
    fatorial *= BigInt(i);
  }
  
  return fatorial;
}
