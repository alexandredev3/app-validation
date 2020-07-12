// Help
function log(message) {
  console.log('> ' + message);
};

// App
const fields = document.querySelectorAll('[required]');
// Estou pegando todas as tags que tem o atributo required.
const boxMessage = document.querySelector('.box-message');

console.log(fields);

function ValidateField(field) {
  // Logica para verificar se existem erros
  function verifyErrors() {
    let foundError = false;
    
    for(let error in field.validity) {
      // console.log(field.validity[error]);
      // assim eu vou saber o valor da propriedade.

      // se não for customError.(o custom error não intereça porque ele sempre vai ser true)
      // então verifica se tem erro
      if (field.validity[error] && !field.validity.valid) {
        foundError = error
        // aqui eu estou pegando o erro que deu
      }
      /*Estou verificando se o error NÃO e o customError, e se o !field.validity.valid
      for false
      */

      // verificando qual error ele encontrou.
      // console.log(foundError);
    }

    return foundError;
  };

  // console.log(field.validity);

  // aqui eu estou passando como parametro qual e o tipo do error.
  function customMessage(typeError) {
    const messages = {
      text: {
        // quando o error for valueMissing eu vou retornar essa mensagem
        valueMissing: 'Por favor, preencha este campo'
      },
      email: {
        valueMissing: 'Email é obrigatório',
        typeMismatch: 'Por favor, preencha um email válido'
      }
    }

    return messages[field.type][typeError];
    // ou seja se o field type for text ele vai retorn se o field type for email ele vai pegar.
    // typeError ele vai retorna o tipo do error.
  };

  // console.log(field.validity);
  // retorna um objeto com varios valores.
  // quando eu coloco o setCustomValidity, ele coloca o field.validity -> customError como true.
  // se eu não tiver uma logica de limpar o setCustomValidity ele sempre vai estar com erro de validação.

  function setCustomMessage(message) {
    const spanError = field.parentNode.querySelector('span.error');
    // estou subindo pro pai(.input) e fazendo um querySelector no span.error.
    
    // se tiver message vai entrar nesse if.
    if (message) {
      spanError.classList.add('active');
      spanError.innerHTML = message; 
    } else {
      spanError.classList.remove('active');
      spanError.innerHTML = '';
    };
  };

  // aqui eu estou registrando essa função.
  return function() {

    const error = verifyErrors();

    // se tiver error ele vai entrar aqui.
    if(error) {
      const message = customMessage(error);

      field.style.borderColor = '#ff5858';
      setCustomMessage(message);
    } else {
      field.style.borderColor = '#08ca79';
      setCustomMessage();
    };
  };
};

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

    customValidation(event)
  });
  field.addEventListener('blur', customValidation)
  // O event blur e quando ele perder o focodo, quando ele não esta mais selecionado.
};
// O "invalid" fica disponivel quando temos o required como atributo.

function sendForm(event) {
  event.preventDefault();

  boxMessage.classList.add('actived');
  boxMessage.classList.remove('desability');

  setTimeout(() => {
    boxMessage.classList.remove('actived');
    boxMessage.classList.add('desability');
  }, 3000);
}

document.querySelector('form')
.addEventListener('submit', sendForm);