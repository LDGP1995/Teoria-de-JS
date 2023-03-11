//Array ordena sis elementos a partr de 0

//!Array de nmeros enteros
const numeros=[10, 20, 30, 40, 50, 60];
console.log(numeros);

//!Array de strings (metodo alternativo)
const meses= new Array('Enero', 'Febrero', 'Marzo', 'Abril')

console.log(meses);

//!Array mezclado

const mezclado= ['Hola', 0, true, null, false, undefined];
console.log(mezclado);
console.log(Array.isArray(mezclado))//pregunta si es una array

console.log(meses[1]);//imprime el segundo valor del array ya que empieza a listar a partir de 0 
//!Si coloco 4 por ejemplo me pone undefenied pues va de 0-3 en este caso
//si pongo lo siguiente se agrega mayo al arreglo de meses
meses [4]= 'Mayo';
//O tambien a es mejor:
meses.push('Junio');// sin especificar la posicion lo pone en orden
console.log(meses);


//!Encontrar un elemento del array
console.log(meses.indexOf('Abril'));// Pone la posicion q ocupa en el array

//!agregar al inicio del array
meses.unshift ('Mes 0');// no reemplaza sino que el que era primero lo pone de 2do
console.log(meses);

//!Eliminar elemento de un array
meses.pop()
console.log(meses);//elimina el ultimo


//!Eliminar elemento de un array
meses.shift ();
console.log(meses);

//!Eliminar un elemento en especifico
meses.splice(2,2);// (#de donde me posiciono para borrar, cant de elementos que borro a partir de donde estaba)
console.log(meses);

//!Invertir el orden de la array
meses.reverse(meses);
console.log(meses);

//!Unir un array con otro

let arreglo1=[1,2,3], 
    arreglo2=[4,5,6];
    console.log(arreglo1.concat(arreglo2));

//!Ordenar un array (en este caso se oredena alfabeticamente)

const frutas=['naranja', 'platano', 'manzana', 'fresa']
frutas.sort();
console.log(frutas);

//!Ordenar numeros
arreglo1 = [3,9,91,92,23,67,34,76,90,100];
arreglo1.sort();//Ordena en depnedencia del primer valor del numero y la cant de cifras

//Este si lo ordena correctmente con el empleo de function
console.log(arreglo1);
arreglo1.sort(function(x,y){
    return x-y
});
console.log(arreglo1);

//!Ordenar numeros de forma inversa
console.log(arreglo1);
arreglo1.sort(function(x,y){
    return y-x
});
console.log(arreglo1);


