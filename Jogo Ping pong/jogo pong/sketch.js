//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro/2

//velocidade da bolinha
let velocidadeXbolinha = 6; 
let velocidadeYbolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let largura = 10;
let altura = 90;

let colidiu = false

//variaveis raquete oponente
let xRaqueteOponente = 583;
let yRaqueteOponente = 150;
let velocidadeYOponente; 

//variáveis do placar
let meusPontos = 0;
let pontosOponente = 0;

//tela de fundo
function setup() {
  createCanvas(600, 400);
}

function mostraBolinha (){
  circle (xBolinha, yBolinha, diametro);
}

function movimentaBolinha () {
  xBolinha += velocidadeXbolinha
  yBolinha += velocidadeYbolinha
}

function verificaColisaoBorda () {
  if (xBolinha + raio > width || xBolinha - raio < 0 ) {
    velocidadeXbolinha *= -1
  }
  
  if (yBolinha + raio  > height || yBolinha - raio < 0 ) {
    velocidadeYbolinha *= -1
  }
}

function mostraRaquete (x,y) {
  rect (x, y, largura, altura)
}

//movimentação da raquete 
function movimentaRaquete () {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
   }
  
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete (x, y) {
  if (xBolinha - raio < x + largura && yBolinha - raio < y + altura && yBolinha + raio > y) {
    velocidadeXbolinha *= -1;
  }
}

function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - largura / 2 - 40;
  yRaqueteOponente += velocidadeYOponente
}

// função de colisão da biblioteca
function verificaColisaoRaqueteBiblioteca (x, y) {
  colidiu = 
  collideRectCircle(x, y, largura, altura, xBolinha, yBolinha, diametro);
  if(colidiu) {
    velocidadeXbolinha *= -1
  }
}

//mostra o placar na tela
function incluiPlacar () {
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150, 10, 40, 26);
  fill(255);
  text(meusPontos,170, 26);
  fill(color(255,140,0));
  rect(450, 10, 40, 26);
  fill(255);
  text(pontosOponente, 470, 26);
}

//soma o placar
function marcaPonto () {
  if (xBolinha > 585) {
    meusPontos += 1
  }
  if (xBolinha < 15) {
    pontosOponente += 1 
  }
}

// desenha os elementos do game
function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda ();
  mostraRaquete (xRaquete, yRaquete);
  movimentaRaquete();
  //verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  //verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  verificaColisaoRaqueteBiblioteca (xRaquete, yRaquete);
  verificaColisaoRaqueteBiblioteca (xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto ();
}