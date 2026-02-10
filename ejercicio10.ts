// funciones con parametros variables (rest)

function sumarTodos (...numeros: number []): number {
    return numeros.reduce ( (total, num) =>  total + num, 0);
}

console.log (sumarTodos(1,2,3,4,5,6,7,8,9));
console.log (sumarTodos(10,20));