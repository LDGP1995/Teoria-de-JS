const num1=20;
const num2=50;
const num3="20";
console.log(num1>num2);
console.log(num1<num2);
console.log(20==20);

//este comparador aparte de comparar los numeros tambien compara el tipo de datos, es un comparador mas estricto
console.log(20===`20`);


//diferentes 2 formas de ponerlo 
console.log(2!=3);//true
console.log(2==3);//false


//comparar cadenas de texto o letras
console.log(`hola`==` hola `);//false (el espacio es importante)
console.log(`a`>`b`);// da false pues JS define que la letra `a` es menor que `b`, bmenor q `c` y asi... `A` mas rango que `z`, las minusculas son mayores q las mayusculas
console.log(`a`<`b`);//true
console.log(`a`<`B`);// false las minusculas son mayores
console.log(null==undefined);//true
console.log(null===undefined);//false