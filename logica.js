//llamo al boton de buscar que esta en el html
let boton = document.getElementById("boton-home-icon");

//funcion para llamar y renderizar datos del json local con un fetch
function obtenerNombres() {
    const PJJSON = "nombres.json";
    fetch(PJJSON)
        .then(resultado => resultado.json())
        .then(data => {
            const listaNomb = data.pjs;
            listaNomb.forEach(nom => {
                document.getElementById("div-nombresPj").innerHTML += `  
                    <p id="p-divjson">| ${nom.nombre} |</p>                 
                `; 
            })              
        });
};

//invocamos a la funcion 
obtenerNombres();

//evento de click del boton
boton.onclick = () => {
    encontrarPj();
}

//funcion para la barra de busqueda
function encontrarPj() {
    //llamo al input que esta en el html
    let nombre = document.getElementById("input-home").value;

    //varieble que busca en el array de objetos segun lo que escribimos en el input
    let pjEncontrado = personajes.find((personaje) => personaje.nombre === nombre.toLowerCase());

    //condicional que muestra un resultado segun si encontro o no lo que pusimos en el input
    if (pjEncontrado) {
        location.href = pjEncontrado.link;
    } else {
        Toastify({
            text: "Nombre de personaje incorrecto!",
            duration: 3000,
            position: "left",
            gravity: "top",
            style: {
                background: "red"
            }
        }).showToast();
    }

    //pasamos a strin el objeto que se encunetra para que se pueda ver el el local storage
    const personajeJson = JSON.stringify(pjEncontrado);

    //condicional ternario para que vaya sumando al localstorage el personaje que buscamos
    localStorage.getItem("Personaje") ? localStorage.setItem("Personaje", (localStorage.getItem("Personaje")) + (", " +personajeJson)) : localStorage.setItem("Personaje", personajeJson);
}