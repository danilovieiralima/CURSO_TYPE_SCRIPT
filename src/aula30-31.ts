import { Objeto, Coisas } from "./Classes"
import Pessoa from "./Classes"

const pessoa01 = new Pessoa('Danilo', 1.57)
const objeto01 = new Objeto('Dado')

console.log(pessoa01.altura)
console.log(pessoa01.nome)
console.log(objeto01.nome)
console.log(Coisas)