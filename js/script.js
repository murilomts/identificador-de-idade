function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector(`div#res`)

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]: Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Crianca
                img.setAttribute('src', 'imagens/criancamenino.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/jovemmenino.png')
            }else if(idade < 40){
                //Adulto
                img.setAttribute('src', 'imagens/homem.png')
            }else{
                //Idoso
                img.setAttribute('src','imagens/homemidoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Crianca
                img.setAttribute('src','imagens/criancamenina.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','imagens/jovemmenina.png')
            }else if(idade < 40){
                //Adulto
                img.setAttribute('src','imagens/mulher.png')
            }else{
                //Idoso
                img.setAttribute('scr','imagens/mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}