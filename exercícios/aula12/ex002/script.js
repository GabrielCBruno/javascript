function Validar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if ((fano.value == 0) || (fano.value > ano)) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else {
        
    }

}