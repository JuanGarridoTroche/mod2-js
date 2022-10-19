"use strict";

/* 
    OPERADORES LOGICOS Y RELACIONALES
    Un valor booleano representa verdadero o falso,  
    activado o desactivado, sí o no. 
    Solo hay dos valores posibles de este tipo. 
    Las palabras reservadas true y false se evalúan en estos 
    dos valores.
*/

// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

// BOOLEANS

// IF

// OPERADOR TERNARIO

// SWITCH

console.log("1" + 1 + 1 + 1);
console.log(1 + "1" + 1 + 1);
console.log(1 + 1 + "1" + 1);
console.log(1 + 1 + 1 + "1");
console.log("3" - 3);
console.log(4 + "3" - 2);
console.log("3" * 3);
console.log("10" / 2);
console.log(10 + " objetos");
console.log("8" * "8");
let x = 2;
console.log(3 - "x");
console.log(3 - x);
console.log(Boolean("Juan"));
console.log(Boolean(""));
let nombre = "";
if (!nombre) {
  console.log("no tienes nombre.");
} else {
  console.log(nombre);
}
