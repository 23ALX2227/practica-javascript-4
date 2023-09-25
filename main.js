
// -------------------------Jugando con funciones----------------------------
// -----------Variable con scope global

        // let mensaje = 'Hola';
        
        // function saludar() {
        //   console.log(mensaje);
        // }

        // function cambiarMensaje() {
        //   mensaje = '¡Hola a todos!';
        // }

        // // saludar(); // Resultado: Hola

        // cambiarMensaje();
        // saludar(); // Resultado: ¡Hola a todos!

// --------------Ejemplo sin variable global

        // function saludar(mensaje) {
        //   console.log(mensaje);
        // }

        // function obtenerMensaje() {
        //   return 'Hola';
        // }

        // saludar(obtenerMensaje());

//-----------------------------Nombrar variables------------------------------

// Camelcase:

        // let soyUnaVariableConCamelCase = "Mayormente utilizado en Java, Javascript, Node"

        // soy_una_snake_case = "Mayormente utilizado en Python, Perl, Rust..."

// Cuando creemos Clases estas se crean con Mayúscula al principio por convención.
// ( ya veremos clases )
// Si es un nombre compuesto respeta camelcase pero la primera es Mayuscula ej: "MiClase"

        // class Animal {
        //   constructor(nombre, pesoPromedio, alturaPromedio) {
        //     this.nombre = nombre;
        //     this.pesoPromedio = pesoPromedio;
        //     this.alturaPromedio = alturaPromedio
        //   }
        //   saludar() {
        //     console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.pesoPromedio} de peso promedio. y altura promedio... ${this.alturaPromedio}`);
        //   }
        // }

        // let loro = new Animal("lorito","4 kg.","60cm.")

// Concatenacion con backsticks `` :

        // let frase1 = "hola"

        // let frase2 = "como"

        // let fraseCompleta = `${frase1} ${frase2} estas, todo bien?`

        // console.log(fraseCompleta)

//-------------------Especificidad al nombrar variables*-----------

//Manejemos un punto intermedio entre no muy corto y no muy largo
//Ejercicio en conjunto (demos nombres a el contenido de las variables descriptas):

        //1 - Lista de teléfonos de clientes
        //'listMoviles','phonesListClients','listPhonesClients','clientsPhonesList' !
        //2 - Función que al ejecutarse invierte el contenido de un array
        //'arrReverse','reverseArr','invertArray','arrayContentInverter','arrayReverse'
        //3 - Texto que contiene aclaraciones generales del proyecto como, de que se trata y como utilizarlo.
        //'proyectGeneralNotes','readmeContent'
        //4 - Objeto que tiene las propiedades de un automovil en particular
        //'carObj','bmws3Properties','vehicleProperties','carProperties','dataSheetCar','carProps'
        //5 - Función que multiplica solo 2 argumentos
        //'multiply','multiplyFunction','multiply2Values'

//-------------------------------------------------Indentación-----------------------------------------

        // function checkHasHigherThanTen(array){

        //   for(let i = 0; i<array.length; i++){
        //     if(array[i] > 10){
        //       console.log("El array contiene por lo menos 1 número mayor a diez")
        //       break;
        //     }
        //   }

        // }


//-------------------------------------------------No anidar mucho-----------------------------------------
// 1 - ejemplo malo:

        // unNumero = 17
        // if(unNumero > 15){
        //       if(unNumero < 18){
        //             if(unNumero !== 16){
        //               console.log("es 17")
        //             } else {
        //               console.log("No es 17")// acá no deberia entrar nunca
        //             }
        //       } else {
        //           console.log("No es 17")
        //       }
        // } else {
        //   console.log("No es 17")
        // }

// 2 - ejemplo bueno:

        // unNumero = 17
        // if(unNumero !== 17){
        //   console.log("No es 17")
        // } else {
        //   console.log("Es 17")
        //}

// 3 - ejemplo excelente (ternario):

        // unNumero = 17
        // unNumero != 17 ? console.log("No es 17"): console.log("Es 17")


// -------------------------------------No comentar mucho el código CALLBACKS--------------------------------------

// Un código bien hecho no necesita muchos comentarios. Para aclarar cosas está el readme.
// Si una función en tu código realiza mas de una tarea diversificalas. Hace que la segunda tarea se haga aparte y que la función llame a la otra funcion para utilizarla.(callbacks)
// Callbacks (ejemplo 1 con y sin setTimeOut):
  
        // let primerNumero = 1
        // let segundoNumero = null

        // function obtieneSegundoNumero(){

        //   setTimeout(function(){
        //     segundoNumero = 6
        //   },2000)

        // }

        // function sumarNumeros(){
        //   console.log(primerNumero + segundoNumero)
        // }

        // obtieneSegundoNumero()
        // sumarNumeros()

// Callbacks (ejemplo 2 con callback) Utilizando una función como argumento y no ejecutandola de una vez.

        // let primerNumero = 4
        // let segundoNumero = null

        // function obtieneSegundoNumero(funcion){

        // //   setTimeout(function(){
        //     segundoNumero = 6
        //     funcion()
        // //   },2000)

        // }

        // function sumaNumeros(){
        //   console.log(primerNumero + segundoNumero)
        //   return 
        // }

        // obtieneSegundoNumero(sumaNumeros)


//------------------------------------------------Try Catch -------------------------------------------
// Muy por encima:

        // async function procesarDatosUsuario(id) {

        //   try {
        //     const datos = await obtenerDatosUsuario(id);
        //     console.log("Datos del usuario:", datos);
        
        //   } catch (error) {
        //     console.error("Error:", error);
        //   }

        // }

// For anidado: Queremos imprimir todos los numeros que estan en los arrays del array principal:

// let arrayBase = [
//     [1, 2, 3],  // 0
//     [4, 5, 6], // 1
//     [7, 8, 9] //2
//   ];

//   let sumaTotal = 0 //28

//   for (let x = 0; x < arrayBase.length; x++) {
  
    
//     for (let j = 0; j < arrayBase[x].length; j++) {
//       sumaTotal = sumaTotal + arrayBase[x][j]
//     }
  
    
//   }


//   const parientes = [
//           {
//                   nombre:"Juan",
//                   numerosDeSuerte: [234,54],
//                   altura: 180
//           },
//           {
//                   nombre:"Pepe",
//                   numerosDeSuerte: [263,753,747,5325235,346,7,6,666,7],
//                   altura: 190
//           },
//           {
//                   nombre:"Martin",
//                   numerosDeSuerte: [969,33,347],
//                   altura: 165
//           }
//   ]

//   let sumaNumerosSuerte = 0

//   for(let i = 0 ; i < parientes.length ; i++){

//           for(let j = 0 ; j < parientes[i].numerosDeSuerte.length ; j++){
//                   sumaNumerosSuerte = sumaNumerosSuerte + parientes[i].numerosDeSuerte[j]

//           }
//   }


//         console.log(sumaTotal)