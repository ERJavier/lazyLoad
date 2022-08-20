const max = 122;
const min = 1;
const url = () => Math.floor(Math.random() * (max - min)) + min;

const createImageNode = () =>{
    const container = document.createElement("div");
    container.className = "p-4";

    const imagen = document.createElement("img");
    imagen.className = "mx-auto";
    imagen.width = '320';
    imagen.src = `https://randomfox.ca/images/${url()}.jpg`;

    container.appendChild(imagen)

    return container;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById("images");

const addButton = document.querySelector('button');


mountNode.appendChild(nuevaImagen);