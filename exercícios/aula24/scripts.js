"use strect"

/*Funções Anônimas são funções que são chamadas em tempo de execução. Elas não possuem um nome, podem conter parâmetros e retorno. É nescessário associar a função a algo (variável, método)*/

const f = function(v1=0,v2=0) {
    return v1 + v2
}

console.log(f(10,15))

const f2= new Function('v1','v2','v3','return v1+v2+v3') // Função Construtor Anônima

console.log(f2(12,13,41))