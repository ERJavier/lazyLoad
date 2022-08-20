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

const registerImage = (imagen) => {

}