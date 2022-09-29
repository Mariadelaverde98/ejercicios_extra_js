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

function cambiarTexto(min, max) {
    document.getElementsByTagName('h2')[0].innerText = "Introduzca un número entre " + min + " y " + max;
}

function acierto(intentos) {
    var contenido = document.getElementsByTagName("div")[0];
    contenido.style.display = "none";

    var contenedor = document.createElement("div");
    var mensaje = document.createElement("h2");
    var textoMensaje = document.createTextNode("Acertaste el numero en " + intentos + " intentos!!!");
    document.body.appendChild(contenedor);
    contenedor.appendChild(mensaje);
    mensaje.appendChild(textoMensaje);

    mensaje.style.display = "flex";
    mensaje.style.justifyContent = "center";
    mensaje.style.paddingTop = "100px"


    var boton = document.createElement("button");
    var textoBoton = document.createTextNode("Volver a jugar");
    boton.style.display = "flex";
    boton.style.justifyContent = "center";


    contenedor.appendChild(boton);
    boton.appendChild(textoBoton);
    boton.setAttribute("onclick", "location.reload()");

}

function juego(min, max, numAdivinar, intentos) {
    var numero = parseInt(document.getElementsByTagName('input')[0].value);
    intentos++;
    if (numero == numAdivinar) {
        acierto(intentos);
    } else if (numAdivinar < numero) {
        cambiarTexto(min, max);
        document.getElementsByTagName("button")[0].setAttribute("onclick", `juego(${min},${numero},${numAdivinar},${intentos})`);
    } else {
        cambiarTexto(min, max);
        document.getElementsByTagName("button")[0].setAttribute("onclick", `juego(${numero},${max},${numAdivinar},${intentos})`);
    }
}
//(999, 0,Math.floor(Math.random()*1000), 0);

function crear_form() {
    var cabecera = document.createElement('h2');
    var textCabecera = document.createTextNode("Introduzca un número entre 0 y 999.");
    var input = document.createElement('input');
    var boton = document.createElement('button');
    var texto = document.createTextNode("Probar");
    var contenedor2 = document.createElement("div")
    var contenedor1 = document.createElement("div")

    input.type = "number";

    document.body.appendChild(contenedor1);
    contenedor1.appendChild(cabecera);
    cabecera.appendChild(textCabecera);
    contenedor1.appendChild(contenedor2);
    contenedor2.appendChild(input);
    contenedor2.appendChild(boton);
    boton.appendChild(texto);

    var numAdivinar = Math.floor(Math.random() * 10)
    boton.setAttribute("onclick", "juego(0,9," + numAdivinar + ",0)");

    cabecera.style.display = "flex";
    cabecera.style.justifyContent = "center";
    contenedor2.style.display = "flex";
    contenedor2.style.justifyContent = "center";
    contenedor1.style.paddingTop = "100px";

}

window.onload = () => {
    crear_form();
}
