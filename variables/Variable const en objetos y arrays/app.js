//!Sustituye un # por otro en un array con variable const
const numeros= [1,2,3];
numeros [0]=4;// Cambia el # q esta en la posicion 0 y coloca el 4
console.log(numeros);
//!En const lo que no se puede es reasignar un valor distinto pero si se pueden modificar valores
numeros.push(5);
console.log(numeros);

