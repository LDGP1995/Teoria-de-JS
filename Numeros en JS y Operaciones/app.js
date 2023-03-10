//Numeros en JS (uso const porque se que no van a cambiar a lo largo del programa)
const numero1= 30;
      numero2= 20;
      numero3= 20.20;
      numero4= .1020;
      numero5= -3;

let resultado;

//SUMA
resultado=numero1+numero2; //el + se usa para concatenar pero con numeros JS lo reconoce como n operador
console.log(resultado);

//RESTA
resu,ltado=numero1-numero2;
console.log(resultado);
//Multiplicar
resultado=numero1+numero2;
console.log(resultado);
//division
resultado=numero1/numero2;
console.log(resultado);
//modulo
resultado=numero1%numero2;//devuelve el resto
console.log(resultado);
//PI
resultado= Math.PI;
console.log(resultado);
//redondeo este redondea a 2, mayor q eso a 3, se usa en carrito de compras cundo hay centavos
resultado= Math.round(2.4);
//redondea hacia arriba
resultado= Math.ceil();
//redondea hacia abajo
resultado= Math.floor();
//raiz cuadrada
resultado= Math.sqrt(144);
//numero absoluto
resultado= Math.abs(numero5);
//8 a las 3ra potencia en esta caso
resultado= Math.pow(8, 3);
//numero minimo
resultado= Math.min(3,7,1,2,7,9,5);
//numero maximo
resultado= Math.min(3,7,1,2,7,9,5);
//numero aleatorio
resultado=Math.random();


//funciones matematicas (combinadas)
resultado=10+1+20*5;

//carrito con 20% de descuento
resultado=(10+20+10+20+40)*0.2;

let puntaje=10;
++puntaje;//incrementa en 1 antes de imprimirlo si pongo (puntaje++) se incrementa luego de agregar puntaje nuevamente en la consola
//devuelve la operacion resultado+3
puntaje +=3;
//devuelve la operacion resultado-8
puntaje -=8;