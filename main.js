/* Noticias */
/* Para que los liks de "Leer Más" estén siempre abajo */
document.addEventListener("DOMContentLoaded", function (e) {  /* Para que cargue el contenido de la página */
    
    const parrafos = document.querySelectorAll(".descripcion");

    let alturas = [];
    let alturaMaxima = 0;

    const aplicarAlturas = (function aplicarAlturas() {
        
        parrafos.forEach(parrafo => {
            if (alturaMaxima == 0) {
                alturas.push(parrafo.clientHeight);
            } else {
                parrafo.style.height = alturaMaxima + "px";
            }
        });
        return aplicarAlturas;
    })();

    alturaMaxima = Math.max.apply(Math, alturas);
    aplicarAlturas();
});