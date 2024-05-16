"use strect"

/*Função é um trecho de código que realiza alguma ação. Para declarar um função em Javascript usa-se a seguinte sintaxe: function <nome>(parâmentros) {}*/

/*Parâmentros REST é uma forma de passagem de parâmetros na qual não é preciso expecificar quantos valores serão passados. Para fazer é utilizado o opreador spread(...)*/

function soma(...valores) {
    let somar=0
    for (v of valores) {
        somar += v
    }
    return somar
}

console.log(soma(10,5, 19))