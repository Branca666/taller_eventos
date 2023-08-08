const boton = document.querySelector("button");
const divSaludo = document.getElementById("saludoDiv");

boton.addEventListener("click", function(event) {
    alert("Hola! Soy el botón");
    event.stopPropagation();
});

divSaludo.addEventListener("click", function() {
    alert("Hola! Soy el div");
});