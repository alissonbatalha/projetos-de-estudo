//tela de fundo
function setup() {
  createCanvas(580, 400);
  somDaTrilha.loop();
}

// desenha e movimenta elementos na tela
function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialCarro();
  verificaColisao();
  incluiPontos ();
  marcaPonto();
}