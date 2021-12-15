//suma y resta si usamos un array con incluso mas de 2 elementos:
const suma = (numeros) =>
  numeros.reduce((acu, num) => acu += num);

const resta = (numeros) =>
  numeros.reduce((acu, num) => acu -= num);


//de los anteriores principios partimos para obtener multiplicacion y division

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
