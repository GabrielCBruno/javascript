const saida = document.getElementById('saida')

function calcular() {
    let a = Number(prompt(`Qual é o valor de a?`))
    let b = Number(prompt(`Qual é o valor de b?`))
    let c = Number(prompt(`Qual é o valor de c?`))
    let delta = (b ** 2) - 4 * a * c
    saida.innerHTML += `<p>Resolvendo Bhaskara <br>A equação atual é ${a}x² + ${b}x + ${c}= 0 <br>O cálculo realizado será Δ = ${b}² - 4 . ${a} . ${c} <br>O valor calculado foi Δ = ${delta}</p>`
}