const menosVida = document.querySelector("#retirarVida");
const maisVida = document.querySelector("#adicionarVida");
const vidaInicial = document.querySelector("#vida");

vidaInicial.innerHTML = 20;
let i = 20;

maisVida.addEventListener("click", function () {
    i++;
    vidaInicial.innerHTML = i;
    return i;

});

menosVida.addEventListener("click", function () {
    i--;
    vidaInicial.innerHTML = i;

    if (i < 1) {
        vidaInicial.innerHTML = 0;
        alert("Você perdeu! \n"+"Clique duas vezes sobre o contador para reiniciar");

    }
    return i;
});

vidaInicial.addEventListener("dblclick", function(){
    vidaInicial.innerHTML=20;
    i=20;
});




