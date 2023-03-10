//JS es n lenuaje no tipado, no hay que especificar el tipo de datos
let valor;
//numero
valor=20;
//string
valor="cadena de texto";
//object
valor=null;
valor= {nombre:"Juan",
        profesion: "Web Designer"};
        valor=new Date();
//undefined
valor=undefined;
//booleano
valor=true;
//Symbol
valor = Symbol("Simbolo");
//array, aunque con typeof me dice que es un object
valor=[1,2,3,4];


valor="Juan";
console.log(typeof valor);//Muestra el tipo de dato que recononce JS