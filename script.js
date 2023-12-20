// Elementos html
let divParaLugares = document.getElementById('lugares')

// variables
let lugares

// funcion para mostrar cosas en el html
// o para agregar en el html
function mostrarEnElHtml (arrLugares) {
    // primero vamos a tener que limpiar lo que estaba mostrandose antes
    divParaLugares.innerHTML='';
    // vamos a recorrer el array para poder trabajar con cada uno de los objetos en su interior
    // vamos a mostrar la info en el html
    arrLugares.forEach((itemDeLugares) => {
        divParaLugares.innerHTML += `<div class="lugar">
                                        <h3>Nombre: ${itemDeLugares.name}</h3>
                                        <p>Tipo: ${itemDeLugares.type}</p>
                                    </div>`
    });
}


// Hacer el pedido de la informacion
fetch('https://rickandmortyapi.com/api/location')
.then((data)=>{
    return data.json()
}).then((data)=>{
    // aca como data ya es lo que buscabamos, lo trabajamos como siempre
    lugares = data.results;
    // conseguimos un array de objetos
    // necesito mostrarlo en el html
    mostrarEnElHtml(lugares);
})
.catch((error)=>{
    console.log(error)
})


// Eventos

// funcion que se aplica cuando se lleva a cabo el evento
function filtroPlaneta () {
    let filtrados = lugares.filter((itemDeLugares)=>{
        return itemDeLugares.type==='Planet';
    })
    mostrarEnElHtml (filtrados);
}

// elemento html al que quiero agregarle el evento
let botonFiltroPlaneta = document.getElementById('filtroPlaneta');

// agregamos el evento al elemento html
botonFiltroPlaneta.addEventListener('click',filtroPlaneta);


// Evento para mostrar todos los lugares
function filtroTodo () {
    mostrarEnElHtml(lugares);
}

let botonFiltroTodo = document.getElementById('filtroTodo');

botonFiltroTodo.addEventListener('click',filtroTodo)