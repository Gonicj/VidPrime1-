document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.imagen-pequena');

    imagenes.forEach(imagen => {
        imagen.addEventListener('mousedown', () => {
            imagen.classList.add('imagen-grande');
        });

        imagen.addEventListener('mouseup', () => {
            imagen.classList.remove('imagen-grande');
        });

        // Optional: To handle the case when the mouse leaves the image while still holding down the click
        imagen.addEventListener('mouseleave', () => {
            imagen.classList.remove('imagen-grande');
        });
    });
});
