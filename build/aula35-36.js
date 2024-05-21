"use strict";
const fcores = () => {
    return ["Black", "White", "Blue", "Green"];
};
let [cor1, cor2, cor3, cor4] = fcores();
let texto1 = 'Curso de Typescript';
let [...texto2] = texto1.split(" ");
console.log(texto2);
