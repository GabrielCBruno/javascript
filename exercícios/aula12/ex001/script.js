var msg = document.querySelector("#msg")
var img = document.querySelector("#imagem")
var data = new Date()
var hora = data.getHours()

function carregar() {
    msg.innerHTML = `Agora são ${hora} horas.`
    if ((hora >= 0) && (hora < 12)) {
        //BOM DIA
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#dbcd72'

    }else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = 'rgb(228, 106, 6)'
    }else {
        //BOA NOITE
        img.src = 'imagens/noite.jpg'
        document.body.style.background = 'rgb(70, 142, 236)'
    }
}