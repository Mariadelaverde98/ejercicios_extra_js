/*
1.- Escribir un programa en lenguaje C que simule un juego de acertar números 
consistente en generar un número aleatorio entre 0 y 999 y pedir al usuario que lo 
acierte. Para ello, una vez generado el número, se pedirá al usuario que introduzca por 
teclado un valor entre los límites establecidos intentando acertar el número. El valor 
introducido podrá ser:
- igual al generado, con lo que se acaba el juego.
- menor que el generado, con lo que el límite inferior pasa a ser el valor 
introducido por el usuario y se le pedirá que vuelva a introducir otro número 
entre los dos nuevos límites.
- mayor que el generado, con lo que el límite superior pasa a ser el valor 
introducido por el usuario y se le pedirá que vuelva a introducir otro número 
entre los dos nuevos límites.
Cuando se acierte el número, se imprimirá por pantalla un mensaje 
indicándolo, así como el número de intentos hechos hasta conseguir el acierto.
Por ejemplo, si se genera el número 137, una secuencia podría ser:
Introduzca un número entre 0 y 999: 46
Introduzca un número entre 46 y 999: 526
Introduzca un número entre 46 y 526: 300
Introduzca un número entre 46 y 300: 125
Introduzca un número entre 125 y 300: 140
Introduzca un número entre 125 y 140: 137
¡¡¡Número acertado en 6 intentos!!!*/

(function juego(max, min, numAdivinar, intentos) {
    var numero = parseInt(window.prompt("Introduzca un número entre " + min + " al " + max));
    intentos++;
    if(numero == numAdivinar) {
        alert("Numero acertado en " + intentos + "!");
    } else if (numAdivinar < numero) {
        juego(numero, min, numAdivinar, intentos);
    } else {
        juego(max, numero, numAdivinar, intentos);
    }
})(999, 0,Math.floor(Math.random()*1000), 0);