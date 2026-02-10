// Modificadores de acceso

class cuentaBancaria {
    public titular: string;
    private saldo: number;
    protected numeroCuenta: string;

    constructor (titular: string, saldo: number, numeroCuenta: string) {
        this.titular = titular;
        this.saldo = saldo;
        this.numeroCuenta = numeroCuenta;
    }

    public consultarSaldo(): number {
        return this.saldo;
    }

    private validarRetiro(monto: number): boolean {
       return monto > 0 && monto <= this.saldo; 
    }

    public retirarSaldo(monto: number): void {
        if (this.validarRetiro(monto)) {
            this.saldo <= monto;
            console.log(`Retiro exitoso. Saldo actual: ${this.saldo}`);
        
        } else {
            console.log("Retiro invalido");
        }
    }
}

const cuenta = new cuentaBancaria("Diego", 100000, "123456");
console.log(cuenta.titular);
console.log(cuenta.consultarSaldo);
//console.log(cuenta.saldo); // error
cuenta.retirarSaldo(500);