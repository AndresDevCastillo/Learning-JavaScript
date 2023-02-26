let alturaint = 169; // cm
let alturafloat = 1.692; // mts
let peso = 50.50; //kg
let alturaredondeada = alturafloat.toFixed(1);
console.log(alturaredondeada);
let alturaabajo =   alturafloat.toPrecision(3);
console.log(alturaabajo);
let max = Number.MAX_VALUE;
let max2 = max+1;
console.log(max);
console.log(max2);
if (max == max2 ) {
    console.log("Son iguales");
}
else {
    console.log("No son iguales");
}