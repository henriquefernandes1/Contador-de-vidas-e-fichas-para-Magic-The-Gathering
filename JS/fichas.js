const addFicha = document.querySelector("#addFicha");

addFicha.addEventListener("click", () => {
    let NomeFicha = prompt("Insira o nome da ficha");

    if (NomeFicha == "") {
        alert("É preciso um nome!");

    } else {
        let TipoFicha = prompt("Insira o tipo da ficha");

        if (TipoFicha == "") {
            alert("É preciso um tipo!");
        }
    }


});

function criaTrFicha(params) {

}