abstract class  Conta{
      private readonly numero:number
      protected titular:string
      private saldoconta:number
      constructor(titular:string){
                this.numero=this.gerarNumeroConta()
                this.titular=titular
                this.saldoconta=0
       }     
      private gerarNumeroConta():number{
              return Math.floor(Math.random()*100000) + 1
       }

      protected info_classe_pai():void{
           console.log(`Titular:${this.titular}`)
           console.log(`Número.:${this.numero}`)
           
       }

      public get saldo():number{
            return this.saldoconta
       }

      private set saldo(saldoconta){
            this.saldoconta=saldoconta
      }

      protected deposito_conta_pai(valor:number){
            if(valor < 0){
                  console.log('Valor negativo inválido')
                  return
             }else{this.saldoconta = this.saldoconta + valor}
       }

      protected saque_conta_pai(valor:number){
            if(valor < 0){
                 console.log('Valor negativo inválido')
                 return
            }
            if(valor <= this.saldoconta){
               this.saldoconta = this.saldoconta - valor
            }else{
                  console.log('Saldo insuficiente')
            }
      }
}

interface Tributos{
      baseCalculo:number
      calcularTributos(taxa:number):number
}


class ContaPessoaFisica extends Conta implements Tributos{
      baseCalculo=10
      calcularTributos(taxa:5):number{
            return taxa * this.baseCalculo
      }
      
      cpf:number
      constructor(cpf:number, titular:string){
           super(titular)
           this.cpf=cpf
      }
      info(){
            console.log(`Tipo Conta:PF`)
            super.info_classe_pai()
            console.log(`CPF....:${this.cpf}`)
            console.log(`-------------------------------`)
      }

      public deposito(valor:number){
            if(valor>1000){
                  console.log(`Depósito de valor R$${valor} acima do permitido para conta de pessoa física`)
            }else{
                  super.deposito_conta_pai(valor)
            }
      }

      public saque(valor:number){
            if(valor>1000){
                  super.saque_conta_pai(valor)
                  console.log(`Saque de valor R$${valor} acima do permitido para conta de pessoa física`)
            }else{
                  super.saque_conta_pai(valor)
            }
      }
}


class ContaPessoaJuridica extends Conta{
      cnpj:number
      constructor(cnpj:number, titular:string){
          super(titular)
          this.cnpj = cnpj
      }
      info(){
            console.log(`Tipo Conta:PJ`)
            super.info_classe_pai()
            console.log(`CPNJ...:${this.cnpj}`)
            console.log(`-------------------------------`)
      }

      public deposito(valor:number){
            if(valor>10000){
               console.log(`Depósito de valor R$${valor} acima do permitido para conta de pessoa jurídica`)
            }else{
                  super.deposito_conta_pai(valor)
            }
      }

      public saque(valor:number){
            if(valor>10000){
               super.saque_conta_pai(valor)
               console.log(`Saque de valor R$${valor} acima do permitido para conta de pessoa jurídica`)
            }else{
                  super.saque_conta_pai(valor)
            }
      }
}

const conta_pessoa_fisica = new ContaPessoaFisica(111, 'Danilo')
const conta_pessoa_juridica = new ContaPessoaJuridica(525252, 'Empresa')

console.log(conta_pessoa_fisica.info())
