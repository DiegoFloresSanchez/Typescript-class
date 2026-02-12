"use strict";
// propiedades "Readonly"
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    ID;
    nombre;
    precio;
    constructor(ID, nombre, precio) {
        this.ID = ID;
        this.nombre = nombre;
        this.precio = precio;
    }
    actualizarPrecio(nuevoPrecio) {
        this.precio = nuevoPrecio;
        //this.ID = 1233;     //Error: precio no puede cambiar
    }
}
const producto = new Producto(1, "PS5", 1300);
console.log(producto.ID);
producto.actualizarPrecio(1150);
console.log(producto);
console.log(producto.precio);
