let dados={
    nome:'Danilo',
    idade:21,
    status:'A',
    ola:() => {console.log('Oi')},
    info:(p:string) => {console.log(p)}
}
dados.nome='José'
let outro_nome:string = 'Maria'
console.log(dados)
console.log(dados.nome)

dados.ola()
dados.info('Teste')
dados.info(dados.nome)
dados.info(outro_nome)
