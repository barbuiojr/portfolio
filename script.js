const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");

let contador = 0;
function slider(){
    contador++;
    if (contador > 4) {
        contador=0;
    }
    box.style.transform = `translateX(${-contador * 600}px)`;
}


setInterval (slider, 2000);