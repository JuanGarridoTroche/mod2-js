"use strict";

/* 1 - Definir una constante con la edición del bootcamp (JSB14CO) */
const edicion = "JSB14CO";

/* 2 - Guardar en una variable vuestro nombre */
const nombre = "Juan";

/* 3 - Guardar en una variable el numero de clase de JS de hoy (ej 2) */
let num = 2;

/* 4 - Componer la stringa "Hola <NOMBRE>, bien venido al día <numero> de JS (<EDICIÓN>)"
y guardarla en una variable (utilizar el operador de concatenación +) y luego imprimirla*/
let frase =
  "Hola " + nombre + ", bienvenido al día " + num + " de JS (" + edicion + ")";
console.log(frase);

/* 5 - Sobrescribir la variable anterior con la misma stringa pero compuesta utilizando string template */
frase = `Hola ${nombre}, bienvenido al día ${num} de JS (${edicion})`;

/* 6 - Imprimir a consola la stringa anterior */
console.log(frase);

/* 7 - Imprimir a consola vuestro nombre, numero de la clase, edición con un solo
console.log pasandole estos 3 parametros */
console.log(`${nombre}, ${num}, ${edicion}`);

/* 8 - Lo mismo del punto anterior pero pasando a console.log un solo parametro. En la consola tengo que ver el mismo resultado */
let frase2 = `${nombre}, ${num}, ${edicion}`;
console.log(frase2);

/* 9 - Imprimir a consola "Mañana será el día X de JS" sin modificar el valor de la variable con el dia */
console.log("Mañana será el día " + num + " de JS");
console.log("Mañana será el día " + (num + 1) + " de JS");
console.log(`Mañana será el día ${++num} de JS`); //No se debe utilizar ++

/* 10 - Imprimir el valor del día para comprobar */
console.log(num);

/* 11 - Imprimir la longitud de tu nombre (ej: '"Stefano" es un nombre de 7 caracteres') */
console.log(nombre + " es un nombre de " + nombre.length + " caracteres");

/* 12 - Imprimir "Andiamo, a tutta birra!" */
console.log("Andiamo, a tutta birra!");

/* 13 - Volver a imprimirlo todo en mayuscola */
const frase3 = "Andiamo, a tutta birra!";
console.log(frase3.toUpperCase());
