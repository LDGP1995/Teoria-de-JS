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
