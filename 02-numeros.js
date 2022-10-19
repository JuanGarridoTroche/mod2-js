"use strict";

let op1 = 0;
let op2 = 0;

op1 = 10;
op2 = 11;

let resultado = op1 + op2;

console.log("Resultado:", op1 + op2);

// Resultado = resultado + 1;
resultado++;

console.log("Resultado:", resultado);

// Resultado = resultado + 3;
resultado += 3;
console.log("Resultado:", resultado);
console.log("Resultado++:", resultado++);
console.log("Así que resultado ahora es ", resultado);

console.log("++Resultado:", ++resultado);

console.log("Sigue con el mismo valor: ", resultado);

// OPERADORES

// DIVISIÓN
console.log(5 / 2);

//RESTO

// Resto = 1 => número impar
console.log(5 % 2);
//Resto = 0 => número par
console.log(6 % 2);

//POTENCIA

//2 elevado a 5 = 32
console.log(2 ** 5);

//Módulo Math
console.log(Math.pow(2, 5));

//devuelve el núm entero más cercano al núm introducido
console.log(Math.round(0.6));
console.log(Math.round(5.4));

//Devuelve el número sin decimales
console.log(Math.floor(5.6));

// Devuelve el valor superior o mayor
console.log(Math.ceil(5.1)); //6
console.log(Math.ceil(-5.9)); //-5

let numero = -5;
console.log(Math.abs(numero)); //devuelve el valor absoluto

//Devuelve un nº random entre 0 y 1 (el 1 no incluido)
console.log(Math.random());

//Quiero un nº entero entre 0 y 10

console.log(Math.floor(Math.random() * 11));

// Otra forma de hacerlo:
let random = Math.random() * 11;
random = Math.floor(random);
console.log("Número al azar entre 0 y 10:", random);
console.log("PI: ", Math.PI);

//Resultado "infinity / -infinity"
console.log(8 / 0);
console.log(-3 / 0);

//NaN: Not a Number
console.log(4 * "perro");
console.log(0 / 0);
//Debería dar NaN pero el propio JS lo intenta traducir a número y si lo consigue, da un valor
console.log(4 * "4");

//String. Lo muestra en pantalla como string (de color negro)
console.log("3.15");

//Conversiones explícitas
console.log(Number.parseInt(3.4));
//También funcionaría intentando pasar un string a nº
console.log(Number.parseInt("3.4"));

//Transforma el nº a decimales
console.log(Number.parseFloat(3.15));
console.log(Number.parseFloat("3.15"));

/*
let edad = prompt("Dime tu edad: ");
//Devuelve el valor como string
console.log(edad);
edad = Number.parseInt(edad);

console.log(
  "Pasamos el valor string introducido a número: ",
  edad,
  typeof edad
);
*/
//isNaN: Devuelve un booleano; true si "is not a number" y false si es un número
console.log(Number.isNaN(0 / 0));
console.log(Number.isNaN(10 / 3));

//isFinite: Devuelve boolean true si es finito
console.log(Number.isFinite(10 / 0));

//isInteger: devuelve un boolean, true si el nº es entero.
console.log(Number.isInteger(3.5));
