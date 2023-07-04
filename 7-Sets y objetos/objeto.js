let objeto = {
    nombre: 'Andres',
    apellido: 'Castillo',
    edad: 18,
    altura: 1.78,
    eresDesarrolador: true
};

let edad = objeto.edad;

let lista = [
    objeto,
    {
        nombre: 'Carlos',
        apellido: 'Pedro',
        edad: 28,
        altura: 3.58,
        eresDesarrolador: true
    },
    {
        nombre: 'Pepito',
        apellido: 'Ruiz',
        edad: 16,
        altura: 1.98,
        eresDesarrolador: true
    }
];

let listaN = lista.sort((a, b) => a.edad - b.edad);
console.log(listaN);

