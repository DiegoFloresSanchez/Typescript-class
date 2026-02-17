"use strict";
// Composición vs herencia
Object.defineProperty(exports, "__esModule", { value: true });
class Motor {
    encender() {
        console.log("Motor encendido");
    }
    apagar() {
        console.log("Motor apagado");
    }
}
class Automovil {
    motor; // composición (todo-parte)
    marca;
    constructor(marca) {
        this.motor = new Motor();
        this.marca = marca;
    }
    arrancar() {
        console.log(`${this.marca} arrancando...`);
        this.motor.encender();
    }
    detener() {
        console.log(`${this.marca} deteniéndose...`);
        this.motor.apagar();
    }
}
const miAuto = new Automovil("Audi RSQ8");
miAuto.arrancar();
miAuto.detener();
