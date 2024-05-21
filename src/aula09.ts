enum dias{
    domingo,
    segunda,
    terca,
    quarta,
    quinta,
    sexta,
    sabado
}
const dat=new Date()
//console.log(dias.domingo)
//console.log(dias['sexta'])
//console.log(dias[6])
//console.log(d.getDate())
//console.log(d.getDay())
//console.log(dias[d.getDay()])
//console.log(`O dia da semana hoje é ${dias[d.getDay()]} e o dia do mês é ${d.getDate()}`)
enum cores{
    branco='#fff',
    preto='#000',
    vermelho='#f00',
    verde='#0f0',
    azul='#00f'
}
//console.log(cores.branco)
//console.log(cores['preto'])
enum tipoUsuario{
    USER=10,
    ADMIN=20,
    SUPERUSER=30
}
console.log(tipoUsuario.USER)
console.log(tipoUsuario[30])

const tipo_usuario:tipoUsuario=10
console.log(tipo_usuario)
console.log(tipoUsuario)
