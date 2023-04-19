//En JS puedo llamar la funcion antes de tenerla creada
//REVISAAAAAAAAAARRRR QUE ESTA MAL

//ObtenerClientes();//Esto lo puedo poner al principio al final
//function ObtenerClientes(){
//  console.log(`Descargando...`);
//setTimeout(function(){
//  console.log(`Completo`)},3000)
//}

///Try Catch (Resuelve el caso de si quiero probar una funcion que no existe)



//Funcion que no existe
try{/* codigo q puede lanzar una excepcion */
    let resultado = 10/0;
}
catch (error){
    console.log(`Ha ocurrido un error:`);
}
finally{console.log(`No le importa, ejecuta de todos modos`);}

//Capturar excepciones de diferentes tipos con bloque catch adicionales
//function funcionQueNoExiste(a,b){
//console.log(a+b);
//}
//funcionQueNoExiste(2,5);
try{
    let resultado=funcionQueNoExiste();
}catch (error){
if (error instanceof ReferenceError){
    console.log(`La funcion no existe`);
}else{
    console.log(`Ha ocurrido un error`);
}
}
