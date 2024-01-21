/*Para saber se um ano é bissexto bata dividir por 4 e não sobrar resto*/

const saida = document.getElementById('saida')
const icon = document.getElementById('')
const parag = document.getElementById('paragrafo')

function bissexto() {
    let ano = Number(prompt(`Qual é o ano que você quer verificar ?`))
    parag.innerHTML = `<p>Analisando o Ano de ${ano}...</p>`
    if (ano % 4 == 0) {
        /*Ano Bissexto*/
        saida.innerHTML += `<p>O ano de ${ano}<strong style="background-color: lightgreen;"> É BISSEXTO</strong><span class="material-symbols-outlined">check</span></p>`
    }else {
        /*Ano não Bissexto*/
        saida.innerHTML += `<p>O ano de ${ano}<strong style="background-color: rgba(247, 71, 71, 0.801);"> NÃO É BISSEXTO</strong><span class="material-symbols-outlined">close</span></p>`
    }
}   