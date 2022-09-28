/*Escribir dos funciones que permitan calcular:
1. La cantidad de segundos en un tiempo dado en horas, minutos y segundos.
2. La cantidad de horas, minutos y segundos de un tiempo dado en segundos.
 Una vez hecho, crea un menú donde se pueda elegir la opción de convertir 
 a segundos, convertir a horas,minutos y segundos o salir del programa.*/

function leer_horaMinSeg() {
    var tiempo = window.prompt("Introduce un tiempo en formato hh-mm-ss");
    return [parseInt(tiempo.substring(0,2)), parseInt(tiempo.substring(3,5)), parseInt(tiempo.substring(6))];
}
function leer_segundos() {
    var tiempo = window.prompt("Introduce un tiempo dado en segundos");
    return parseInt(tiempo);
}

function convertir_a_segundos() {
    var tiempo = leer_horaMinSeg();
    alert(tiempo[2] + tiempo[1] * 60 + tiempo[0] * 3600);
}

function convertir_a_horaMinSeg() {
    var segundos = leer_segundos();
    var segundos2 = segundos % 60;
    var minutos = Math.floor(segundos/60) ;
    var horas = 0;
    if (minutos >= 60) {
        horas = Math.floor(minutos/60);
        minutos = minutos % 60;
    }
    alert([horas, minutos, segundos2]);
}

(function menu() {
    var opcion = window.prompt("Introduce una opcion:\n -Convertir a segundos: 1\n -Convertir a horas, minutos, segundos: 2");
    switch(opcion) {
        case '1':
            convertir_a_segundos();
            break;
        case '2':
            convertir_a_horaMinSeg();
            break;
        default:
            break;
    }
})()