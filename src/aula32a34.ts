namespace Veiculos{
    enum Cores{"Preto","Branco","Vermelho","Amarelo","Azul","Prata"}

    abstract class Carro{
        private nome:string
        private motor:Motores.Motor
        private cor:String
        constructor(nome:string, motor:Motores.Motor, cor:Cores){
            this.nome=nome
            this.motor= motor
            this.cor=Cores[cor]
        }

        public Ligar(){
            this.motor.ligarMotor=true
        }

        public Desligar(){
            this.motor.ligarMotor=false
        }

        get MinhaCor(){
            return this.cor
        }

        get NomeCarro(){
            return this.nome
        }

        get estouLigado(){
            return (this.motor.ligadoOuDesligado?"Sim":"Não")
        }

        get MinhaPotencia(){
            return this.motor.obterPotencia
        }
    }

    export class CarroEsportivo extends Carro{
           constructor(nome:string, cor:Cores){
                super(nome, new Motores.Motor(6,300, new Motores.Turbo(10)), 2)
           }
    }

    export class CarroPopular extends Carro{
        constructor(nome:string, cor:Cores){
             super(nome, new Motores.Motor(6,300), 2)
        }
 }
}

namespace Motores{
    export class Turbo{
        private potencia_turbo:number
        constructor(potencia_turbo:number){
                  this.potencia_turbo=potencia_turbo
        }

        get obterPotenciaTurbo(){
            return this.potencia_turbo
        }
    }

    export class Motor{
        private cilindros:number
        private ligado:boolean
        private potencia:number
        constructor(potencia:number, cilindros:number, turbo?:Turbo){
            this.ligado=false
            this.cilindros=cilindros
            if(turbo){
                this.potencia=potencia+turbo.obterPotenciaTurbo
            }else{
                this.potencia=0
            }  
        }

        set ligarMotor(ligado:boolean){
            this.ligado=ligado
        }

        get ligadoOuDesligado(){
            return this.ligado
        }

        get obterPotencia(){
            return this.potencia
        }
    }
}

const carro01 = new Veiculos.CarroEsportivo('Jipe', 0)
const carro02 = new Veiculos.CarroPopular('Fiat Uno', 1)

carro01.Ligar()
carro02.Ligar()


console.log(`Carro Esportivo`)
console.log(`Nome....:${carro01.NomeCarro}`)
console.log(`Cor.....:${carro01.MinhaCor}`)
console.log(`Potência:${carro01.MinhaPotencia}`)
console.log(`Ligado..:${carro01.estouLigado}`)
console.log(`---------------------------------`)
console.log(`Carro Popular`)
console.log(`Nome....:${carro02.NomeCarro}`)
console.log(`Cor.....:${carro02.MinhaCor}`)
console.log(`Potência:${carro02.MinhaPotencia}`)
console.log(`Ligado..:${carro02.estouLigado}`)
