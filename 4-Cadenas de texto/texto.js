let nombre = "Andres";
let apellido = "Castillo";

let estudiante = `${nombre} ${apellido}`;


let estudianteMayus = estudiante.toUpperCase();

let estudianteMinus = estudiante.toLowerCase();

let NumEstudiante = estudiante.length;

const inicialNombre = nombre.substring(0, 1);

const finalApellido = apellido.substring(apellido.length - 1, apellido.length);


const estudianteSinEspacios = estudiante.replace(/ /g, "");

const nombreEnEstudiante = estudiante.includes(nombre);
