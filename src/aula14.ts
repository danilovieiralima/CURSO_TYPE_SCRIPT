//teste();

function teste():void{         //Esta é uma função tradicional
    console.log('Teste')
}



const teste2=(txt?:string):void => {       //Esta é uma função anônima ou arrow function
    console.log(txt)
}

teste2('CFBCursos')
teste2()

const f_soma=(numeros:number[]):void => {
    let soma:number=0;
    numeros.forEach((elementos) => {
        soma = soma + elementos
    })
    return console.log(soma)
}

f_soma([2,2,2])