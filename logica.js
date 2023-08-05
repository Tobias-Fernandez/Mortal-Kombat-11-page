let boton = document.getElementsByClassName("boton-home-icon");

boton.onclick = () => {
    encontrarPj();
}

function encontrarPj() {
    let nombre = document.getElementsByClassName("input-home").value;
    let pjData = document.getElementById("data-pj");

    let pjEncontrado = personajes.find(personaje => personaje.nombre === nombre.toLowerCase());

    if (pjEncontrado) {
        location.href = pjEncontrado.link;
    } else {
        pjData.textContent = "Nombre de personaje incorrecto";
    }
}

/*if (personajes.find(personaje => personaje.nombre === inputHome.value.toLowerCase()) != undefined) {

    const pj = personajes.find(personaje => personaje.nombre == inputHome.value.toLowerCase());

    window.location.href = pj.link;
}*/