function escrita(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';

    textoArray.forEach((letra, i) => {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 80 * i)
    });
}

const animacao = document.querySelector('h2');
escrita(animacao);

window.sr = ScrollReveal({ reset: true });

sr.reveal('.grid-conteudo', { duration: 3000 });
/*sr.reveal('.video', {duration: 6000});
sr.reveal('.grid-equipe', {rotate: {x:0, y:100, z:0}, duration: 6000});*/


/*base js do carrosel*/
let indexCarrossel  = 0;
const imagens = document.querySelectorAll(".imagem");
const total = imagens.length;

function mostrarImagem(i) {
    imagens.forEach(img => img.classList.remove("ativa"));
    imagens[i].classList.add("ativa");
}

document.querySelector(".next").addEventListener("click", () => {
    indexCarrossel = (indexCarrossel + 1) % total;
    mostrarImagem(indexCarrossel);
});

document.querySelector(".prev").addEventListener("click", () => {
    indexCarrossel = (indexCarrossel - 1 + total) % total;
    mostrarImagem(indexCarrossel);
});

/*deixar rodando sozinho:*/
setInterval(() => {
    indexCarrossel = (indexCarrossel + 1) % total;
    mostrarImagem(indexCarrossel);
}, 6000); // troca a cada 4 segundos


document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next-slider");
    const prevBtn = document.querySelector(".prev-slider");

    let indexSlider = 0;

    function atualizarSlider() {
        slides.forEach(slide => {
            slide.classList.remove("active", "prev", "next");
        });

        if (slides.length === 0) return;

        slides[indexSlider].classList.add("active");

        let prevIndex = (indexSlider - 1 + slides.length) % slides.length;
        let nextIndex = (indexSlider + 1) % slides.length;

        slides[prevIndex].classList.add("prev");
        slides[nextIndex].classList.add("next");
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => {
            indexSlider = (indexSlider + 1) % slides.length;
            atualizarSlider();
        });

        prevBtn.addEventListener("click", () => {
            indexSlider = (indexSlider - 1 + slides.length) % slides.length;
            atualizarSlider();
        });
    }

    atualizarSlider();
});


