"use strect"


const soma=(...valores)=>{
    let res=0
    for(let i=0; i < valores.length; i++) {
        res += valores[i]
    }
    return res
}

console.log(soma(10,15, 90, 10))
