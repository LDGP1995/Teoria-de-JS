const nombre="Juan";

//cadena (regresa la cant. de caracteres que tiene la variable)
console.log(nombre.length);//4


const CP=10400;

//!console.log(nombre.length); length solo funciona con cadenas de texto
let cp;
cp=10400;
cp=String(cp);

console.log(typeof cp);// devuelve string
console.log(cp.length);// se puede usar la cantidad de caracteres y validar el cp

dato="4" + "4";
console.log(dato.length);//devuelve 2

//convertir booleanos a string
dato = true;
console.log(dato);//devuelve true
dato=String(dato);
console.log(typeof dato);

//!convertir de array a string
dato=String([1,2,3,4,5]);//
console.log(dato);//devuelve los numeros no el arreglo
console.log(typeof dato);//!tipo de datos OBJECT (ARRAY ES TIPO OBJECT) en este caso es string pues lo convirtio
console.log(dato.length);//devuelve 9, cuenta las comas

dato=[1,2,3,4,5];
console.log(dato);//devuelve el arreglo
console.log(typeof dato);//!tipo de datos OBJECT (ARRAY ES TIPO OBJECT)
console.log(dato.length);//devuelve 5, cuenta las comas

//!Otra forma de convertir a string (toString)
dato=20; 
dato=true;
dato=[1,2,3,4];
dato=null;
dato=dato.toString();
console.log(typeof dato);
console.log(dato);

