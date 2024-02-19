//Desestructuracion de Arrays

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]);

const [ p1 ] = personajes;
//Para acceder a las posiciones concretas se usan comas
const [, p2 ] = personajes;
const [, , p3] = personajes


console.log(p1);
console.log(p2);
console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
};

const arr = retornaArreglo();
console.log(arr);
// Otra manera
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);


//Tarea
// 1. el primer valor del arreglo se llamara nombre
// 2. el segundo se llamara setNombre
const useState2 = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola viejo') } ];
}
const [nombre, setNombre ] = useState2 ('Goku');

console.log ( nombre );
setNombre();

