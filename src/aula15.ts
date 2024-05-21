function fsoma(...numeros:number[]){
       let soma:number=0;
       for(let elementos of numeros){
        soma=soma+elementos
       }
       //numeros.forEach((elementos)=>{
       //    soma = soma+elementos
       //})
       return console.log(soma)
}


fsoma(10,20,30,40,50)