const dolar = Number(prompt(`Antes de mais nada. Quanto está a contação do dólar agora?`))

function converter() {
    let din = Number(prompt(`Quantos R$ você tem na carteira ?`))
    let res
    res = din/dolar
    alert(`você tem ${res} dolar`)
}