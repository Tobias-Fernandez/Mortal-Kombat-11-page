let boton = document.getElementById("boton-home-icon");

boton.onclick = () => {
    encontrarPj();
}

function encontrarPj() {
    let nombre = document.getElementById("input-home").value;
    let pjData = document.getElementById("data-pj");

    let pjEncontrado = personajes.find((personaje) => personaje.nombre === nombre.toLowerCase());

    if (pjEncontrado) {
        location.href = pjEncontrado.link;
    } else {
        pjData.textContent = "Nombre de personaje incorrecto ❌";
    }

    const personajeJson = JSON.stringify(pjEncontrado);

    localStorage.getItem("Personaje") ? localStorage.setItem("Personaje", (localStorage.getItem("Personaje")) + (", " +personajeJson)) : localStorage.setItem("Personaje", personajeJson);
}