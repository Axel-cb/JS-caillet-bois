const mensajeInicio = ("¡Bienvenido! contestá unas preguntas de seguridad para seguir con tu petición.");
alert(mensajeInicio);

do {
    pregunta = parseInt(prompt("Cuanto es 2+2?"));
    if (pregunta == 4) {
        alert("¡Respuesta correcta! Vamos con la siguiente");
    } else {
        alert("Respuesta incorrecta, volvé a intentarlo");
    }
} while (pregunta != 4);

do {
    preguntaDos = parseInt(prompt("Cuanto es 8+2?"));
    if (preguntaDos == 10) {
        alert("¡Respuesta correcta! ahora te pediremos datos básicos para el turno");
    } else {
        alert("Respuesta incorrecta, volvé a intentarlo");
    }
} while (preguntaDos != 10);

do {
    for (i = 1; i <= 10; i++) {
        let nombreApellido = prompt("ingresá tu nombre y apellido");
        let fechaDeNacimiento = prompt("ingresá fecha de nacimiento");
        let resultado = prompt("Turno n° " + i + "\n" + "Nombre: " + nombreApellido + "\n" + "Fecha de nacimiento " + fechaDeNacimiento + "\n" + "¿Desea solicitar otro turno? coloque si/no en minúscula");
        if (resultado == "si") {
            alert("okey, ingrese los datos para el siguiente turno.");
        } else {
            alert("Hasta pronto");
            break
        }
    }
} while (resultado == !no);

















