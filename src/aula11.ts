let nvalor:number;
let svalor:string;
let uvalor:unknown;

//uvalor=10;
//nvalor=10;
//svalor = nvalor.toString()

//console.log(typeof(svalor))
//console.log(svalor)


//nvalor = Number.parseInt(svalor)
//console.log(typeof(nvalor))
//console.log(nvalor)
//nvalor=<number><unknown>svalor
//nvalor = <number>uvalor
//svalor = <string>uvalor
//svalor+=10
//console.log(typeof(uvalor))
//console.log(uvalor)
//console.log(typeof(nvalor))
//console.log(nvalor)
//console.log(typeof(svalor))
//console.log(svalor)
svalor='10'
nvalor = svalor as unknown as number       // Usar a sintaxe (variável as tipo) também é um tipo de Type Assertion

