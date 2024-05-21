"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Classes_1 = require("./Classes");
const Classes_2 = __importDefault(require("./Classes"));
const pessoa01 = new Classes_2.default('Danilo', 1.57);
const objeto01 = new Classes_1.Objeto('Dado');
console.log(pessoa01.altura);
console.log(pessoa01.nome);
console.log(objeto01.nome);
console.log(Classes_1.Coisas);
