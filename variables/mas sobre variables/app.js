//! Todo esto son string o cadenas de texto

let nombre;
nombre="Juan Pablo";
console.log(nombre);

//! Siempre una cadena de texto tendra comillas simple o dobles en JS, no se puede abrir con comillas sencillas y cerrar con las dobles o viceversa


//! Si se quiere escribir una cadena de texto con comillas se debe poner asi:
let mensaje;
mensaje="Tenga \"Buen dia\"";
console.log(mensaje);

mensaje="20"; //Esto es una cadena de texto en la consola estas salen de color negro
mensaje=20; //Ya este es ptrp tipo de datos y la consola lo pone de otro color

console.log(mensaje);// lo pone de color verde porq es un numero

//!Concatenar texto
mensaje="Java" + "Script";
console.log(mensaje);

//!Uniendo variables en una sola
let aprendiendo= "Aprendiendo", tecnologia="Js";
let numero;

console.log(aprendiendo+tecnologia); //aqui salen pegadas las palabras
console.log(aprendiendo+ " "+tecnologia); //Aqui estan separadas ESTA ES LA FORMA VIEJA
console.log(`${aprendiendo} ${tecnologia}`);// Template Literal ---teclado USA tecla a la izq del 1 para la comilla simple (FORMA MODERNA)---

//!Se usa mucho para las contrasenas cuando te piden varios caracteres, para leer cuantos caracteres tiene la contrasena
console.log(tecnologia.length);//te dice cuantas letras tiene a variable tecnologia 
//!Son metodos validos solamente para cadenas de texto
console.log(tecnologia.toUpperCase() );//lo pone en mayuscula
console.log(tecnologia.toLowerCase() );
//!console.log(numero.toUpperCase() ); para: numero=200; da error porque no es un string
numero="200";
console.log(numero.toUpperCase() );
mensaje="Aprendiendo JavaScript";
console.log(mensaje.indexOf("JavaScript")); //devuelve el numero que indica el lugar que ocupa la primera letra de la palabra JavaScript (lo qu este dentro del parentesis) en el mensaje
console.log(mensaje.indexOf("hola"));//si le pones una paabra que no esta en el mensaje devuelve -1 (en consola) indicando que no esta
console.log(mensaje.substring(0, 11));/* selecciona el texto desde la letra que ocupa la posicion 0(la A en este caso)
y la 11(la o en ete caso)*/
console.log(mensaje.slice(-3)); //selecciona de derecha a izquierda las 3 primeras letras del mensaje en este caso
console.log(mensaje.slice(0, 11));// tambien actua como el substring 
console.log(mensaje.split(` `));//divide el mensaje y lista cada palabra
console.log(mensaje.replace(`Aprendiendo`, `Empezando`)); //Reemplaza la 1era palabra perteneciente al texto por la 2da
console.log(mensaje.includes("aprendiendo"));// Busca el valor seleccionado dentro de la cadena de texto
let lenguaje;
lenguaje=`JavaScript`;
console.log(lenguaje.repeat(8));//Repite el mensaje la cant de veces q se defina,sale uno al lado del otro sin separacion
lenguaje=`JavaScript` + ` `;//Repite el mensaje la cant de veces q se defina,sale uno al lado del otro con separacion
console.log(lenguaje.repeat(8));






