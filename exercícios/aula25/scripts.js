"use strect"

/*Arrow Function é outro jeito de escrever uma função anônima. Se só houver um parâmetro não é obrigatório o uso dos parênteses.*/

const soma=(...valores)=>{
    let res=0
    for(let i=0; i < valores.length; i++) {
        res += valores[i]
    }
    return res
}

console.log(soma(10,15, 90, 10))
