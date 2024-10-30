// Verifica la edad del usuario para que pueda interactuar con la plataforma
function verificarEdad(edad) {
    if (edad >= 18) {
        console.log("Puede comprar NFT");
        return true; // Devuelve true si la edad es mayor o igual a 18
    } else {
        console.log("No puede comprar NFT");
        return false; // Devuelve false si la edad es menor a 18
    }
}

// Promoción de la plataforma - algoritmo usando un ciclo while
// Uso while porque necesito que la condición se verifique antes de ejecutar el código
function calcularPrecio(cantidadNFT) {
    let precioUnitario = 100;
    let precioTotal = 0;
    let nftRestantes = cantidadNFT;
    while (nftRestantes >= 3) {
        precioTotal += 3 * precioUnitario * 0.9;
        nftRestantes -= 3;
    }
    precioTotal += nftRestantes * precioUnitario;
    console.log("El precio total es: " + precioTotal);
}

const edadUsuario = prompt("Ingrese su edad");
if (verificarEdad(parseInt(edadUsuario, 10))) { 
    const cantidadNFT = prompt("Ingrese la cantidad de NFT a comprar");
    calcularPrecio(parseInt(cantidadNFT, 10));
}