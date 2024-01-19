const saida = document.getElementById('saida')

function reajuste() {
    let nome = String(prompt(`Qual é o nome do funcionário ?`))
    let salario = Number(prompt(`Qual é o salário de ${nome} ?`))
    let perc = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem ?`))
    let salarion = Math.ceil(salario + (salario *perc)/100)
    saida.innerHTML += `<p>${nome} recebeu um aumento salarial!</p> <br>`
    saida.innerHTML += `<p>O salário atual era de R$ ${salario}.</p>`
    saida.innerHTML += `<p>Com um aumento de ${perc}%, o salário vai aumentar R$ ${Math.round(salario *perc)/100} no próximo mês.</p>`
    saida.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar R$ ${salarion}.</p>`
}