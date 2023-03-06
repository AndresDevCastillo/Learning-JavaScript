let compras = ['Arroz','Aceite','Carne','Frijos','Lentejas'];
let compras2 = compras.push('Aceite de girasol');
console.log(compras);
let eliminar = compras.pop();
console.log(compras);

let peliculas = [
    Peli1 = {
    titulo: "Jumper",
    director: "Doug Liman",
    fecha: 2008
    },
    Peli2 = {
    titulo: "Titanic",
    director: "James Cameron",
    fecha: 1997
    },
    Peli3 = {
    titulo: "Avengers-Endgame",
    director: "Anthony Russo",
    fecha: 2018
    }

];
console.log(peliculas);
const posterior = peliculas.filter(peliculas => peliculas.fecha >2010);
console.log(posterior);

function Directores(a) {
return a.director;
}

const directores = peliculas.map(Directores);

function titulos(a) {
    return a.titulo;
}
const Titulos = peliculas.map(titulos);

concatenado = directores.concat(Titulos);
console.log(concatenado);

propagacion = [...directores,...Titulos];
console.log(propagacion);

