function f_teste<T,U>(valor:T, exemplo:U):U{
        return exemplo
}
//console.log(f_teste<string,string>('10', ''))
//console.log(f_teste<number,number>(10, 0))
//console.log(f_teste<object,object>({},[]))
class Classe_teste<T>{
      public valor:T
      constructor(valor:T){
                this.valor=valor
      }
}
const classe_teste1 = new Classe_teste<string>('Danilo')
const classe_teste2 = new Classe_teste<object>(['objeto'])
//console.log(classe_teste1.valor)
//console.log(classe_teste2.valor)
