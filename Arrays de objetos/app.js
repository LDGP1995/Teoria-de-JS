const auto=[{modelo: 'Mustang', motor:6.0},
            {modelo: 'Polski', motor:6.1},
            {modelo: 'Lada', motor:6.2},
];

console.log(auto);//Muestra el array completo
console.log(auto[0])//solo muestra el primer objeto del array
console.log(auto[0].modelo)//Accedo solamente al prier elemento del objeto(modelo en este caso)
console.log(auto.length);//Este length devuelve la cant. de objetos (3) dentro del array 

for(let i=0; i<auto.length; i++){
    console.log(auto);//Imprime 3 veces el array completo
}

for(let i=0; i<auto.length; i++){
console.log(auto[0]);//Imprime 3 veces el primer elemento del array
}

for(let i=0; i<auto.length; i++){
console.log(auto[i]);//Imprime una sola vez el array
}

for(let i=0; i<auto.length; i++){
console.log(i);//Muestra hasta donde cuenta el (for)-- EN ESTE CASO CUENTA: 0,1,2
}

for(let i=0; i<auto.length; i++){
 console.log(auto[i].modelo);//Imprime modelo de los 3 elementos del array
 }

 