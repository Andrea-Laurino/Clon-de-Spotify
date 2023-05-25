const topBar = document.querySelector('.topbar');

// Cambiar opacidad con Scroll
window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		topBar.classList.add('transparent');
	} else {
		topBar.classList.remove('transparent');
	}
});

// Nueva variable para almacenar altura del Topbar
let topbarHeight = topBar.offsetHeight;
// Añadimos un paddingTop basado en la altura al main-content o el contenido principal
const mainContent = document.querySelector('.main-content');
mainContent.style.paddingTop = `${topbarHeight + 20}px`;


/* BOTON PLAY */

const containerConcentracion = document.querySelectorAll(".card-concentracion")
const containerSpotifyPlaylists = document.querySelectorAll(".card-spotify-playlists")

//funcion q se repite

const createButton = card =>{
    //crear boton
    const button = document.createElement("button")
    button.innerHTML = '<i class="fa-solid fa-play"></i>'

    //agregar el btn al hijo
    card.appendChild(button)

    //ocultar btn 
    button.style.display = 'none'
    button.classList.add("btn-play")

    //agregamos evento hover al elemnto, cuando mouse entra o sale
    card.addEventListener('mouseover', () => {
        button.style.display = 'block';
    })
    
    card.addEventListener('mouseout', () => {
        button.style.display = 'none';
    })
}
    // Usamos la función en las dos filas de contenedores
containerConcentracion.forEach (card => {
    createButton(card)
});

containerSpotifyPlaylists.forEach (card => {
    createButton(card)
});

