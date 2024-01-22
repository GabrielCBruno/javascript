const saida = document.querySelector('#saida')
const parag = document.querySelector('#parag')

function media() {
    let nome = String(prompt(`Qual é o nome do aluno ?`))
    let n1 = Number(prompt(`Primeira nota do aluno ${nome}:`))
    let n2 = Number(prompt(`Segunda nota do aluno ${nome}:`))
    let media = (n1 + n2)/2
    parag.innerHTML = `<p style="font-size: 2.1em;"><Strong>Analisando a situação de ${nome}</strong></p>`
    saida.innerHTML = `<p>Com as notas ${n1.toFixed(1)} e ${n2.toFixed(1)} a <strong style="background-color:white;">média</strong> é ${media.toFixed(2)}</p>`
    if (media > 6) {
        /*Aprovado*/
        saida.innerHTML += `<p>Com <strong style="background-color:white;">média</strong> acima de 6,0, o aluno está <strong style="background-color:rgba(144, 238, 144, 0.801);">APROVADO</strong>(A)</p>`
    }else if ((media <= 6) && (media >= 3)) {
        /*Recuperação*/
        
        saida.innerHTML += `<p>Com <strong style="background-color:white;">média</strong> entre 3,0 e 6,0, o aluno está em <strong style="background-color:rgb(245, 245, 27);">RECUPERAÇÃO</strong>(A)</p>`
    }else {
        /*Reprovado*/
        saida.innerHTML += `<p>Com <strong style="background-color:white;">média</strong> abaixo de 3,0, o aluno está <strong style="background-color:rgba(250, 32, 32, 0.842);">REPROVADO</strong>(A)</p>`
    }
}