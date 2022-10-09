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

/* Para efecto de tipado */

// set up text to print, each item in array is new line
var aText = new Array(
    '"La verdadera ignoracia no es la ausencia de conocimiento, sino el hecho de rehusarse a adquirirlo."',
    '',
    'Karl Popper'
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}
typewriter();

/* Boton para ir hacia arriba */

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container').classList.add('show');
    } else {
        document.querySelector('.go-top-container').classList.remove('show');
    }
}
document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});