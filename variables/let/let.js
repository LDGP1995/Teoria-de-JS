let nombre= "Francisco";
let producto="libro";
console.log (nombre);

//!el valor estara indefinido hasta que le pase un valor
let ciudad;
ciudad="Habana";
console.log(ciudad);

//!se pueden declarar dos variables tipo let en una misma sentencia
let zapatos="converse", pullover="Adidas";
console.log(zapatos);
console.log(pullover);

//! A diferencia de var, let no acepta que se redeclare una misma variable

var apellido="Gomez", primerNombre="Luis";
console.log(primerNombre);

/*
Esto da error, con let no se puede redeclarar la misma variable

let espejuelos="rayban";
let espejuelos= "louis vutton";
console.log(espejuelos);

*/

//! Lo que se puede hacer es darle el mismo valor sin poner let

let espejuelos="rayban";
espejuelos="louis vutton";
console.log(espejuelos);

//! POR TANTO, USA LET CUANDO EL VALOR PUEDA SER REESCRITO, EN EL PROGRAMA PUEDE CAMBIAR DE VALOR
