
document.getElementById("miFormulario").addEventListener("submit", function (event) {
    var nombre = document.getElementsByName("nombre")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var mensaje = document.getElementsByName("mensaje")[0].value;

    // Realiza las validaciones que necesites aquí
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        event.preventDefault(); // Evita que se envíe el formulario
    }
    
    if (email === "") {
        alert("Por favor, ingresa tu email.");
        event.preventDefault();
    } else if (!isValidEmail(email)) {
        alert("El email no es válido.");
        event.preventDefault();
    }

    if (mensaje === "") {
        alert("Por favor, ingresa tu mensaje.");
        event.preventDefault();
    }
});

function isValidEmail(email) {
    // Utiliza una expresión regular para validar el formato del email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
