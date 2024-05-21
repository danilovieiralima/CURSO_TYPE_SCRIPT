interface tipo_curso{
    titulo:string;
    descricao:string;
    iniciarCurso?(teste:string):void
}

interface cursoProgramacao extends tipo_curso{
    numero_aulas:number;
    maxAlunos?:number
}

interface cursoArtes extends tipo_curso{
    numero_aulas:number;
    maxAlunos?:number
}

let curso01:tipo_curso
let curso02:cursoArtes
let curso03:cursoProgramacao

curso01 = {titulo:'Python', descricao:'Curso de Python',iniciarCurso(teste){},}
curso02 = {titulo:'Arte Medieval', descricao:'Curso de Arte Medieval',numero_aulas:190,maxAlunos:80}
curso03 = {titulo:'C++', descricao:'Curso de C++',numero_aulas:250,maxAlunos:50}

console.log(curso01)
console.log(curso02)
console.log(curso03)