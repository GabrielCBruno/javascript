"use strect"

/*Função Geradora é uma função que tem retorna algo antes de ser processada por completo. Para funções geradoras é obrigatório o uso da tag function.*/

function* cores(){ //O * indica que é uma função geradora
    yield "Vermelho" //O yield retorna o conteudo
    yield "Verde"
    yield "Azul"
}

const itc=cores() //O iterator é necessário que