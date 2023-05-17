/* Padrão modificado URI */
var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

/* Código utilizado */
let i = 0;
let D = lines[i].split(" ")[0];
let N = lines[i].split(" ")[1];

while(D!=="0" && N!=="0"){  

    res = removerRepeticoes(D, N);
    console.log(res);

    i++;

    D = lines[i].split(" ")[0];
    N = lines[i].split(" ")[1];
} 

function removerRepeticoes(caractere, string) {
    // Cria uma expressão regular para encontrar todas as ocorrências do caractere repetido
    const regex = new RegExp(caractere, "g");
    
    // Substitui todas as ocorrências do caractere repetido por apenas uma ocorrência
    let resString = string.replace(regex, "");
    
    resString = resString.replace(/^0+/, '');

    if(Number.isNaN(parseInt(resString)) || parseInt(resString)===0)
        resString = "0"

    return resString.trim()
}