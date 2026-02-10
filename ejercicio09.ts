// sobrecarga de funciones
// declaración de sobrecargas

function combinar (a: string, b: string): string;
function combinar (a: number, b: number): number;

// implementacion real


// The actual implementation
function combinar(a: any, b: any): any {
    
    if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    } else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } 
}

          // TypeScript knows this is a number

console.log (combinar ("Saludos", "a todos"));
console.log (combinar (30, 20));