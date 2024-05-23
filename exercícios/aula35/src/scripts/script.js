const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const todosCursos = [...document.querySelectorAll(".curso")]
const btn1 = document.querySelector("#btn_copiar")
const btn2 = document.querySelector("#btn_voltar")

todosCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado") //Verifica se o que elemento possui a classe "selecionado", se não houver ele adiciona a classe, caso contrário, ele remove.
    })
})

btn1.addEventListener("click", ()=>{
    const cursosSelecionados = [...document.getElementsByClassName("selecionado")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el) /*Anexar um filho(div, section, etc) ao elemento caixa2. */
    })
})

btn2.addEventListener("click", ()=> {
    const cursoSelecionados = [...document.getElementsByClassName("selecionado")]
    cursoSelecionados.map((el) =>{
        caixa1.appendChild(el)
    })
})