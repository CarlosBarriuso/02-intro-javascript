import { heroes } from "./data/heroes";
//import heroes, { owners } from './data/heroes';

const getHeroeById = (id) => {
    return heroes.find((heroe)=> heroe.id === id);
}
console.log( getHeroeById(2) );

const getHeroesByOwner = (owner) => {
    return heroes.filter((heroes)=> heroes.owner === owner);
}
console.log( getHeroesByOwner('Marvel') );
console.log( getHeroesByOwner('DC'));

//Para ver los distintos tipos de exportación ver el archivo heroes.js