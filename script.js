// Help
function log(message) {
  console.log('> ' + message);
};

// App
const fields = document.querySelectorAll('[required]');
// Estou pegando todas as tags que tem o atributo required.
const boxMessage = document.querySelector('.box-message');

console.log(fields);

// Para cada field de dentro de fields vou fazer...
for (let field of fields) {
  field.addEventListener('invalid', event => {
    // O "invalid" fica disponivel quando temos o required como atributo.
    log("campo invalido")
  });
};
















function sendForm() {
  log('Formulario enviado com sucesso!');
  boxMessage.classList.add('active');
  boxMessage.classList.remove('desability');

  setTimeout(() => {
    boxMessage.classList.remove('active');
    boxMessage.classList.add('desability');
  }, 3000);

  event.preventDefault();
}

document.querySelector('form')
.addEventListener('submit', event => sendForm(event));