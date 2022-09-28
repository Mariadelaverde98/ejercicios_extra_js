function es_primo(numero) {
    var i = 2;
    while (numero % i != 0) {
        i++;
    }
    return i == numero;
}

function primos_en_rango(max) {
    var primos = [];
    for (let i = 2; i <= max; i++) {
        if (es_primo(i)) {
            primos.push(i);
        }
    }
    return primos;
}

function es_simplificable(numerador, denominador) {
    return !((numerador == 1 || denominador == 1) || (numerador != denominador && es_primo(numerador) && es_primo(denominador)));
}

function simplificar_fraccion(numerador, denominador) {
    if (es_simplificable(numerador, denominador)) {
        var primos;
        if(numerador<denominador) {
            primos = primos_en_rango(numerador);
        } else {
            primos = primos_en_rango(denominador);
        }
        for (let i = 0; i < primos.length; i++) {
            while(numerador % primos[i] == 0 && denominador % primos[i] == 0) {
                denominador = denominador / primos[i];
                numerador = numerador / primos[i];
            }
        }
    }
    return [numerador, denominador];
}
console.log(simplificar_fraccion(8,4));

function sumar_fracciones(n1, d1, n2, d2) {
    var frac = simplificar_fraccion(n1*d2 + d1*n2, d1*d2);
    escribir_fraccion(frac[0], frac[1]);
}

function restar_fracciones(n1, d1, n2, d2) {
    var frac = simplificar_fraccion(n1*d2 - d1*n2, d1*d2);
    escribir_fraccion(frac[0], frac[1]);
}

function multiplicar_fracciones(n1, d1, n2, d2) {
    var frac = simplificar_fraccion(n1*n2, d1*d2);
    escribir_fraccion(frac[0], frac[1]);
}

function dividir_fracciones(n1, d1, n2, d2) {
    var frac = simplificar_fraccion(n1*d2, d1*n2);
    escribir_fraccion(frac[0], frac[1]);
}

function leer_fraccion() {
    var numerador = window.prompt("introduce un numero");
    var denominador = window.prompt("introduce otro numero");
    return [numerador, denominador];
}

function escribir_fraccion(numerador, denominador) {
    if(denominador == 1) {
        alert(numerador);
    } else {
        alert(numerador + '/' + denominador);
    }
}


(function menu() {
    var opcion = window.prompt("Elija una de las siguientes opciones:\n Sumar: s\n Restar: r\n Multiplicar: m\n Dividir: d");
    var fraccion1 = leer_fraccion();
    var fraccion2 = leer_fraccion();
    switch(opcion) {
        case 's':
            sumar_fracciones(parseInt(fraccion1[0]),parseInt(fraccion1[1]),parseInt(fraccion2[0]),parseInt(fraccion2[1]));
            break;
        case 'r':
            restar_fracciones(parseInt(fraccion1[0]),parseInt(fraccion1[1]),parseInt(fraccion2[0]),parseInt(fraccion2[1]));
            break;
        case 'm':
            multiplicar_fracciones(parseInt(fraccion1[0]),parseInt(fraccion1[1]),parseInt(fraccion2[0]),parseInt(fraccion2[1]));
            break;
        case 'd':
            dividir_fracciones(parseInt(fraccion1[0]),parseInt(fraccion1[1]),parseInt(fraccion2[0]),parseInt(fraccion2[1]));
            break;
        default:
            break;
    }
})()