"use strict";

/* 
    JavaScript es muy flexible en cuanto a los tipos de valores que requiere. 
    Hemos visto esto para los booleanos: cuando JavaScript espera un valor 
    booleano, puede proporcionar un valor de cualquier tipo y JavaScript lo 
    convertirá según sea necesario. Algunos valores (valores "verdaderos") 
    se convierten en true y otros (valores "falsos") se convierten en false. 
    Lo mismo sucede en el caso de otros tipos: si JavaScript quiere una string, 
    convertirá cualquier valor que le des a una cadena de texto. 
    Si JavaScript quiere un número, intentará convertir el valor que le das en 
    un número (o en NaN si no puede realizar una conversión significativa). 
    Conocemos como “conversión de tipo” cuando los operadores y funciones 
    convierten automáticamente los valores que se les pasan al tipo correct 
*/

/* 
    La coerción de datos es uno de los aspectos más intrigantes de Javascript. 
    Al corresponderse con un lenguaje de tipado blando, no es necesario 
    especificar el tipo de datos que contendrán nuestras variables. 
    Esto hace posible que en tiempo de ejecución, podamos modificar dicho 
    tipo para operar con ellos a voluntad.
    Por lo general, es el intérprete de Javascript el que realiza la conversión 
    de tipos por nosotros de forma interna buscando adaptarse a nuestras 
    operaciones. 
*/
