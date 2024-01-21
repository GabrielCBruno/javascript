const saida = document.querySelector('#saida')
const parag = document.getElementById('paragrafo')

function verificar() {
    let pAnterior = Number(prompt(`Qual era o preço anterior do produto ?`))
    let pAtual = Number(prompt(`Qual é o preço atual do produto ?`))
    let dif = pAtual - pAnterior
    let perc
    parag.innerHTML = `<p style="font-size: 2em;"><strong>Analisando os valores informados</strong></p>`
    saida.innerHTML = `<p>O produto custava R$ ${pAnterior.toFixed(2)} e agora custa R$ ${pAtual.toFixed(2)}.</p>`
    if (pAtual > pAnterior) {
        /*Aumento*/
        perc = (Math.abs(dif)/pAnterior) * 100
        saida.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        saida.innerHTML += `<p>O preço subiu R$ ${Math.abs(dif)} em relação ao preço anterior.</p>`
        saida.innerHTML += `<p>Uma variação de ${perc.toFixed(2)}% pra cima.</p>`
    }else if (pAtual < pAnterior) {
        /*Desconto*/
        perc = (Math.abs(dif)/pAtual) * 100
        saida.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        saida.innerHTML += `<p>O preço caiu R$ ${Math.abs(dif)} em relação ao preço anterior.</p>`
        saida.innerHTML += `<p>Uma variação de ${perc.toFixed(2)}% pra baixo.</p>`
    }else {
        saida.innerHTML += `<p>Hoje o produto não houve alteração no seu preço.</p>`
    }
}
