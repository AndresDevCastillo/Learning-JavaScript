let hoy = new Date;

let nacimiento = new Date("2004-12-03");
console.log(nacimiento);

let validar = (hoy > nacimiento);
console.log(validar);

let dia = nacimiento.getDay();
console.log(dia);

let mes = nacimiento.getMonth();
console.log(mes);

let anio = nacimiento.getFullYear();
console.log(anio);
