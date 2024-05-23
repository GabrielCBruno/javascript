const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.querySelector("#c1")
const todosCursos = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click", ()=>{
    console.log("clicou")
})

todosCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        evt.stopPropagation() //Cancela a execução do evento.
    })
})
