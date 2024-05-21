"use strict";
class Conta {
    numero;
    titular;
    saldoconta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info_classe_pai() {
        console.log(`Titular:${this.titular}`);
        console.log(`Número.:${this.numero}`);
    }
    get saldo() {
        return this.saldoconta;
    }
    set saldo(saldoconta) {
        this.saldoconta = saldoconta;
    }
    deposito_conta_pai(valor) {
        if (valor < 0) {
            console.log('Valor negativo inválido');
            return;
        }
        else {
            this.saldoconta = this.saldoconta + valor;
        }
    }
    saque_conta_pai(valor) {
        if (valor < 0) {
            console.log('Valor negativo inválido');
            return;
        }
        if (valor <= this.saldoconta) {
            this.saldoconta = this.saldoconta - valor;
        }
        else {
            console.log('Saldo insuficiente');
        }
    }
}
class ContaPessoaFisica extends Conta {
    baseCalculo = 10;
    calcularTributos(taxa) {
        return taxa * this.baseCalculo;
    }
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        console.log(`Tipo Conta:PF`);
        super.info_classe_pai();
        console.log(`CPF....:${this.cpf}`);
        console.log(`-------------------------------`);
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log(`Depósito de valor R$${valor} acima do permitido para conta de pessoa física`);
        }
        else {
            super.deposito_conta_pai(valor);
        }
    }
    saque(valor) {
        if (valor > 1000) {
            super.saque_conta_pai(valor);
            console.log(`Saque de valor R$${valor} acima do permitido para conta de pessoa física`);
        }
        else {
            super.saque_conta_pai(valor);
        }
    }
}
class ContaPessoaJuridica extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log(`Tipo Conta:PJ`);
        super.info_classe_pai();
        console.log(`CPNJ...:${this.cnpj}`);
        console.log(`-------------------------------`);
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log(`Depósito de valor R$${valor} acima do permitido para conta de pessoa jurídica`);
        }
        else {
            super.deposito_conta_pai(valor);
        }
    }
    saque(valor) {
        if (valor > 10000) {
            super.saque_conta_pai(valor);
            console.log(`Saque de valor R$${valor} acima do permitido para conta de pessoa jurídica`);
        }
        else {
            super.saque_conta_pai(valor);
        }
    }
}
const conta_pessoa_fisica = new ContaPessoaFisica(111, 'Danilo');
const conta_pessoa_juridica = new ContaPessoaJuridica(525252, 'Empresa');
console.log(conta_pessoa_fisica.info());
