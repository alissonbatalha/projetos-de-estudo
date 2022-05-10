//código dos carros

let xCarro = [650, 650, 650, 650, 650, 650];
let yCarro = [40, 96, 150, 210, 270, 318];
let velocidadeCarro = [3.7, 2.8, 4.3, 6, 4.6, 3.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

//mostrar carro na tela
function mostraCarro () {
  for (let i = 0; i < imagemCarros.length; i += 1) {               image(imagemCarros[i], xCarro[i], yCarro[i], 50, 40);
  }
}

//movimentar carro na tela
function movimentaCarro () {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarro[i] -= velocidadeCarro[i];
  }
}

//loop dos carros
function voltaPosicaoInicialCarro () {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (xCarro[i] < -60) {
      xCarro[i] = 650;
    }
  }
}

//verifica a colisão
function verificaColisao () {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarro[i], yCarro[i], comprimentoCarro , alturaCarro, xAtor, yAtor, 15);
    if (colisao) {
      somDaColisao.play();
      voltaInicio()
      if (meusPontos > 0) {
         meusPontos -= 1;
      }
    }
  }
}

function voltaInicio () {
  yAtor = 376
}