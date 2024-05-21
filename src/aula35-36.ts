//let array_valores = [10,20,30,40]
//let [a,b,c,d] = array_valores  //[10,20,30,40]
//console.log(`${a},${b},${c},${d}`)
//let [e,f,g] = [50,60,70]
//console.log(`${e},${f},${g}`)
//let [nome1, nome2, nome3] = ['Danilo', 'João', 'Pedro']
//console.log(`${nome1}, ${nome2}, ${nome3}`)
//let [obj1, obj2, obj3] = [true, true, false]
//console.log(`${obj1}, ${obj2}, ${obj3}`)

//const objeto = {
//    cor1:'Azul',
//    cor2:'Branco',
//    cor3:'Vermelho',
//    cor4:'Preto',
//} 
//let {cor1,cor2,cor3,cor4} = objeto
//console.log(`${cor1}, ${cor2}, ${cor3},${cor4}`)
//let [num1=0, num2=0, ...num3] = [10,20,30,40,50,60,70,80,90,100]
//console.log(num1)
//console.log(num2)
//console.log(num3)

const fcores = ()=>{
    return ["Black", "White", "Blue", "Green"]
}

let [cor1, cor2, cor3, cor4] = fcores()

let texto1 = 'Curso de Typescript'

let [...texto2] = texto1.split(" ")

console.log(texto2)