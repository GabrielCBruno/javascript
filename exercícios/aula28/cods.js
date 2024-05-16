"use strect"

/*O método map é usado para percorrer coleções, vetores. O map pode receber até 3 paramêtros: elemento, posição e o array.*/

const coverterInt=(e)=>parseInt(e)
const dobrar=(e)=>e*2
let num=['1','2','3','4','5'].map(dobrar)
console.log(num)

// const el=document.getElementsByTagName('div')
// const val=Array.prototype.map.call(el, ({innerHTML})=>innerHTML)
// console.log(val)


/*const cursos=['HTML', 'CSS', 'Javascript', 'PHP', 'React']
let c=cursos.map((el, i)=>{
    //el = Elemento - i = Posição
    console.log("Curso:" + el + " - Posição do curso:" + i)
    return el
})

console.log(c)*/