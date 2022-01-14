$(document).ready(function () {
    vida.innerHTML = 20
});

let i = 20;

function adicionarVida() {
    i++;
    vida.innerHTML=i;
}

function retirarVida() {
    i--;
    vida.innerHTML=i;

    if(i<=-1){
        alert("Você perdeu!");
        vida.innerHTML=0;

        return i=0;
    }
}

