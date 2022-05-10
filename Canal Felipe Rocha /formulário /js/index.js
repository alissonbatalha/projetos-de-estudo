const form = document.querySelector('#form'); 

const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password-confirmation');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkInputs();
  
})

function checkInputs () {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;
  
  if (usernameValue === '') {
    setErrorFor(username, 'Campo obrigatório.')
  } else {
    setSucessFor(username);
  }
  
  if (emailValue === '') {
    setErrorFor(email, 'Campo obrigatório.');
  } else {
    setSucessFor(email);
  }
  
  if (passwordValue === '') {
    setErrorFor(password, 'Campo obrigatório.');
  } else if (passwordValue.length < 8) {
    setErrorFor(password, 'Senha mínima de 8 caracteres.');
  } else {
    setSucessFor (password);
  }
  
  if (passwordConfirmationValue === '') {
    setErrorFor(passwordConfirmation, 'Campo obrigatório.');
  } else if  (passwordValue != passwordConfirmationValue) {
    setErrorFor(passwordConfirmation, 'Senhas não conferem.')
  } else {
    setSucessFor (passwordConfirmation);
  }
 
 /* 
  const formControls = form.querySelectorAll('.form__control')
  
  const formIsValid = [...formControls].every((formControl) => {
    return (formControl.className = "form__control success");
  });
  
  if (formIsValid) {
    window.alert(usernameValue + ', sua conta foi criada com sucesso!')
  };
  */
};

function setErrorFor (input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')

  //adiciona a mensagem de Erro
  small.innerText = message;
  
  //adiciona a classe de Erro
  formControl.className = 'form__control error'
  
}

function setSucessFor (input) {
  const formControl = input.parentElement;
  
  //adicionar a classe de sucesso 
  formControl.className = 'form__control success'

}