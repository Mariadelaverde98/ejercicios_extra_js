//1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío
var arrayVacio = [];

//2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
var arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
var arrayNumerosPares = [0, 2, 4, 6, 8];

//4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]
var arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

/*---------------------Funciones--------------------*/

//5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma
function suma(n1, n2) {
    return n1 + n2;
}

//6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)
function potenciacion(n1, n2) {
    return Math.pow(n1, n2);
}

//7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]
function separarPalabras(frase) {
    var ini = 0;
    var fin = 0;
    var palabras = [];
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] == ' ') {
            fin = i;
            palabras.push(frase.substring(ini, fin));
            ini = fin;
        }
    }
    palabras.push(frase.substring(ini + 1, frase.length));
    console.log(palabras);
}

//8.- Crea la función repetirString que acepte como argumento un string y un número
// y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces
function repetirString(string, numero) {
    var resultado = string;
    for (let i = 1; i < numero; i++) {
        resultado += string;
    }
}
//9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es
function esPrimo(numero) {
    var i = 2;
    while (numero % i != 0) {
        i++;
    }
    return numero == i;
}

/*---------------Mezclando arrays y funciones---------------*/

//10.- Crear la función ordenarArray que acepta como argumento un array de
// números y devuelva un array ordenado de menor a mayor
function ordenarArray(array) {
    var arrayOrdenado = [array[0]];
    var aux;
    var j;
    for (let i = 1; i < array.length; i++) {
        arrayOrdenado.push(array[i]);
        j = arrayOrdenado.length - 1;
        while (arrayOrdenado[j] < arrayOrdenado[j - 1] && j >= 0) {
            aux = arrayOrdenado[j];
            arrayOrdenado[j] = arrayOrdenado[j - 1];
            arrayOrdenado[j - 1] = aux;
            j--;
        }
    }
    console.log(arrayOrdenado);
}
//ordenarArray([3, 2, 1, 8, 6]);

/* 11.- Crear la función obtenerPares que acepta como argumento un array de números 
y devuelva un array con los elementos pares */
function obtenerPares(array) {
    let pares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            pares.push(array[i]);
        }
    }
}

/* 12.- Crear la función pintarArray que acepte como argumento un array y devuelva
 una cadena de texto. Array entrada: [0, 1, 2] String salida: '[0, 1, 2]' */
function pintarArray(array) {
    let resultado = '[';
    for (let i = 0; i < array.length - 1; i++) {
        resultado += array[i] + ',';
    }
    resultado += array[array.length - 1] + ']';
    return resultado;
}

/* 13.- Crear la función arrayMapi que acepte como argumento un Array y una
función y devuelva un array en el que se haya aplicado la función a cada elemento del array */
function arrayMapi(array, fun) {
    for (let i = 0; i < array.length; i++) {
        array[i] = fun(array[i]);
    }
    return array;
}
//console.log(arrayMapi([1, 2, 3], (a) => a + 1));

/* 14.- Crear la función eliminarDuplicados que acepte como argumento un array
y devuelva un array en el que se hayan eliminado los duplicados */
function eliminarDuplicados(array) {
    let resultado = [array[0]];
    let elemento;
    let estaEnArray;
    let j;
    for (let i = 1; i < array.length; i++) {
        elemento = array[i];
        j = 0
        estaEnArray = false;
        while (!estaEnArray && j < array.length) {
            estaEnArray = resultado[j] == elemento;
            j++;
        }
        if (!estaEnArray) {
            resultado.push(elemento);
        }
    }
    return resultado;
}
//console.log(eliminarDuplicados([1, 1, 1, 1, 1, 2, 3, 3, 5]));

/*----------------------Arrays---------------*/
/* 15.- Crear variable de nombre arrayNumerosNeg declarada con un array 
de números del 0 al -9 (0, -1, -2...) */
var arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//16.- Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'

//17.- Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'

//18.- Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

/*----------------------Funcione---------------*/

/* 19. - Crea la función multiplicacion que acepte como argumento dos números y
 devuelva el resultado de su multiplicación */
function multiplicacion(a, b) {
    return a*b;
}

//20.- Crea la función division que acepte como argumento dos números y devuelva el resultado de su division

//21.- Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar

//22.- Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)
var arrayFunciones = [(a,b) => a+b, (a,b) => a-b, (a,b) => a*b];
/*----------------Mezclando arrays y funciones------------------*/

//23.- Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor

//24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares

//25.- Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6

//26.- Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24