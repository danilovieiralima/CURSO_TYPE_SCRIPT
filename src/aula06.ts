//let numeros:Array<number|string>=[10,20,30,'Danilo']
//let numeros:(number|string)[]=[10,20,30,'Danilo']
let numeros:number[]=[10,20,30]
numeros.push(50)
numeros.unshift(0)
numeros.pop()
numeros.shift()
console.log(numeros)

let numeros_ro:ReadonlyArray<number>=[100,200,300, 400]
console.log(numeros_ro)
