/* Disponemos en la caja del siguiente dinero distribuido de la siguiente 
manera: 234,27 € (información que se debe cargar en un array)

- Billetes de 500€: 0
- Billetes de 200€: 0
- Billetes de 100€: 0
- Billetes de 50€: 1 
- Billetes de 20€: 4
- Billetes de 10€: 8
- Billetes de 5€: 2
- Monedas de 2€: 5
- Monedas de 1€: 4
- Monedas de 0.50€: 0
- Monedas de 0.20€: 0
- Monedas de 0.10€: 1
- Monedas de 0.05€: 2
- Monedas de 0.02€: 3
- Monedas de 0.01€: 1

El programa obtiene un precio de artículo y un importe pagado desglosado
(se deben conocer las cantidades entregadas de todos los billetes y monedas) y 
responderá si no hay cambio, si está justo o si se devuelve cambio, de nuevo con el 
desglose que debe ser lo más óptimo (es decir, si puedo devolver un billete de 20, no 
devuelvo 2 de 10, por ejemplo).

Debemos mostrar al final el desglose del cambio y el nuevo estado de la caja. */

function inicializar_efectivo(c500, c200, c100, c50, c20, c10, c5, c2, c1, c0_5, c0_2, c0_1, c0_05, c0_02, c0_01) {
    return [c500, c200, c100, c50, c20, c10, c5, c2, c1, c0_5, c0_2, c0_1, c0_05, c0_02, c0_01, 0];
}

function calcular_total(efectivo, billetesMonedas) {
    efectivo[efectivo.length - 1] = 0;
    for (let i = 0; i < efectivo.length - 1; i++) {
        efectivo[efectivo.length - 1] += efectivo[i] * billetesMonedas[i];
    }
    efectivo[efectivo.length - 1] = Math.round((efectivo[efectivo.length - 1] + Number.EPSILON) * 100) / 100;
    return efectivo;
}

function actualizar_caja(pago, caja, billetesMonedas) {
    for (let i = 0; i < caja.length; i++) {
        if (pago[i] != 0) {
            caja[i] += pago[i];
        }
    }
    return calcular_total(caja, billetesMonedas);
}

function mostrar_cambio(devolucion, billetesMonedas) {
    var msj = 'El cambio es:\n'
    for (let i = 0; i < devolucion.length - 1; i++) {
        if (devolucion[i] != 0) {
            if (billetesMonedas[i] >= 5) {
                if(-devolucion[i] == 1) {
                    msj += -devolucion[i] + ' billete de ' + billetesMonedas[i] + ' euros.\n';
                } else {
                    msj += -devolucion[i] + ' billetes de ' + billetesMonedas[i] + ' euros.\n';
                }
            } else {
                if(-devolucion[i] == 1) {
                    msj += -devolucion[i] + ' moneda de ' + billetesMonedas[i] + ' euros.\n';
                } else {
                    msj += -devolucion[i] + ' monedas de ' + billetesMonedas[i] + ' euros.\n';
                }
            }
        }
    }
    alert(msj);
}

function devolver(pago, precio, caja, billetesMonedas) {
    var devolver = Math.round((pago[pago.length - 1] - precio + Number.EPSILON) * 100) / 100;
    alert("Tenemos que devolver " + devolver + " euros.");

    if (devolver > caja[caja.length - 1]) {
        alert("No tenemos suficiente dinero.");
    } else {
        var devolucion = inicializar_efectivo(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        for (let i = 0; i < caja.length - 1; i++) {
            for (let j = 0; j < caja[i]; j++) {
                if (devolver - billetesMonedas[i] >= 0) {
                    devolver -= billetesMonedas[i];
                    devolver = Math.round((devolver + Number.EPSILON) * 100) / 100;
                    devolucion[i]--;
                }
            }
        }
        if (devolver != 0) {
            alert("No tenemos cambio")
        } else {
            caja = actualizar_caja(devolucion, caja, billetesMonedas);
            caja = actualizar_caja(pago, caja, billetesMonedas);
            mostrar_cambio(devolucion, billetesMonedas);
        }
    }
    return caja;
}

function cobrar(precio, pago, caja, billetesMonedas) {
    if (pago[pago.length - 1] - precio == 0) {
        alert('No hay que dar nada de cambio');
        caja = actualizar_caja(caja, pago, billetesMonedas);
    } else if (pago[pago.length - 1] < precio) {
        alert('Tienes que darme mas dinero!');
    } else {
        devolver(pago, precio, caja, billetesMonedas);
    }
}


function principal() {
    const billetes_monedas = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    var caja = inicializar_efectivo(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    caja = calcular_total(caja, billetes_monedas);

    var precio = document.getElementById("precio").value;
    var billetes = ["c500", "c200", "c100", "c50", "c20", "c10", "c5", "c2", "c1", "c0_5", "c0_2", "c0_1", "c0_05", "c0_02", "c0_01"];
    var valores = []
    for (let i = 0; i < billetes_monedas.length; i++) {
        if (isNaN(parseInt(document.getElementsByClassName("dinero")[i].value))) {
            valores.push(0);
        } else {
            valores.push(parseInt(document.getElementsByClassName("dinero")[i].value));
        }
    }
    var pago = inicializar_efectivo(...valores);
    pago = calcular_total(pago, billetes_monedas);
    cobrar(precio, pago, caja, billetes_monedas);
}

function añade_input(nodo, i) {
    const billetes_monedas = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    var etiqueta = document.createElement("input");
    etiqueta.type = "number";
    etiqueta.setAttribute("class", "dinero");
    etiqueta.placeholder = "billetes de " + billetes_monedas[i] + " euros"
    nodo.appendChild(etiqueta);
    nodo.appendChild(document.createElement('br'));

}

function crear_form(nodo) {
    var etiqueta1 = document.createElement("input");
    etiqueta1.type = "number";
    etiqueta1.id = "precio";
    etiqueta1.placeholder = "Precio"
    nodo.appendChild(etiqueta1);
    nodo.appendChild(document.createElement('br'));
    for (let i = 0; i < 15; i++) {
        añade_input(nodo, i);
    }
    var etiqueta2 = document.createElement("button");
    etiqueta2.type = "button";
    etiqueta2.id = "enviar";
    var texto = document.createTextNode("Enviar");
    etiqueta2.appendChild(texto);
    nodo.appendChild(etiqueta2);
}

window.onload = () => {
    crear_form(document.getElementsByTagName("form")[0]);
    document.getElementById("enviar").setAttribute("onclick", "principal()");
}