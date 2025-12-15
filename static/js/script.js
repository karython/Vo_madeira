document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".banner-carousel img");
    let index = 0;

    function changeImage() {
      // Remove a classe da imagem atual
      images[index].classList.remove("active");

      // Incrementa o índice
      index = (index + 1) % images.length;

      // Adiciona a classe na nova imagem
      images[index].classList.add("active");
    }

    // Troca a cada 5 segundos
    setInterval(changeImage, 3000);
  });



// ==================================================================================================



document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".foto-quiosque");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 0;

  // Função para abrir o lightbox
  function openLightbox(index) {
    lightbox.classList.add("show");
    lightboxImg.style.opacity = "0";
    setTimeout(() => {
      lightboxImg.src = images[index].src;
      lightboxImg.style.opacity = "1";
    }, 100);
    currentIndex = index;
  }

  // Função para fechar com fade-out
  function closeLightbox() {
    lightbox.classList.add("fade-out");
    setTimeout(() => {
      lightbox.classList.remove("show", "fade-out");
    }, 400); // mesmo tempo do transition do CSS
  }

  // Abre ao clicar na imagem
  images.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
  });

  // Fecha no botão "X"
  closeBtn.addEventListener("click", closeLightbox);

  // Fecha ao clicar fora da imagem
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Botão anterior
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openLightbox(currentIndex);
  });

  // Botão próximo
  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    openLightbox(currentIndex);
  });

  // Fecha com tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
  });
});







/* JS para animaçoes do site */

 const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right, .animate-blur').forEach(el => {
    observer.observe(el);
  });





/* JS para abrir menu da nav no mobile */

const menuIcon = document.getElementById("menu-icon");
const navLista = document.querySelector(".nav-lista");
const icon = menuIcon.querySelector("i");
const overlay = document.getElementById("overlay");

menuIcon.addEventListener("click", () => {
  navLista.classList.toggle("active");
  overlay.classList.toggle("active");

  icon.classList.toggle("bx-menu");
  icon.classList.toggle("bx-x");
});

overlay.addEventListener("click", () => {
  navLista.classList.remove("active");
  overlay.classList.remove("active");

  icon.classList.remove("bx-x");
  icon.classList.add("bx-menu");
});








document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth <= 480;

  if (isMobile) {
    document.querySelectorAll('.blur-mobile-only').forEach(el => {
      el.classList.remove('animate-blur');
    });
  }
});




/* Scroll Suave da Pagina */
 document.addEventListener('DOMContentLoaded', function () {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    });

