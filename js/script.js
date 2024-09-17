document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});

// Para múltiplos carrosséis
const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
    const carouselImages = carousel.querySelector('.carousel-images');
    const images = carousel.querySelectorAll('.carousel-images img');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');

    let currentIndex = 0;
    const totalImages = images.length;

    function showImage(index) {
        if (index >= totalImages) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalImages - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        showImage(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showImage(currentIndex + 1);
    });
});

// Seleciona o botão
const backToTopButton = document.getElementById('back-to-top');

// Mostra ou oculta o botão conforme o usuário rola
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.opacity = '1';
    } else {
        backToTopButton.style.opacity = '0';
    }
});

// Rola suavemente para o topo quando o botão é clicado
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// JavaScript para carrossel automático
document.addEventListener('DOMContentLoaded', () => {
    const bannerImages = document.querySelector('.banner-images');
    const images = document.querySelectorAll('.banner-images img');
    let currentIndex = 0;
    const totalImages = images.length;
    const interval = 3000; // Tempo entre as trocas de imagem (3 segundos)

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        const offset = -currentIndex * 100;
        bannerImages.style.transform = `translateX(${offset}%)`;
    }

    setInterval(showNextImage, interval);
});
