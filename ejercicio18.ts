// propiedades "Readonly"

class Producto {
    readonly ID: number;
    nombre: string;
    precio: number;

    constructor(ID: number, nombre: string, precio:number) {
        this.ID = ID;
        this.nombre = nombre;
        this.precio = precio;
    }

    actualizarPrecio(nuevoPrecio: number): void {
        this.precio = nuevoPrecio;
        //this.ID = 1233;     //Error: precio no puede cambiar
    }
}

const producto = new Producto(1, "PS5", 1300);
console.log(producto.ID);
producto.actualizarPrecio(1150);
console.log(producto);
console.log(producto.precio);

