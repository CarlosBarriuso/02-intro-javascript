

const persona = {
    nombre: 'Tony',
    apellido: 'Manero',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 487653,
        lat: 5674,
        lng: 1232
    }
};

// console.table( {persona});
console.log( {persona});

//Para hacer un clon de un objeto se usa el operador spread ...
const persona2 = {...persona};
persona2.nombre = 'Sebas';

console.log (persona);
console.log(persona2);