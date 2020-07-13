// Help
function log(message) {
  console.log('> ' + message);
};

// App
const fields = document.querySelectorAll('[required]');
// Estou pegando todas as tags que tem o atributo required.
const boxMessage = document.querySelector('.box-message');
const inputs = document.querySelectorAll('input');

console.log(fields);



// Estou pegando esse event da estrutura de repetição for.
function customValidation(event) {

  const field = event.target;

  const validation =  ValidateField(field);

  // esse validation e aquela função que nos registramos no ValidateField
  validation();

  // console.log(validation);
  // console.log(ValidateField(field));
  // log(`Error exists: ${error}`);

};
// O "target" e o field do for

// Para cada field de dentro de fields vou fazer...
for (let field of fields) {
  field.addEventListener('invalid', event => {
    // como so vai ter o bubble no invalid, faz sentido colocar ele aqui.

    // exterminar o bubble do html padrão.
    event.preventDefault();
    // com esse codigo, nossa missão de exterminar o bubble ja esta concluido. 

    customValidation(event);
  });
  field.addEventListener('blur', customValidation);
  // O event blur e quando ele perder o focodo, quando ele não esta mais selecionado.
};
// O "invalid" fica disponivel quando temos o required como atributo.

function sendForm(event) {
  event.preventDefault();

  boxMessage.classList.add('actived');

  setTimeout(() => {
    boxMessage.classList.remove('actived');
  }, 3000);

  // limpando os inputs.
  for(let input of inputs) {
    input.value = '';
  };
}

document.querySelector('form')
.addEventListener('submit', sendForm);