const menosVida = document.querySelector("#retirarVida");
const maisVida = document.querySelector("#adicionarVida");
const vidaInicial = document.querySelector("#contador");

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
        alert("Você perdeu!");
        vidaInicial.innerHTML = 0;

    }
    return i;
});




