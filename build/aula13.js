"use strict";
function soma(numero1 = 0, numero2 = 0) {
    return numero1 + numero2;
}
console.log(soma());
console.log(soma(10, 4));
console.log(soma(8));
console.log();
function novoUser(user, password, nome) {
    let dados = { user, password, nome };
    console.log(dados);
}
novoUser('Danilo', '1234');
console.log();
novoUser('Teste', '000', 'Test');
