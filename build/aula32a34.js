"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Amarelo"] = 3] = "Amarelo";
        Cores[Cores["Azul"] = 4] = "Azul";
        Cores[Cores["Prata"] = 5] = "Prata";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        Ligar() {
            this.motor.ligarMotor = true;
        }
        Desligar() {
            this.motor.ligarMotor = false;
        }
        get MinhaCor() {
            return this.cor;
        }
        get NomeCarro() {
            return this.nome;
        }
        get estouLigado() {
            return (this.motor.ligadoOuDesligado ? "Sim" : "Não");
        }
        get MinhaPotencia() {
            return this.motor.obterPotencia;
        }
    }
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(10)), 2);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300), 2);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        potencia_turbo;
        constructor(potencia_turbo) {
            this.potencia_turbo = potencia_turbo;
        }
        get obterPotenciaTurbo() {
            return this.potencia_turbo;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        cilindros;
        ligado;
        potencia;
        constructor(potencia, cilindros, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            if (turbo) {
                this.potencia = potencia + turbo.obterPotenciaTurbo;
            }
            else {
                this.potencia = 0;
            }
        }
        set ligarMotor(ligado) {
            this.ligado = ligado;
        }
        get ligadoOuDesligado() {
            return this.ligado;
        }
        get obterPotencia() {
            return this.potencia;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro01 = new Veiculos.CarroEsportivo('Jipe', 0);
const carro02 = new Veiculos.CarroPopular('Fiat Uno', 1);
carro01.Ligar();
carro02.Ligar();
console.log(`Carro Esportivo`);
console.log(`Nome....:${carro01.NomeCarro}`);
console.log(`Cor.....:${carro01.MinhaCor}`);
console.log(`Potência:${carro01.MinhaPotencia}`);
console.log(`Ligado..:${carro01.estouLigado}`);
console.log(`---------------------------------`);
console.log(`Carro Popular`);
console.log(`Nome....:${carro02.NomeCarro}`);
console.log(`Cor.....:${carro02.MinhaCor}`);
console.log(`Potência:${carro02.MinhaPotencia}`);
console.log(`Ligado..:${carro02.estouLigado}`);
