/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
  // Esta función recibe un nombre (string).
  // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
  // [Ejemplo]: "mario" ----> "Mario".
  // Tu código:
}

function invocarCallback(cb) {
  // Invoca/ejecuta el callback `cb`.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
}

function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole como parámetros los números.
  // Tu código:
}

function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
}

function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
  // Debes pasarle el elemento como argumento al callback.
  // Tu código:
}

// !----------------------------------------------------------------
function map(array, cb) {
  // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  //   var newArray = [];
  //   array.forEach((element) => {
  //     newArray.push(cb(element));
  //   });
  //   return newArray;

  var newArray = array.map((element) => cb(element));
  return newArray;
}
// var array = [1,2,3]
// array.map((e)=>{e+1}) => [2,3,4]

// array.forEach((element) => element)) => null

function filter(arrayOfStrings) {
  // Debes identificar todos los elementos del arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  // "abc" = [0] = "a"

  //   var array = [ 1,2,3,4]
  //   elemento = 1 // 2 // 3 //4
  //   array.forEach(function(elemento){
  //       console.log(elemento) => 1 // 2 // 3 // 4
  //   })

  // newArray = []
  // arrayOfStrings=["abc","cde"]
  //                         ^
  //  elemento               ^
  //  abc[0] => "a"
  //  newArray = ["abc"]
  //    cde[0] => "c"
  //  newArray = ["abc"]
  var newArray = [];
  arrayOfStrings.forEach((element) => {
    if (element[0] === "a") {
      newArray.push(element);
    }
  });
  return newArray;

  // arrayOfStrings=["abc","cde"]
  //                        ^
  //  elemento              ^
  //  array = []
  //  condicion filter = push de todos lo elementos que cumplan una condicion "TRUE"
  //  abc[0] === "a"  TRUE
  //  array =["abc"]

  //   var newArray = arrayOfStrings.filter((element) => {
  //     return element[0] === "a";
  //   });
  //   return newArray;
}

var array = [
  "abajo",
  "pera",
  "escalera",
  "alerta",
  "indice",
  "azteca",
  "arbol",
  "buzo",
];

console.log(array[0][0]);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter,
};
