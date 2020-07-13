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
  // retorna um objeto com varios valores.
  // quando eu coloco o setCustomValidity, ele coloca o field.validity -> customError como true.
  // se eu não tiver uma logica de limpar o setCustomValidity ele sempre vai estar com erro de validação.
 

  // console.log(field.validity);

  // aqui eu estou passando como parametro qual e o tipo do error.
  function customMessage(typeError) {
    const messages = {
      text: {
        // quando o error for valueMissing eu vou retornar essa mensagem
        valueMissing: 'Por favor, preencha este campo',
      },
      email: {
        valueMissing: 'Email é obrigatório',
        typeMismatch: 'Por favor, preencha um email válido',
      }
    }

    return messages[field.type][typeError];
    // ou seja se o field type for text ele vai retorna, se o field type for email ele vai pegar.
    // typeError ele vai retorna o tipo do error.
  };

  function setCustomMessage(message) {
    const spanError = field.parentNode.querySelector('span.error');
    const inputEmail = field.parentNode.querySelector('#email');
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
      field.style.borderColor = 'rgba(53, 54, 64, 0.25)';
      setCustomMessage();
    };
  };
};