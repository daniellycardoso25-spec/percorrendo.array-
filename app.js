// 0 1
let nomes =["Danielly", "Helo" ];



function buscar() {
let nomeBusca = document.querySelector("#input").value;
for (let i = 0; i < nomes.length; i++) {
if (nomeBusca == nomes[i]) {
document.querySelector("#saida").textContent = nomeBusca +" encontrado";
}

}

}