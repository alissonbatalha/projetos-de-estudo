 //código do ator

let xAtor = 100;
let yAtor = 370;
let meusPontos = 0;

let colisao = false

function mostraAtor () {
  image(imagemAtor, xAtor, yAtor, 25, 25)
}

function movimentaAtor () {
  if (keyIsDown(UP_ARROW)) {
      yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (yAtor < 376) {
    yAtor += 3
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 3
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xAtor += 3
  }
}

function incluiPontos () {
  textAlign(CENTER)
  textSize(25)
  fill(255, 240, 60)
  text(meusPontos, width / 5, 27) 
}

function marcaPonto () {
  if (yAtor < 10) {
    somDoPonto.play()
    meusPontos += 1
    voltaInicio()
  }
}