const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");

menuBtn.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden");

  mobileMenu.classList.toggle("hidden");

  menuBtn.setAttribute("aria-expanded", String(!isOpen));
});

// ANIMAÇÃO DAS SETAS PRANTOS E CANTOS DO CORDEL
document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.getElementById("poema-prev");
    const nextBtn = document.getElementById("poema-next");
    const dots = document.querySelectorAll(".carrossel-dots button");
    const blocoTexto = document.getElementById("poema-texto");
    const blocoAutoria = document.getElementById("poema-autoria");

    // Lista de poesias inéditas e autorais para o projeto
    const poemas = [
        {
            verso: `&ldquo;Na viola do destino<br class="hidden sm:inline">
            A mulher dedilha o som<br class="hidden sm:inline">
            Transformando em poesia<br class="hidden sm:inline">
            A beleza de um dom<br class="hidden sm:inline">
            Bordando a nossa história<br class="hidden sm:inline">
            Com capricho e com tom.&rdquo;`,
            autoria: "&mdash; Herança Cordelista"
        },
        {
            verso: `&ldquo;No verso livre e trocado<br class="hidden sm:inline">
            O sertão ganha outra voz<br class="hidden sm:inline">
            É a fibra feminina<br class="hidden sm:inline">
            Que se levanta e nos traz<br class="hidden sm:inline">
            A coragem guardada em rima<br class="hidden sm:inline">
            Que contagia e traz paz.&rdquo;`,
            autoria: "&mdash; Vozes do Sertão"
        },
        {
            verso: `&ldquo;Feita a pena de cordel<br class="hidden sm:inline">
            A poetisa descreve<br class="hidden sm:inline">
            A bravura de sua gente<br class="hidden sm:inline">
            Com traço forte e leve<br class="hidden sm:inline">
            Eternizando a cultura<br class="hidden sm:inline">
            Para que o tempo não leve.&rdquo;`,
            autoria: "&mdash; Memória e Poesia"
        }
    ];

    let currentIndex = 0;

    function atualizarCarrossel(index) {
        if (index < 0) {
            currentIndex = poemas.length - 1;
        } else if (index >= poemas.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        // Atualiza o HTML das tags com quebras de linha preservadas
        blocoTexto.innerHTML = poemas[currentIndex].verso;
        blocoAutoria.innerHTML = poemas[currentIndex].autoria;

        // Atualiza o estado visual das bolinhas (dots)
        dots.forEach((dot, idx) => {
            if (idx === currentIndex) {
                dot.className = "w-6 h-3 rounded-full border-2 border-neutral-900 bg-[#d97706] transition-colors";
            } else {
                dot.className = "w-3 h-3 rounded-full border-2 border-neutral-900 bg-transparent transition-colors hover:bg-neutral-900";
            }
        });
    }

    // Eventos de clique nas setas
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            atualizarCarrossel(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            atualizarCarrossel(currentIndex + 1);
        });
    }

    // Evento de clique direto nas bolinhas
    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const index = parseInt(e.target.getAttribute("data-index"));
            atualizarCarrossel(index);
        });
    });
});

// ANIMAÇÃO DAS SETAS DE PRANTOS E MEMORIA DOS LEITORES

document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.getElementById("comentario-prev");
    const nextBtn = document.getElementById("comentario-next");
    
    const nomeEl = document.getElementById("comentario-nome");
    const localEl = document.getElementById("comentario-local");
    const tempoEl = document.getElementById("comentario-tempo");
    const textoEl = document.getElementById("comentario-texto");

    // Lista com os comentários do carrossel (podes adicionar quantos quiseres ou puxar do Firebase/Admin)
    const comentarios = [
        {
            nome: "Ana Beatriz",
            local: "João Pessoa - PB",
            tempo: "Há 2 dias",
            texto: "&ldquo;Lindo projeto! É de suma importância dar visibilidade às mulheres que construíram a história do nosso cordel.&rdquo;"
        },
        {
            nome: "Mariana Cavalcanti",
            local: "Campina Grande - PB",
            tempo: "Há 4 dias",
            texto: "&ldquo;Uma iniciativa fantástica da UFPB. O design e o acervo resgatam a verdadeira essência da nossa literatura popular.&rdquo;"
        },
        {
            nome: "Carlos Eduardo",
            local: "Recife - PE",
            tempo: "Há 1 semana",
            texto: "&ldquo;Parabéns a toda a equipa de desenvolvimento e pesquisa. Cada detalhe visual nos transporta para o coração do cordel.&rdquo;"
        }
    ];

    let currentIndex = 0;

    function atualizarComentario(index) {
        if (index < 0) {
            currentIndex = comentarios.length - 1;
        } else if (index >= comentarios.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const atual = comentarios[currentIndex];

        // Atualiza os elementos na tela
        nomeEl.textContent = atual.nome;
        localEl.textContent = atual.local;
        tempoEl.textContent = atual.tempo;
        textoEl.innerHTML = atual.texto;
    }

    // Eventos de clique nas setas laterais
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            atualizarComentario(currentIndex - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            atualizarComentario(currentIndex + 1);
        });
    }
});