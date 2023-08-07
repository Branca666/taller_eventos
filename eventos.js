document.addEventListener("DOMContentLoaded", function() {
    const divSaludo = document.getElementById("saludoDiv");

    divSaludo.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
});