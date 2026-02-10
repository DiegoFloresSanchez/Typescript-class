"use strict";
// sobrecarga de funciones
// declaración de sobrecargas
Object.defineProperty(exports, "__esModule", { value: true });
// implementacion real
// The actual implementation
function combinar(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
}
// TypeScript knows this is a number
console.log(combinar("Saludos", "a todos"));
console.log(combinar(30, 20));
