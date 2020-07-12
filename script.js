// Help
function log(message) {
  console.log('> ' + message);
};

// App
const fields = document.querySelectorAll('[required]');
// Estou pegando todas as tags que tem o atributo required.
const boxMessage = document.querySelector('.box-message');

console.log(fields);

// Estou pegando esse event da estrutura de repetição for.
function customValidation(event) {
  const field = event.target;

  // console.log(field.validity);
  // retorna um objeto com varios valores.
  // quando eu coloco o setCustomValidity, ele coloca o field.validity -> customError como true.
  // se eu não tiver uma logica de limpar o setCustomValidity ele sempre vai estar com erro de validação.

  // --> logica para verificar se existem error no field.validity. (limpar o setCustomValidity) <--
  function verifyErrors() {
    let foundError = false;
    
    for(let error in field.validity) {
      // console.log(field.validity[error]);
      // assim eu vou saber o valor da propriedade.

      // se não for customError.(o custom error não intereça porque ele sempre vai ser true)
      // então verifica se tem erro
      if (error != 'customError' && field.validity[error]) {
        foundError = error
        // aqui eu estou pegando o erro que deu
      }
      /*Estou verificando se o error NÃO e o customError, e se o field.validity[error] 
        e igual a true, se for aprovado essa condição e porque tem erro!!
      */
    }

    return foundError;
  };

  const error = verifyErrors();
  log(`Error exists: ${error}`)

  // se tiver error pode rodar o field.setCustomValidity
  if (error) {
    // --> Mudar message do required <--
    field.setCustomValidity('Esse campo é obrigatório!');
  } else {
    field.setCustomValidity('');
  };

};
// O "target" e o field do for

// Para cada field de dentro de fields vou fazer...
for (let field of fields) {
  field.addEventListener('invalid', customValidation);
};
// O "invalid" fica disponivel quando temos o required como atributo.
















function sendForm(event) {
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
.addEventListener('submit', sendForm);