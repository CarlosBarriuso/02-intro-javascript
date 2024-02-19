// Desestructuracion

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

/* const { edad, clave, nombre, } = persona;

console.log (nombre);
console.log(edad);
console.log(clave); */

/* const retornaPersona = (usuario) => {
    const { edad, clave, nombre } = usuario;

    console.log( edad, clave, nombre );
}
// Se puede acceder a las propiedades del objeto usando la desestructuración
//además se pueden poner valores por defecto, ejemplo rango
const retornaPersona2 = ({ nombre, edad, rango = 'Capitan'}) => {
    console.log( nombre, edad, rango );
}
retornaPersona ( persona ); */

//Desestructuracion en el argumento
//Extaer 
const useContext = ({ clave, nombre, edad, rango = 'General'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.234,
            lng: -12.657
        }
    }
}
//Cuando queremos extraer propiedades de un objeto anidado
//se usa 'objeto:{propiedades}
const { nombreClave, anios, latlng:{lat, lng} } = useContext( persona );

console.log(nombreClave, anios);
console.log( lat, lng );