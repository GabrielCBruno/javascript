const saida = document.getElementById('saida')

function desconto() {
    let produto = String(prompt(`Qual é o produto que você está comprando ?`))
    let preco = Number(prompt(`Qual é o preço de ${produto}`))
    let des = (preco * 10)/100
    let precof = preco - des
    saida.innerHTML += `<strong><p>Calculando o desconto de 10% para ${produto}. <br>O preço original era R$ ${preco}. <br> Você acaba de ganhar ${des}. <br> No fim, você vai pagar R$ ${precof} no prduto ${produto}.</p></strong>`
}