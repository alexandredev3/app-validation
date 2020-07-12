// Help
function log(message) {
  console.log('> ' + message);
};

// App
const fields = document.querySelectorAll('[required]');
// Estou pegando todas as tags que tem o atributo required.



















document.querySelector('form')
.addEventListener('submit', event => {
  log('Formulario enviado com sucesso!');
  event.preventDefault();
});