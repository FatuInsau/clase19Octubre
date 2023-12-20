// elementos html
let divPersonajes = document.getElementById('personajes');
let botonFiltroTodo = document.getElementById('filtroTodo');
let botonFiltroMujer = document.getElementById('filtroMujer');
let botonFiltroHombre = document.getElementById('filtroHombre');

let todosPersonajes;

// funcion para mostrar elementos en el html
function mostrarEnElHtml (arrPersonajes) {
    divPersonajes.innerHTML=''
    arrPersonajes.forEach((itemPersonaje) => {
        divPersonajes.innerHTML += `<div class="personaje">
                                        <h3>Nombre: ${itemPersonaje.name}</h3>
                                        <img src=${itemPersonaje.image}>
                                        <p>Genero: ${itemPersonaje.gender}</p>
                                    </div>`        
    });
}

// pedido de fetch (pedimos info)
fetch('https://rickandmortyapi.com/api/character')
.then((data)=>{
    return data.json()
}).then((data)=>{
    todosPersonajes = data.results;
    mostrarEnElHtml(todosPersonajes)
})

// filtros

function filtroMujer() {
    let mujeres = todosPersonajes.filter((itemPersonaje)=>{
        return itemPersonaje.gender==='Female';
    })
    mostrarEnElHtml(mujeres);
}

function filtroHombre(){
    let hombres = todosPersonajes.filter((itemPersonaje)=>{
        return itemPersonaje.gender==='Male';
    })
    mostrarEnElHtml(hombres);
}

function filtroTodo(){
    mostrarEnElHtml(todosPersonajes);
}

// eventos
botonFiltroMujer.addEventListener('click',filtroMujer);
botonFiltroHombre.addEventListener('click', filtroHombre);
botonFiltroTodo.addEventListener('click',filtroTodo)