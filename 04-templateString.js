"use strict";
const usuario = "Stefano";

let numeroVisitas = 11;

//El usuario Estefano entró 10 veces en la web

//3 maneras de escribir lo mismo usando comas, concatenación (+) y coma francesa (``)
console.log(
  "El usuario",
  usuario,
  "entró",
  numeroVisitas,
  "veces en la página."
);

console.log(
  "El usuario " + usuario + " entró " + numeroVisitas + " veces en la página."
);
let mensaje = `El usuario ${usuario} entró ${numeroVisitas} veces en la página`;
console.log(mensaje);

let p = document.getElementsByTagName(".cadena");
p.document = mensaje;
document.write(p.document);

// Métodos string
let miString = "Hello, World!";
console.log("Nuestra cadena de caracteres:", miString);
console.log("La longitud de la cadena es:", miString.length);
console.log(`La longitud de la cadena es: ${miString.length}`);

console.log("La primera letra es:", miString[0]);
console.log("La última letra de la cadena es:", miString[12]);
console.log("La última letra de mi cadena es:", miString[miString.length - 1]);

console.log(miString.substring(1, 5));
console.log(miString[1], miString[4]);
console.log(miString[1] + miString[4]);

// Busca la posición de la primera "l"
let l = "l";
console.log("Primer índice de la letra l en la cadena: ", miString.indexOf(l));

// Busca la segunda "l" desde la posición "n". Nos devuelve el índice de la cadena TOTAL.
console.log(
  "Segundo índice de la letra l en la cadena: ",
  miString.indexOf(l, 4)
);

console.log(miString.indexOf("World"));
console.log(miString.lastIndexOf("l"));

/*
Empieza por "He": true
finaliza por "ld": false
Incluye "Wor": True
*/
console.log(
  miString.startsWith("He"),
  miString.endsWith("ld"),
  miString.includes("Wor")
);

console.log(miString.replace("Hell", "Weird"));
console.log(miString.toLowerCase());
console.log(miString.toUpperCase());

//TRIM
let nombre = "     Stefano     ";
console.log(".", nombre, ".");
console.log("." + nombre.trim() + ".");

//Eliminamos los espacios
console.log("." + nombre.trim().replace(" ", "") + ".");

//Repite el caracter n veces
console.log("*".repeat(8));
