function calcular (){
    var nome = document.querySelector('input#txtnome')
    var ra = document.querySelector ('input#txtra')
    var fnota1 = document.getElementById ('txtnota1')
    var fnota2 = document.querySelector ('input#txtnota2')
    var fnota3 = document.querySelector ('input#txtnota3')
    var nota1 = Number(fnota1.value)
    var nota2 = Number(fnota2.value)
    var nota3 = Number(fnota3.value)
    var media = (nota1 + nota2 + nota3) / 3
    var ficha = [`Nome: ${nome.value}<br />
                  RA : ${ra.value}<br />
                  Nota 1 : ${nota1}<br />
                  Nota 2 : ${nota2}<br />
                  Nota 3 : ${nota3}<br />
                  Media : ${media}<br />
                 <br />`]
    resp.innerHTML = 'FICHA COMPLETA'
    res.innerHTML = ficha
    if (media < 5) {
        situacao.style.background = 'red'
        situacao.innerHTML = 'SITUAÇÃO : REPROVADO!'
    } if (media >= 5 && media < 7) {
        situacao.style.background = 'yellow'
        situacao.innerHTML = 'SITUAÇÃO : EM RECUPERAÇÃO!'
    } if (media >= 7) {
        situacao.style.background = 'green'
        situacao.innerHTML = 'SITUAÇÃO : APROVADO!'
    } 
}