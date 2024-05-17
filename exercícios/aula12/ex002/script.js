"use stect"

function Validar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if ((fano.value == 0) || (fano.value < 1910) || (fano.value > ano)) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
        fano.value = 0
    }else {
        let idade = ano - (Number) (fano.value)
        res.innerHTML = "Você tem atualmente ou irá fazer " + idade + " anos."
    }
}