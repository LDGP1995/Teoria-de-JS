//Function Expressions
function suma (a,b){
    console.log (a+b);
}
suma (2,3);
suma(3,0);
suma (4,8);
suma (3); // Da NaN porque no tiene el valor de b

function saludar (nombre){
    return(`Hola ${nombre}`);
}
console.log (saludar(`Luisi`));


function saludar (nombre){
    console.log (`Hola ${nombre}`);
}
saludar(`Luis Daniel`);

//IIFE, se ejecuta sin mandarlo a llamar

(function (a,b){
    console.log(a+b);
})(2,4)

//Funciones de Metodo de Propiedad (Cuando una funcion se pone dentro de un objeto)
let musica={
    reproducir: function(id){
        console.log(`Estoy reproduciendo la pista numero ${id}`);
    },
    pausa: function(id){
        console.log(`Estoy pausando la cancion mumero ${id}`);
}
    
}
musica.reproducir(3);
musica.pausa(5);



