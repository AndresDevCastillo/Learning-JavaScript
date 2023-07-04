function alwaysTrue() {
    return true;
}


async function espera() {

    console.log("me ejecute")

    setTimeout(() => {
        console.log("Espere 5 segundos")
    }, "5000");
}

espera();

function* generateS() {
    let id = 0
    while (true) {
        id = id + 2
        yield id
        console.log(id)
        if (id >= 100) {
            return
        }

    }
}


const gene = generateS();

console.log(gene.next())
console.log(gene.next())