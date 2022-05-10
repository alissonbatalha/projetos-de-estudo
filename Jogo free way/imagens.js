//imagens do jogo

let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload () {
  imagemEstrada = loadImage("imagens/estrada.png")
  imagemAtor = loadImage("imagens/ator-1.png")
  imagemCarro1 = loadImage("imagens/carro-1.png")
  imagemCarro2 = loadImage("imagens/carro-2.png")
  imagemCarro3 = loadImage("imagens/carro-3.png")
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]
  
  //sons do jogo
  somDaTrilha = loadSound ("sons/trilha.mp3")
  somDaColisao = loadSound ("sons/colidiu.mp3")
  somDoPonto = loadSound ("sons/pontos.wav")
}