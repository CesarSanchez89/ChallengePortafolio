//Haz tú validación en javascript acá
/*const tipoDeErrores = ["valueMissing","typeMismatch","patternMismatch", "customError"];

const mensajesDeError = {
        nombre: {
            valueMissing: "El campo nombre no puede estar vacío",
        },
        email: {
            valueMissing: "El campo correo no puede estar vacío",
            typeMismatch: "El correo no es válido",
        },
        asunto: {
            valueMissing: "El campo asunto no puede estar vacío",
        },
        mensaje: {
            valueMissing: "El campo mensaje no puede estar vacío",
            patternMismatch: "El mensaje debe contener entre 10 a 40 caracteres.",
        },

};

const inputnombre = document.querySelector("#name");

inputnombre.addEventListener("blur", (evento) => {
    validar(evento.target);
})

const inputcorreo = document.querySelector("#correo");

inputcorreo.addEventListener("blur", (evento) => {
    validar(evento.target);
})

const inputtema = document.querySelector("#tema");

inputtema.addEventListener("blur", (evento) => {
    validar(evento.target);
})

const inputmensaje = document.querySelector("#mensagem");

inputmensaje.addEventListener("blur", (evento) => {
    validar(evento.target);
})

function validar(input) {
    let mensaje = "";
    if(input.value==""){
        mensaje = "El campo no puede estar vacío";
    };

    input.setCustomValidity(mensaje);
}*/

export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
    if(input.validity.valid){
        input.classList.remove("formcontato__form--invalid")
    }else {
        input.classList.add("formcontato__form--invalid")
    }
}

const validadores = {
    nombre: input => validar(input),
    email: input => validar(input),
    asunto: input => validar(input),
    mensaje: input => validar(input)
}

function validar(input) {
    let mensaje = "";
    if(input.value==""){
        mensaje = "El campo no puede estar vacío";
    };

    input.setCustomValidity(mensaje);
}