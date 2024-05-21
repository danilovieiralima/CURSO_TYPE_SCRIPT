"use strict";
class Computador {
    id;
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.cpu = cpu;
        this.ram = ram;
        this.ligado = false;
        this.id = 0;
    }
    info() {
        console.log(`Nome:...${this.nome}`);
        console.log(`RAM:...${this.ram}`);
        console.log(`CPU:...${this.cpu}`);
        console.log(`Ligado:${this.ligado ? "Sim" : "Não"}`);
        console.log('------------------------');
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    alterarRam(quantidade) {
        if (quantidade >= 0 && quantidade <= 1000) {
            this.ram = quantidade;
        }
        else {
            console.log(`Quantidade ${quantidade} para o computador ${this.nome} não é permitido.`);
        }
    }
}
const computador1 = new Computador('Comp1', 64, 10);
const computador2 = new Computador('Comp2', 32, 20);
const computador3 = new Computador('Comp3', 64, 15);
computador1.alterarRam(128);
computador1.ligar();
computador2.ligar();
computador3.desligar();
computador1.info();
computador2.info();
computador3.info();
