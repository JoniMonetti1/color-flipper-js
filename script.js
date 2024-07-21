//Funcion para crear un hexadecimal random
let randomHex = () => {
    let random = '#';
    for (let i = 0; i < 6; i++) {
        const randomNum = Math.floor(Math.random() * 16);
        random += randomNum.toString(16);
    }
    return random;
}

//arreglo de colores para el modo de seleccion simple
const colors = ["green", "red", "yellow", "rgba(133, 122, 200)", "lightgreen", "#f15025"];

//Funcion para elegir un color aleatoriamente de la lista de colores
let simpleRandomColor = () => {
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

//obteniedo el elemento div donde se establece el color
const background = document.getElementById('background');

//obteniedo el elemento span donde se establece el nombre del color
const colorName = document.getElementById('colorName');

//obteniendo los elementos p del nav para verificar el modo seleccionado
const simpleMode = document.getElementById('simple-mode');
const hexMode = document.getElementById('hex-mode');

//Funcion para cambiar el modo activo de los modos
const setActive = (mode) => {
    if (mode === 'simple') {
        simpleMode.classList.add('active');
        hexMode.classList.remove('active');
    } else {
        simpleMode.classList.remove('active');
        hexMode.classList.add('active');
    }
}

//añadir un escuchador de eventos que escucha cuando se hace click y añade modo activo a ese elemento clickeado
simpleMode.addEventListener('click', () => setActive('simple'));
hexMode.addEventListener('click', () => setActive('hex'));

//funcion para cambiar el color al hacer click en el botón dependiendo del modo que este seleccionado
let flipColor = () => {
    let color = '';
    //verificar que modo esta seleccionado
    //si el modo es simple usar simpleRandomColor sino usar randonHex
    if (simpleMode.classList.contains('active')) {
        color = simpleRandomColor();
    } else {
        color = randomHex();
    }

    //agregar el color al fondo 
    background.style.backgroundColor = color;

    //agregamos el nombre del color al span
    colorName.textContent = color;
}

//llamamos la función de elegir color al cargar la página
flipColor();