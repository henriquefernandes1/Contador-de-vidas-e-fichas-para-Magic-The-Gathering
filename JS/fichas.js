const addFicha = document.querySelector("#addFicha");
const tabelaFicha = document.querySelector("#tabelaFicha");

addFicha.addEventListener("click", () => {
    let NomeFicha = prompt("Insira o nome da ficha");

    if (NomeFicha == "") {
        alert("É preciso um nome!");

    } else {
        let TipoFicha = prompt("Insira o tipo da ficha");

        if (TipoFicha == "") {
            alert("É preciso um tipo!");
        } else {
            criaTable(NomeFicha);

        }
    }

});

function criaTable(NomeFicha) {
    const tabela = document.querySelector("#tabelaFicha");
    const criaTr = document.createElement("tr");
    const criaTd = document.createElement("td");
    criaTd.setAttribute("id", `id_${NomeFicha}`);

    tabela.appendChild(criaTr);
    criaTr.appendChild(criaTd);

    const tdFicha = document.getElementById(`id_${NomeFicha}`);
    tdFicha.textContent = NomeFicha;

    console.log(tabela);

    return (tabela);
}