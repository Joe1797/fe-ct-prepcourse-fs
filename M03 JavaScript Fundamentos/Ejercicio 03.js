/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Tu código:
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

// ==
//  "2" == 2 TRUE

//  ===
// "2" === 2  FALSE
//  2 === 2 TRUE

function tienenMismaLongitud(str1, str2) {
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  //   "abc".length // 3
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

// console.log("abcdeef".length)

function menosQueNoventa(num) {
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Tu código:
  if (num < 90) {
    return true;
  } else {
    return false;
  }
}

function mayorQueCincuenta(num) {
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Tu código:
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}

function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(20 % 2);
//  20/ 2 = 10 - // resto 0
// 15 /2 = 7 - // resto 1

function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  esPar,
  esImpar,
};
