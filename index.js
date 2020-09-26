'use strict'

function g(num1, num2) {
    const texto = `
     <h1>Hola esta es tu calculadora</h1> <br>
        la suma es ${num1 + num2} <br>
        la resta es ${ num1 - num2} <br>
    `;
        document.write(texto);
}
g(
   parseInt( prompt('introduce un numero')),
  parseInt(  prompt('introduce otro numero'))
);