const numero1=`50`;
const numero2=10;
const numero3=`tres`;


//concatena
console.log("Java" + "Script"); 
console.log(numero1 + numero2);//devuelve 5010 

//ya los suma porq se convirtio a numero (2 opciones)
console.log(Number(numero1) + numero2);console.log(parseInt(numero1) + numero2);


/// los resta porque entiende al (-) como un operador matematico no como un operador para concatenar como (+)
console.log(numero1 - numero2);


console.log(typeof numero3);//string
console.log(typeof parseInt (numero3));//number (pone numero sin serlo)
let dato;
dato=Number("20");//devuelve 20
dato=Number("20.394855");//devuelve 20.394855
dato=Number(true);//deuvelve un 1
dato=Number(false);// devuelve 0
dato=Number(null);// devuelve 0
dato=Number(undefined);// Devuelve Not A Number NaN
dato=Number('Hola Mundo');
dato=Number(1,2,3,4);


//ParseFloat y ParseInt (si quiero numeros decimales usar parseInt)
dato=parseInt("100");//devuelve el numero
dato=parseFloat("100");//devuelve el numero
dato=parseFloat("100.2903");//devuelve el numero 
dato=parseInt("100.2903");//devuelve el numero 100 (solo la parte entera)

console.log(dato);
console.log(typeof dato);// para afirmar que tipo de dato es c/u


//toFixed se usa con numero decimales
dato="82943905";
dato=82943905.9959550050600;


console.log(dato.toFixed(2));//puedes poner cuantos lugares despues de la coma quieres usar (en este caso 2)

dato="12345.67890";
console.log(parseInt(dato).toFixed (3));//pone 3 ceros despues de la coma
console.log(parseFloat(dato).toFixed (3));//pone 3 valores 










