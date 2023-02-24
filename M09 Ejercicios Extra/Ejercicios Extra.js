/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
}

// !---------------------------------

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  //   frase = "The Henry Challenge is close!"   ---> "ehT yrneH egnellahC si !esolc"

  const array = frase.split(" ");
  console.log(array); // --> ["The","Henry","Challenge","is","close!"]
  //           ["The","Henry","Challenge","is","close!"]
  //                     ^
  //string              Henry
  //index                1
  array.forEach((string, index) => {
    var palabraArray = string.split("");
    // ["H","e","n","r","y"]  ----> ["y","r","n","e","H"]  ----> "yrneH"
    array[index] = palabraArray.reverse().join("");
    // array[1]  =  ["ehT","yrneH","egnellahC","si","!esolc"]
  });
  // ----> ["ehT","yrneH","egnellahC","si","!esolc"]
  // ---> "ehT yrneH egnellahC si !esolc"
  var stringReverse = array.join(" ");

  return stringReverse;
}

// asAmirror("The Henry Challenge is close!");

function capicua(numero) {
  //  123 = 321  No es capicua
  //   131  = 131  Es capicua
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  // 1351
  var numToString = numero.toString(); // ---> "1351"
  var numArray = numToString.split(""); // ---> ["1","3","5","1"]
  var reverseArray = numArray.reverse(); // ---> ["1","5","3","1"]
  var numRevSting = reverseArray.join(""); // --->"1531"

  if (numero.toString() === numRevSting) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

// capicua(12345);

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  //   var arrayNew = ["a","b","c"]
  //                              ^
  //    arrayFiltrado = ["b"]                        false ---- true --- false
  // var arrayFiltrado  =  arrayNew.filter((elemento)=> elemento === "b")
  //
  // string = "sadbc"
  var arrayString = string.split(""); //---> ["s","a","d","b","c"]
  //                                                    ^
  //                                                  d!=="a" True     d!==b  tRUE       d!==c  True
  var arrayFiltrado = arrayString.filter(
    (elemento) => elemento !== "a" && elemento !== "b" && elemento !== "c"
  );
  // arrayFiltrado = ["s","d"]
  var stringFiltrado = arrayFiltrado.join(""); //---> "sd"
  return stringFiltrado;
}

// deleteAbc("ahorac");
//! -------------------------------

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
