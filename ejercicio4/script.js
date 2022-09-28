/*La ametralladora con mayor producción durante la Primera
Guerra Mundial, la Chauchat fue la primera de este tipo de
armas lo suficientemente ligera como para poder ser
operada por un sólo soldado, incluso para disparar
desde la cintura en marcha. Utilizada por los ejércitos
franceses así como por los norteamericanos, estos 
últimos desvelaron una serie de fallos que la
convirtieron también en probablemente la peor
ametralladora de la historia.*/

/*Nuestro ejercicio, será hacer una Chauchat virtual, que reproduzca su comportamiento.

1.Por un lado habrás de crear una variable cargador donde habrá de guardar unos 7 "pium!"
2.El otro elemento será nuestra chauchat, que "hace cosas", y será donde pondremos el cargador para que haga cosas.*/

function chauchat(cargador) {
    let prob = 0;
    for(let i = 1; i < cargador.length - 1; i++) {
        prob = Math.random() * 101;
        if (prob >= 80) {
            console.log(cargador[i] + '!');
        } else {
            console.log("Illo, me he quedao pillá!");
        }
        if(i % 3 == 0) {
            console.log(' ');
        }
    }
}
chauchat(['pium', 'pium', 'pium', 'pium', 'pium', 'pium', 'pium']);

