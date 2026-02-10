"use strict";
// funciones con parametros variables (rest)
Object.defineProperty(exports, "__esModule", { value: true });
function sumarTodos(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}
console.log(sumarTodos(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(sumarTodos(10, 20));
