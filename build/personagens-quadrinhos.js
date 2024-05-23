"use strict";
class PersonagensQuadrinhos {
    alter_ego;
    nome_real;
    constructor(alter_ego, nome_real) {
        this.alter_ego = alter_ego;
        this.nome_real = nome_real;
    }
    get obterAlterEgo() {
        return this.alter_ego;
    }
    get obterNomeReal() {
        return this.nome_real;
    }
    set alterarAlterEgo(alter_ego) {
        this.alter_ego = alter_ego;
    }
    set alterarNomeReal(nome_real) {
        this.nome_real = nome_real;
    }
}
class PersonagensDComics extends PersonagensQuadrinhos {
    cidade_origem;
    universo_do_personagem;
    tipo_personagem;
    constructor(alter_ego, nome_real, universo_do_personagem, cidade_origem, tipo_personagem) {
        super(alter_ego, nome_real);
        this.universo_do_personagem = universo_do_personagem;
        this.cidade_origem = cidade_origem;
        this.tipo_personagem = tipo_personagem;
    }
    Ataque(score) {
        return score;
    }
    Defesa(score) {
        return score;
    }
    get obterPoderAtaque() {
        return this.Ataque;
    }
    get obterPoderDefesa() {
        return this.Defesa;
    }
}
class PersonagensMarvel extends PersonagensQuadrinhos {
    cidade_origem;
    universo_do_personagem;
    tipo_personagem;
    constructor(alter_ego, nome_real, universo_do_personagem, cidade_origem, tipo_personagem) {
        super(alter_ego, nome_real);
        this.universo_do_personagem = universo_do_personagem;
        this.cidade_origem = cidade_origem;
        this.tipo_personagem = tipo_personagem;
    }
    Ataque(score) {
        return score;
    }
    Defesa(score) {
        return score;
    }
    get obterPoderAtaque() {
        return this.Ataque;
    }
    get obterPoderDefesa() {
        return this.Defesa;
    }
}
let personagem01 = new PersonagensMarvel('Demolidor', 'Matt Murdock', 'Marvel', 'Nova York', 'Herói');
let personagem02 = new PersonagensDComics('Batman', 'Bruce Wayne', 'DC Comics', 'Gotham', 'Herói');
personagem01.alterarAlterEgo = 'Capitão América';
personagem01.alterarNomeReal = 'Steve Rogers';
const ataque01 = personagem01.Ataque(100);
const defesa01 = personagem01.Defesa(100);
const ataque02 = personagem02.Ataque(100);
const defesa02 = personagem02.Defesa(100);
console.log(`LUTA ${personagem01.obterAlterEgo.toUpperCase()} vs ${personagem02.obterAlterEgo.toUpperCase()}`);
console.log('--------------------------------------------------');
if (ataque01 > ataque02 && defesa01 > defesa02) {
    console.log(`O ${personagem01.obterAlterEgo} venceu a luta!`);
}
else {
    console.log(`O ${personagem02.obterAlterEgo} venceu a luta!`);
}
