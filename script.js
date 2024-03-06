const ingresoTexto = document.getElementById("ingresoTexto");

const botonEncriptar = document.getElementById("botonEncriptar");

const botonDesencriptar = document.getElementById("botonDesencriptar");

const botonCopiar = document.getElementById("botonCopiar");

const contenedorResultados = document.getElementById("contenedorResultados");

const contenedorDiamante = document.getElementById("contenedorDiamante");

const contenedorParrafo = document.getElementById("contenedorParrafo");

const seccion2 = document.getElementById("seccion2");


let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"], 
    ["u", "ufat"],
]

const remplace = (nuevoValor) => {
    contenedorResultados.innerHTML = nuevoValor;

contenedorDiamante.style.display = "none";
ingresoTexto.value = "";
contenedorParrafo.style.display = "none";
botonCopiar.style.display = "block";
seccion2.classList.add("ajustar");

}



botonEncriptar.addEventListener("click", () => {
const texto = ingresoTexto.value.toLowerCase()
function encriptar(newText) {
    for(let i = 0; i < remplazar.length; i++){
        if (newText.includes(remplazar[i][0])) {
            newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
        };
    };
    return newText
}


remplace(encriptar(texto));

});

botonDesencriptar.addEventListener("click", () => {
const texto = ingresoTexto.value.toLowerCase();
function desencriptar(newText) {
    for (let i = 0; i < remplazar.length; i++){
        if(newText. includes(remplazar[i][1])) {
            newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
        };
    };
    return newText
}

remplace(desencriptar(texto))
})

botonCopiar.addEventListener("click", () => {
let texto = contenedorResultados.innerText;
navigator.clipboard.writeText(texto);
alert("Su Texto Fue Copiado");

})

//width: 320px;
//height: 450px;