alert(teste)

function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        document.alert('[ERRO] Verificar os dados e tente novamente.')
    }else {

    }
}