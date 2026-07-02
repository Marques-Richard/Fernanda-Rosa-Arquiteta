/* ============================================
   SCROLL REVEAL - CONFIGURAÇÃO MODERNA
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const sr = ScrollReveal({
    distance: '60px',
    duration: 1200,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    reset: false,
    mobile: true,
    viewFactor: 0.02
  });

  // Animações em cascata
  sr.reveal('.grid-conteudo', {
    origin: 'bottom',
    opacity: 0,
    scale: 0.95
  });

  sr.reveal('.grid h1', {
    origin: 'left',
    delay: 200,
    interval: 100
  });

  sr.reveal('.grid h2', {
    origin: 'left',
    delay: 400
  });

  sr.reveal('.grid p', {
    origin: 'left',
    delay: 600
  });

  sr.reveal('.btn', {
    origin: 'bottom',
    delay: 800,
    scale: 0.8
  });

  sr.reveal('.video', {
    origin: 'top',
    opacity: 0,
    delay: 200
  });

  sr.reveal('main ul li', {
    origin: 'bottom',
    interval: 150,
    delay: 100
  });

  sr.reveal('.carrossel', {
    origin: 'right',
    opacity: 0,
    distance: '80px'
  });

  sr.reveal('.slider', {
    origin: 'left',
    opacity: 0,
    distance: '80px'
  });

  sr.reveal('.card', {
    origin: 'bottom',
    interval: 150,
    scale: 0.9
  });

  sr.reveal('.misao', {
    origin: 'bottom',
    opacity: 0,
    scale: 0.95
  });

  sr.reveal('.footer', {
    origin: 'bottom',
    opacity: 0,
    distance: '100px'
  });
});

/* ============================================
   CARROSSEL DE INTERIORES (com autoplay)
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const imagens = document.querySelectorAll('.imagem');
  const total = imagens.length;
  let indexCarrossel = 0;
  let intervalCarrossel;

  function mostrarImagem(i) {
    imagens.forEach(img => img.classList.remove('ativa'));
    imagens[i].classList.add('ativa');
  }

  function nextImage() {
    indexCarrossel = (indexCarrossel + 1) % total;
    mostrarImagem(indexCarrossel);
  }

  function prevImage() {
    indexCarrossel = (indexCarrossel - 1 + total) % total;
    mostrarImagem(indexCarrossel);
  }

  function startAutoplay() {
    stopAutoplay();
    intervalCarrossel = setInterval(nextImage, 5000);
  }

  function stopAutoplay() {
    clearInterval(intervalCarrossel);
  }

  // Botões
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextImage();
      startAutoplay(); // Reinicia o autoplay
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevImage();
      startAutoplay();
    });
  }

  // Pausa no hover
  const carrossel = document.querySelector('.carrossel');
  if (carrossel) {
    carrossel.addEventListener('mouseenter', stopAutoplay);
    carrossel.addEventListener('mouseleave', startAutoplay);
  }

  // Inicia
  if (imagens.length > 0) {
    mostrarImagem(0);
    startAutoplay();
  }
});

/* ============================================
   SLIDER ARQUITETÔNICO (3D)
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  let indexSlider = 0;
  let sliderInterval;

  function atualizarSlider() {
    slides.forEach(slide => {
      slide.classList.remove('active', 'prev', 'next');
    });

    if (slides.length === 0) return;

    slides[indexSlider].classList.add('active');

    const prevIndex = (indexSlider - 1 + totalSlides) % totalSlides;
    const nextIndex = (indexSlider + 1) % totalSlides;

    slides[prevIndex].classList.add('prev');
    slides[nextIndex].classList.add('next');
  }

  function nextSlide() {
    indexSlider = (indexSlider + 1) % totalSlides;
    atualizarSlider();
  }

  function prevSlide() {
    indexSlider = (indexSlider - 1 + totalSlides) % totalSlides;
    atualizarSlider();
  }

  function startSliderAutoplay() {
    stopSliderAutoplay();
    sliderInterval = setInterval(nextSlide, 4000);
  }

  function stopSliderAutoplay() {
    clearInterval(sliderInterval);
  }

  // Botões
  const nextBtnSlider = document.querySelector('.next-slider');
  const prevBtnSlider = document.querySelector('.prev-slider');

  if (nextBtnSlider && prevBtnSlider) {
    nextBtnSlider.addEventListener('click', () => {
      nextSlide();
      startSliderAutoplay();
    });

    prevBtnSlider.addEventListener('click', () => {
      prevSlide();
      startSliderAutoplay();
    });
  }

  // Pausa no hover
  const sliderContainer = document.querySelector('.slider');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopSliderAutoplay);
    sliderContainer.addEventListener('mouseleave', startSliderAutoplay);
  }

  if (slides.length > 0) {
    atualizarSlider();
    startSliderAutoplay();
  }
});

/* ============================================
   HEADER - ESCONDE/APARECE (melhorado)
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  let lastScroll = 0;
  let ticking = false;

  function handleScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      if (currentScroll > lastScroll) {
        header.classList.add('esconder');
      } else {
        header.classList.remove('esconder');
      }
    } else {
      header.classList.remove('esconder');
    }

    lastScroll = currentScroll;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
      });
      ticking = true;
    }
  }, { passive: true });
});

/* ============================================
   EFEITO DE DIGITAÇÃO (otimizado)
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const elemento = document.querySelector('h2.hero-title');
  if (elemento) {
    const texto = elemento.textContent;
    elemento.textContent = '';
    let i = 0;

    function digitar() {
      if (i < texto.length) {
        elemento.textContent += texto.charAt(i);
        i++;
        setTimeout(digitar, 50);
      }
    }

    // Inicia a digitação após um delay
    setTimeout(digitar, 500);
  }
});