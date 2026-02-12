"use strict";
// interfaces
Object.defineProperty(exports, "__esModule", { value: true });
class Automovil {
    marca;
    modelo;
    velocidad = 0;
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    acelerar() {
        this.velocidad += 30;
        console.log(`${this.marca} ${this.modelo} acelra: Velocidad ${this.velocidad}`);
    }
    frenar() {
        this.velocidad = Math.max(0, this.velocidad - 10);
        console.log(`${this.marca} ${this.modelo} acelra: Velocidad ${this.velocidad}`);
    }
}
const auto = new Automovil("Audi", "RSQ8");
auto.acelerar();
auto.acelerar();
auto.acelerar();
auto.acelerar();
auto.frenar();
