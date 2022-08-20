const isIntersecting = (entry) => {
    return entry.isIntersecting 
};

const loadImage = (entry) => {

    //imagen.src = `https://randomfox.ca/images/${url()}.jpg`;

    const nodo = entry.target 
    observer.unobserve(nodo)
};
const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
});

 export const registerImage = (imagen) => {
    observer.observe(imagen);
};