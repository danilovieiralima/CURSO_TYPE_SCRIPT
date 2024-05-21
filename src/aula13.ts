function soma(numero1:number=0,numero2:number=0):number{
       return numero1+numero2
}

console.log(soma())
console.log(soma(10,4))
console.log(soma(8))
console.log()
function novoUser(user:string, password:string, nome?:string):void{
        let dados={user, password, nome}
        console.log(dados)
}

novoUser('Danilo','1234')
console.log()
novoUser('Teste','000','Test')
