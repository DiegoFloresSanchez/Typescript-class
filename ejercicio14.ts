// Accseros: setters && getters

class Empleado {
    private _salario: number;

    constructor (salario: number) {
        this._salario = salario;

    }

    get salario(): number {
        return this.salario;
    }

    set salario(nuevoSalario: number) {
        if (nuevoSalario < 0) {
            console.log("Error: el salario no puede ser negativo");
            
        } else {
            this._salario = nuevoSalario; 
            console.log(`Salario actualizado a ${this._salario}`);
        }
    }
}

const empleado = new Empleado(100000);
console.log(empleado.salario);
empleado.salario = 3000;
empleado.salario = -100;