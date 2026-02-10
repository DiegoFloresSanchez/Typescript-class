"use strict";
// funciones con parammetros determinados
Object.defineProperty(exports, "__esModule", { value: true });
function calcularDescuento(precio, descuento = 0.1) {
    return precio - (precio * descuento);
}
console.log(calcularDescuento(100));
console.log(calcularDescuento(100, 0.2));
