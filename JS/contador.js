$(document).ready(function () {
    vida.innerHTML = 20
});

const vidaZerada = document.querySelector("#vida");

let i = 20;

function adicionarVida() {
    i++;
    vida.innerHTML = i;
}

function retirarVida() {
    i--;
    vida.innerHTML = i;

    if (vidaZerada.textContent <= 0) {
        alert("Você perdeu!");
        vida.innerHTML = 0;

        return i = 0;
    }
}

