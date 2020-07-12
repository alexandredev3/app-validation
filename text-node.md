# Validação de forms customizada com HTML e JavaScript | Code/Drops #32

```html
<script src="./script.js" defer ></script>
```
  - Quando for colocar o script no head, podemos colocar o *defer*, ele vai esperar
  todo o conteudo ser carregado pra depois carregar o script, evitando dá algum 
  problema.

```js
  field.setCustomValidity('Esse campo é obrigatório!');
```
  - Se nos apenas colocar essa função para mudar a message de required do input,
  ele vai retorna a messange de required com o campo preenchido ou não, então
  precisamos criar uma logica.

## Diferença do for in e do for of

```js
  let lists = [
    { id: 1, name: 'fazer cafe', status: 'feito' },
    { id: 2, name: 'estudar programção', status: 'não feito'},
    { id: 3, name: 'fazer um lanche', status: 'não feito' },
    { id: 4, name: 'dormir', status: 'não feito' }
  ];

  --> Ele vai operar em cada uma das listas separadamente...
  for (list of lists) {
    ...
  }

  --> Ele vai operar em cada propriedade da minha lista...
  for (name of list) {
    ...
  }
```