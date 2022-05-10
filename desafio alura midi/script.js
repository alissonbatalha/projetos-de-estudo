const tel = document.querySelector('input[type=tel]');

teclado = document.querySelectorAll('input[type=button]');

for (let i = 0; i < teclado.length; i++ ) {
  const tecla = teclado[i];
  const tela = tel.appendChild('<p>');
  tecla.keyDown = () => {
    tela.innerHTML += `${tecla.value}`;
  }
}