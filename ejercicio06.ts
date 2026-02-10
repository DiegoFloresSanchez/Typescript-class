// funciones con parammetros determinados

function calcularDescuento(precio: number, descuento: number = 0.1): number {
    return precio - (precio * descuento);
}

console.log(calcularDescuento (100))
console.log(calcularDescuento (100, 0.2))