let inputHome = document.getElementsByClassName("input-home");
let boton = document.getElementsByClassName("boton-home-icon");
 
boton.onclick = () => {
    if (inputHome.value = personajes.find(personaje => personaje.nombre === pj.toLowerCase()) != undefined) {
        document.getElementById("body-home").innerHTML = `
            <body>
                ${personajes.link}
            </body>
        `;
    }
}

inputHome.onkeyup = () => {
    if (inputHome.value = personajes.find(personaje => personaje.nombre === pj.toLowerCase()) != undefined) {
        document.getElementById("body-home").innerHTML = `
            <body>
                ${personajes.link}
            </body>
        `;
    }
}
