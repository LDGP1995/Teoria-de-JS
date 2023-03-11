//!Crear Objeto (Se emplean las llaves a diferencia de un array q son corchetes)
//! Se pueden crear cadenas, numeros, otros objetos, funciones
const persona={
      nombre:'Miguel',
      apellido:'Martinez',
      profesion:'Disenador Grafico',
      email:'correo@gmail.com',  
      edad:20,
      musica:['Trance', 'Rock', 'Grunge'],
      hogar:{
            ciudad: 'Guadalajara',
            pais: 'Mexico'
      },
      nacimiento:function(){
        return new Date().getFullYear() -this.edad;
      }
    
}
console.log(persona);
//!Si quiero mostrar un elemento del array a diferencia de un array que era por los indices aqui es por el objeto que deseo
console.log(persona.nombre);
console.log(persona.musica);
console.log(persona.hogar.ciudad);
console.log(persona.nacimiento());//regresa el ano de nacimiento

//!Otra manera de seleccionar a los valores de un objeto (NO LA RECOMIENDA)
console.log(persona['hogar'] ['pais']);