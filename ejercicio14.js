"use strict";
// Accseros: setters && getters
Object.defineProperty(exports, "__esModule", { value: true });
class Empleado {
    _salario;
    constructor(salario) {
        this._salario = salario;
    }
    get salario() {
        return this.salario;
    }
    set salario(nuevoSalario) {
        if (nuevoSalario < 0) {
            console.log("Error: el salario no puede ser negativo");
        }
        else {
            this._salario = nuevoSalario;
            console.log(`Salario actualizado a ${this._salario}`);
        }
    }
}
const empleado = new Empleado(100000);
console.log(empleado.salario);
empleado.salario = 3000;
empleado.salario = -100;
