var tocaSom = (id) => {
  const elemento = document.querySelector(id).play();
  if (elemento === null) {
    alert('Elemento não encontrado!')
  }
  if (elemento =! null && elemento.localName === 'audio') {
     elemento.play();
  }
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaTeclas.length; contador++) {
  let tecla = listaTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = () => {
    tocaSom(idAudio);
  }

  tecla.onKeyDown = (evento) => {
    if (evento.code == 'space' || evento.code == 'enter') {
      tecla.classList.add('ativa');
    }
  }

  tecla.onKeyUp = () => {
    tecla.classList.remove('ativa');
  }
}