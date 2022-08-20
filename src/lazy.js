const isIntersecting = (entry) => {

    return entry.isIntersecting 
}

const accion = () => {
    
}
const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(accion)
})

 export const registerImage = (imagen) => {
    observer.observe(imagen);
};