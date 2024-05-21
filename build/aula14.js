"use strict";
function teste() {
    console.log('Teste');
}
const teste2 = (txt) => {
    console.log(txt);
};
teste2('CFBCursos');
teste2();
const f_soma = (numeros) => {
    let soma = 0;
    numeros.forEach((elementos) => {
        soma = soma + elementos;
    });
    return console.log(soma);
};
f_soma([2, 2, 2]);
