const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log(minhaPrimeiraConstanteString);


let leituraDeCampo;
readLine.question ('Entre com um valor:', input => {
    leituraDeCampo = input;
    console.log(`o usuário digitou: ${leituraDeCampo}`);
});
