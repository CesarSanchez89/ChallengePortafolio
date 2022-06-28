import { valida } from "./validacion.js";

const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    })
});

const texto = document.querySelector("textarea")

texto.addEventListener("blur", (texto) => {
    valida(texto.target);
})