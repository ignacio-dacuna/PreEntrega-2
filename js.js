
const listaDeTareas = [];


function agregarTarea() {
    const titulo = prompt("Ingrese la tarea: ");
    const hora = prompt("A que hora vas a ir: ");

    const nuevaTarea = {
        titulo: titulo,
        hora: hora
    };

    listaDeTareas.push(nuevaTarea);
}

function mostrarTareas() {
    let lista = "Lista de tareas:\n";
    listaDeTareas.forEach((tarea, index) => {
        lista += `${index + 1}. ${tarea.titulo}: ${tarea.hora}\n`;
    });

    alert(lista);
}


let opcion;
do {
    opcion = prompt("Seleccione una opción:\n1. Agregar Tarea\n2. Mostrar Tareas\n3. Salir");

    switch (opcion) {
        case "1":
            agregarTarea();
            break;
        case "2":
            mostrarTareas();
            break;
        case "3":
            alert("¡Hasta luego!");
            break;
        default:
            alert("Opción no válida.");
    }
} while (opcion !== "3");

