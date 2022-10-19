/**
 * Si es mayor de edad entra
 * Menor de edad no entra
 * <70 paga 10€
 * Si no 5€
 */

let edad = 22;
const mayorDeEdad = 18;
let mensaje = "";
if (edad < mayorDeEdad) {
  mensaje = "No puedes entrar";
} else if (edad < 70) {
  mensaje = "Pagas 10€";
} else {
  mensaje = "Pagas 5€";
}

if (mensaje !== 0) {
  console.log(mensaje);
}
// console.log(mensaje);

if (edad >= 18 && edad <= 70) {
  console.log("Tengo una edad entre 18 y 70 incluidos");
}
let condicion = true;
console.log(condicion ? "condición verdadera" : "Condición falsa");

let condicional = 4 > 3 ? "condición verdadera" : "Condición falsa";
console.log(condicional);

let numMensajes = 5;
let description = `Tienes ${numMensajes} mensaje${
  numMensajes === 1 ? "" : "s"
} nuevo${numMensajes === 1 ? "" : "s"}.`;
console.log(description);
