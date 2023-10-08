
function verificar() {

    data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada ${idade}.`
        var genero = ''
        var tipoPessoa = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'masculino'

            //verificaçao da idade
            if (idade >= 0 && idade < 10) {
                //Criança
                tipoPessoa = 'criança'
                img.setAttribute('src', 'fotoBebeHomem.png')
            } else if (idade < 21) {
                //Jovem
                tipoPessoa = 'jovem'
                img.setAttribute('src', 'fotoJovemHomem.png')
            } else if (idade < 50) {
                //Adulto
                tipoPessoa = 'adulto'
                img.setAttribute('src', 'fotoAdulto.png')
            } else {
                //Idoso
                tipoPessoa = 'idoso'
                img.setAttribute('src', 'fotoIdoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'feminino'

            //verificaçao da idade
            if (idade >= 0 && idade < 10) {
                //Criança
                tipoPessoa = 'criança'
                img.setAttribute('src', 'fotoBebeMulher.png')
            } else if (idade < 21) {
                //Jovem
                tipoPessoa = 'jovem'
                img.setAttribute('src', 'fotoJovemMulher.png')
            } else if (idade < 50) {
                //Adulto
                tipoPessoa = 'adulta'
                img.setAttribute('src', 'fotoAdulta.png')
            } else {
                //Idoso
                tipoPessoa = 'idosa'
                img.setAttribute('src', 'fotoIdosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${tipoPessoa} do sexo ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}