//suma y resta si usamos un array con incluso mas de 2 elementos:
console.log("Si es un array:\n");

const suma = (numeros) =>
  numeros.reduce((acu, num) => acu += num);

const resta = (numeros) =>
  numeros.reduce((acu, num) => acu -= num);

console.log(`Suma de elementos de un array [6,6]: ${suma([6, 6])}`);

console.log(`Resta de elementos de un array [8,4]: ${resta([8, 4])}`);

//de los anteriores principios partimos para obtener multiplicacion y division

console.log("\nSi son elementos:\n");

//pero antes obtenemos las funciones para suma y resta funcional ya que las usare en la multiplicacion y division:

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;

//multiplicacion y division:

const multiplicar = (a, b) => [...Array(a)].reduce(acu => sumar(acu, b), 0);

const dividir = (a, b) =>
  b == 0 ? 'Indeterminado' :
    [...Array(a).keys()].reduce((acu, num) =>
      multiplicar(num, b) <= a ? sumar(acu, 1) : acu, -1);

//resultados:

console.log(`la suma de los numeros 6 y 6 es: ${sumar(6, 6)}`);
console.log(`la resta de los numeros 8 y 4 es: ${restar(8, 4)}`);
console.log(`la multiplicacion de los numeros 6 y 4 es: ${multiplicar(6, 4)}`);
console.log(`la division de 40 y 10 es: ${dividir(40, 10)}`);