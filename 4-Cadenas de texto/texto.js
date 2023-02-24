let nombre = "Andres";
let apellido = "Castillo";

let estudiante = `${nombre} ${apellido}`;


let estudianteMayus = estudiante.toUpperCase();

let estudianteMinus = estudiante.toLowerCase();

let NumEstudiante = estudiante.length;

let inicialNombre = nombre.substring(0, 1);

let finalApellido = apellido.substring(apellido.length - 1, apellido.length);


let estudianteSinEspacios = estudiante.replace(/ /g, "");

let nombreEstudiante = estudiante.includes(nombre);
