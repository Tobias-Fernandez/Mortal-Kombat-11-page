//SEGUNDA PREENTREGA
//barra de busqueda por prompt

console.table(personajes);

//funcion para buscar el nombre del personaje
function encontrarpj(pj) {

    const Encontrado = personajes.find(personaje => personaje.nombre === pj.toLowerCase());

    return Encontrado;
}

//se le dice al usuario que ponga el nombre del personaje que quiera ver
let ingreseNombre = prompt("Ingrese el nombre de una personaje.\nScorpion\nSub zero\nNoob Saibot\nRain\nFujin\nMileena\n0-para salir");

//se muestra el resultado segun lo que puso el usuario
while (ingreseNombre != 0) {

    if (encontrarpj(ingreseNombre) != undefined) {
        console.log(encontrarpj(ingreseNombre));
    } else {
        console.log("nombre de personaje erróneo");
    }

    //se le vuelve a preguntar
    ingreseNombre = prompt("Ingrese el nombre de una personaje.\nScorpion\nSub zero\nNoob Saibot\nRain\nFujin\nMileena\n0-para salir");
}








//ESTO ES DE LA PRIMER PRE ENTREGA 



/*let todosLosPersonajes = "";

//muestra los personajes que hay para ver su historia
let personaje = prompt("Selecciona el número del personaje que quieras para ver su historia.\n1-Scorpion\n2-Sub-zero\n3-Noob Saibot\n4-Rain\n5-Fujin\n6-Mileena\n0-Para salir");

//te muestra la historia del personaje seleccionado
while (personaje != "0") {
    switch (personaje) {
        case "1":
            alert("Gran maestro Scorpion de los Shirai Ryu. Cegado por la furia, Hanzo Hasashi movió mar y montaña para vengar a su familia y a su clan sin descansar hasta acabar con su asesino: Quan Chi. Ahora lidera un nuevo Shirai Ryu para vengar a aquellos que no pueden hacerlo por sí mismos.");
            mostrarPersonajesVistos("Scorpion");
            break;
        case "2":
            alert("Gran Maestro del clan Lin Kuei. Kuai Liang venció a la muerte para redimir a su clan por el mal cometido a manos de Sektor y los cibernéticos Lin Kuei. Tras ello, reconstruyó el clan Lin Kuei y pactó la paz con su rival, el clan Shirai Ryu. Ahora busca poner fin al historial de pecados de los Lin Kuei.");
            mostrarPersonajesVistos("Sub-zero");
            break;
        case "3":
            alert("La sombra de Netherrealm. Noob Saibot era conocido en vida como Sub-Zero. Asesinado injustamente por Scorpion, fue resucitado por Quan Chi y le fueron concedidos poderes sobre la oscuridad, pero como esclavo de Quan Chi. Ahora Quan Chi ha muerto y Noob Saibot puede finalmente reclamar el honor que le fue arrebatado.");
            mostrarPersonajesVistos("NoobSaibot");
            break;
        case "4":
            alert("Como huérfano, Rain se unió al ejército edeniano. Su genio estratégico le trajo un ascenso rápido, el cual usó para descubrir que era el hijo bastardo del dios Argus, protector de Edenia. Sabiendo que es un semidiós, Rain lucha por su lugar entre los dioses de Edenia.");
            mostrarPersonajesVistos("Rain");
            break;
        case "5":
            alert("Fujin, dios del viento, sirve a los Dioses Antiguos junto con su hermano Raiden. Juntos son los protectores de Earthrealm. Afable y alegre, es experto en estimular la capacidad innata de bondad y heroísmo de la gente para que estas cualidades triunfen sobre las fuerzas del odio y la tiranía. Fujin cree que los mejores días de Earthrealm aún están por llegar, y lucha por garantizar ese gran porvenir.");
            mostrarPersonajesVistos("Fujin");
            break;
        case "6":
            alert("Mileena es el producto de los diabólicos experimentos de clonación de Shang Tsung: la mezcla perfecta de la ferocidad tarkatana con la gracia atlética de Kitana. Al ser transportada al futuro por Kronika descubrió su trágico destino. Sus enemigos deben someterse o morirán.");
            mostrarPersonajesVistos("Mileena");
            break;
        default:
            alert("El número de personaje que seleccionaste no existe");
            break;
    }

    //te muestra de nuevo los personajes para que puedas ver la historia de los demas
    personaje = prompt("Selecciona el número del personaje que quieras para ver su historia.\n1-Scorpion\n2-Sub-zero\n3-Noob Saibot\n4-Rain\n5-Fujin\n6-Mileena\n0-Para salir");
    
}

//te muestra todos los personajes que has visto
alert("Los personajes que has visto son "+todosLosPersonajes)

//va llevando la cuenta de los personajes que vas viendo
function mostrarPersonajesVistos(personajeVisto) {
    todosLosPersonajes = todosLosPersonajes + ", " + personajeVisto;

    console.log(todosLosPersonajes);
}*/