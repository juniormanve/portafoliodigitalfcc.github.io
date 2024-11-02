document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("Aquí puedes mostrar más información sobre el formato digital.");
    });
});

// JavaScript para el Carrusel
document.querySelectorAll('.carousel').forEach(carousel => {
    const images = carousel.querySelector('.carousel-images');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    let index = 0;

    function updateCarousel() {
        const width = carousel.clientWidth;
        images.style.transform = `translateX(${-index * width}px)`;
    }

    // Función para moverse hacia adelante
    function nextImage() {
        index = (index < images.children.length - 1) ? index + 1 : 0;
        updateCarousel();
    }

    // Función para moverse hacia atrás
    function prevImage() {
        index = (index > 0) ? index - 1 : images.children.length - 1;
        updateCarousel();
    }

    // Eventos para los botones de navegación
    prevButton.addEventListener('click', prevImage);
    nextButton.addEventListener('click', nextImage);

    // Actualiza el tamaño del carrusel al cambiar el tamaño de la ventana
    window.addEventListener('resize', updateCarousel);
});