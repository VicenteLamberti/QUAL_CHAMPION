function verificar() {
    var lane = window.document.getElementById('txtlane')
    var res = window.document.getElementById('res')

    if (lane.value != 'top' && lane.value != 'mid' && lane.value != 'adc' && lane.value != 'sup' && lane.value != 'jg') {
        window.alert('[ERRO] - Verifique a lane (use as opções dadas, e somente letra minúscula')

    } else {
        var sex = window.document.getElementsByName('radsex')
        var genero = ''
        var img = window.document.createElement('img')

        img.setAttribute('id', 'foto')




        if (sex[0].checked) {
            genero = 'Masculino'

            if (lane.value == 'top') {
                img.setAttribute('src', 'masc_top.png')

            } else if (lane.value == 'mid') {
                img.setAttribute('src', 'masc_mid.png')

            } else if (lane.value == 'adc') {
                img.setAttribute('src', 'masc_adc.png')

            } else if (lane.value == 'sup') {
                img.setAttribute('src', 'masc_sup.png')

            } else if (lane.value == 'jg') {
                img.setAttribute('src', 'masc_jg.png')
            }







        } else {

            if (sex[1].checked) {
                genero = 'Feminino'

                if (lane.value == 'top') {
                    img.setAttribute('src', 'fem_top.png')

                } else if (lane.value == 'mid') {
                    img.setAttribute('src', 'fem_mid.png')

                } else if (lane.value == 'adc') {
                    img.setAttribute('src', 'fem_adc.png')

                } else if (lane.value == 'sup') {
                    img.setAttribute('src', 'fem_sup.png')

                } else if (lane.value == 'jg') {
                    img.setAttribute('src', 'fem_jg.png')
                }


            }





        }
        res.innerHTML = `<p>Você é do sexo ${genero}, na rota ${lane.value} você seria :</p>`
        res.style.textAlign = 'center'
        res.appendChild(img)


    }


}

