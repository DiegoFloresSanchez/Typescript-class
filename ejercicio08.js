"use strict";
// funcines flecha y anonimas
Object.defineProperty(exports, "__esModule", { value: true });
// funciones anonimas
let multiplicar = function (a, b) {
    return a * b;
};
// funcion flecha
let multplicarFlecha = (a, b) => a * b;
console.log(multiplicar(3, 5));
console.log(multplicarFlecha(3, 5));
