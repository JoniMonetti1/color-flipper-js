let randomHex = () => {
    let random = '#';
    for (let i = 0; i < 6; i++) {
        const randomNum = Math.floor(Math.random() * 16);
        random += randomNum.toString(16);
    }
    return random;
}

const background = document.getElementById('background');
const colorName = document.getElementById('colorName');

let flipColor = () => {
    //obtener el color random
    const color = randomHex();

    //agregar el color al fondo 
    background.style.backgroundColor = color;

    //agregamos el nombre del color al span
    colorName.textContent = color;
}

//llamamos la función al cargar la página
flipColor();