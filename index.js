const displayImage = document.querySelector('.display');
const lens = document.querySelector('.lens');
const imgContainer = document.querySelector('.img-container');

imgContainer.addEventListener('mousemove', (e) => {
    const rect = imgContainer.getBoundingClientRect();
    const x = e.clientX - rect.left; // posición X del mouse dentro del contenedor
    const y = e.clientY - rect.top; // posición Y del mouse dentro del contenedor

    // Actualiza la posición del lente
    lens.style.left = `${x}px`;
    lens.style.top = `${y}px`;

    // Cambiar la opacidad de la imagen inferior para mostrarla en el área del lente
    displayImage.style.opacity = '1'; // Haz visible la imagen de abajo
});

imgContainer.addEventListener('mouseleave', () => {
    // Restablece la opacidad al salir
    displayImage.style.opacity = '0'; // Oculta la imagen de abajo
});