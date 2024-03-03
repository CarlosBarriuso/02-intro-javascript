// Funciones en JS

/* function saludar( nombre ) {
    return `Hola, ${nombre}`;
} */

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

//Funciones flecha
const saludar2 = (nombre) => {
    return `Hola de nuevo, ${nombre}`;
}
const saludar3 = (nombre) => `Hola, ${nombre}`;
/* 
const getUser = () => {
    return {
        uid:'ABC123',
        userName: 'ElPotato'
    }
} */
//Para que js sepa que se quiere devolver un objeto hay que ponerlo entre parentesis
const getUser = () =>
({
    uid: 'ABC123',
    username: 'El_Torpedo'
})

console.log(saludar('Pepe'));
console.log(saludar2('Manolo'));
console.log(saludar3('Tomas'));

console.log (getUser());

//Tarea
//1. Transformar a una funcion Flecha
//2. Tiene que retornar un objeto implícito
//3. Pruebas
/* function getUsuarioActivo ( nombre ){
    return {
        uid: 'ABC567',
        userbame: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Ramon');
console.log( usuarioActivo ); */
const usuarioActivo2 = (nombre) => ({ uid: 'ABC567', usaername: nombre});

console.log(usuarioActivo2('Eustaquio'));