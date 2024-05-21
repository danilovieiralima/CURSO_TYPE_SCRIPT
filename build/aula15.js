"use strict";
function fsoma(...numeros) {
    let soma = 0;
    for (let elementos of numeros) {
        soma = soma + elementos;
    }
    return console.log(soma);
}
fsoma(10, 20, 30, 40, 50);
