"use strect"

/*Evento: é toda ação que ocorre no site. Exemplo: entrada de mouse, clique, saida de mouse, etc.*/

/*Para capturar um evento usa-se o addEventListener, no primeiro parâmetro é passado o evento que será capturado, no segundo uma função anônima.*/

const c1 = [...document.querySelectorAll(".botao")]

c1.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el= evt.target
        el.classList.add("botao")
    })
})

