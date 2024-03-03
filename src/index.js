

const apiKey = 'o7WavhZ9eatw1DYM2tS9gvqxf4bcFbe6';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// petición devuelve una promesa
peticion
    .then( resp =>  resp.json() )
    //resp.json() devuelve una promesa, es una promesa de una promesa (cascada)
    .then( ({data}) =>  {
        console.log(data.images.original.url);
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img ); 
    })
    .catch ( console.warn );