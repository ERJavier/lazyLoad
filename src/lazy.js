const isIntersecting = (entry) => {
    return entry.isIntersecting 
};

const loadImage = (entry) => {

    //imagen.src = `https://randomfox.ca/images/${url()}.jpg`;

    const container = entry.target 

    const imagen = container.firstChild;
    const imgURL = imagen.dataset.src;

    imagen.src = imgURL;

    observer.unobserve(container);
};
const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
});

 export const registerImage = (imagen) => {
    observer.observe(imagen);
};