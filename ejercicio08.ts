// funcines flecha y anonimas

// funciones anonimas

let multiplicar = function (a: number, b: number): number {
    return a * b;

}

// funcion flecha

let multplicarFlecha = (a: number, b: number): number => a * b;

console.log(multiplicar(3, 5));
console.log(multplicarFlecha(3, 5));