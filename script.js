// Elementos html
let divParaLugares = document.getElementById('lugares')

// Hacer el pedido de la informacion
fetch('https://rickandmortyapi.com/api/location')
.then((data)=>{
    return data.json()
}).then((data)=>{
    // aca como data ya es lo que buscabamos, lo trabajamos como siempre
    let lugares = data.results;
    // conseguimos un array de objetos
    // vamos a recorrer el array para poder trabajar con cada uno de los objetos en su interior
    lugares.forEach((itemDeLugares) => {
        divParaLugares.innerHTML += `<div class="lugar">
                                        <h3>Nombre: ${itemDeLugares.name}</h3>
                                        <p>Tipo: ${itemDeLugares.type}</p>
                                    </div>`
    });
})
.catch((error)=>{
    console.log(error)
})