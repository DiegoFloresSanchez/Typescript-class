"use strict";
// Parametros funcionales
Object.defineProperty(exports, "__esModule", { value: true });
function saludar(nombre, apellido) {
    if (apellido) {
        return `Hola ${nombre} ${apellido}`;
    }
    else {
        return `Hola ${nombre}`;
    }
}
console.log(saludar('Diego'));
console.log(saludar('Diego', 'Flores'));
