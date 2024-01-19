const saida = document.getElementById('saida')

function calcular() {
    let a = Number(prompt(`Qual é o valor de a?`))
    let b = Number(prompt(`Qual é o valor de b?`))
    let c = Number(prompt(`Qual é o valor de c?`))
    let delta = (b ** 2) - 4 * a * c
    saida.innerHTML += `<p>Resolvendo Bhaskara <br>A equação atual é 3x² + 6x + 2= 0 <br>O cálculo realizado será Δ = 6² - 4 . 3 . 2 <br>O valor calculado foi Δ = ${delta}</p>`
}