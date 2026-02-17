"use strict";
// Metodos y propieades estáticas
Object.defineProperty(exports, "__esModule", { value: true });
class Matematicas {
    static PI = 3.14159;
    static calcularAreaCirculo(radio) {
        return this.PI * radio ** 2;
    }
    static calcularPerimetroCirculo(radio) {
        return 2 * this.PI * radio;
    }
}
console.log(Matematicas.PI);
console.log(Matematicas.calcularAreaCirculo(5));
console.log(Matematicas.calcularPerimetroCirculo(5));
