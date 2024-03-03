
// Arreglos en JS

//const arreglo = new Array();
const arreglo = [1,2,3,4];

// Al usar el método push, modificamos el array original
/* arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);
 */
// Para crear un nuevo arreglo y añadirle un nuevo valor se usa el operador spread ...
let arreglo2 = [ ...arreglo, 5];

// Una funcion que no tiene un return explicito siempre devuelve undefined
const arreglo3 = arreglo2.map( function(numero){
    return numero *2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

// Un callback es una función que se ejecuta dentro de un método