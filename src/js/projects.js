/* src/js/projects.js */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

export function initProjects() {
  
  // 1. Efeito Máquina de Escrever
  const descElements = document.querySelectorAll("[data-typewriter-proj]");
  descElements.forEach(el => {
    const text = el.innerText;
    el.innerHTML = ""; 
    
    text.split("").forEach(char => {
      if (char === " ") {
        el.appendChild(document.createTextNode(" "));
      } else {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0"; 
        el.appendChild(span);
      }
    });
  });

  // 2. Animação do Título
  ScrollTrigger.create({
    trigger: ".projects-section",
    start: "top 60%",
    onEnter: () => document.querySelector(".projects-title").classList.add("reveal"),
    onLeaveBack: () => document.querySelector(".projects-title").classList.remove("reveal")
  });

  // 3. Animação dos Cards, Roleta e Texto
  const cards = document.querySelectorAll(".project-card");
  
  cards.forEach((card) => {
    // Pegando elementos
    const header = card.querySelector(".project-card-header");
    const gallery = card.querySelector(".project-gallery");
    const chars = card.querySelectorAll(".project-desc span");
    const techIcons = card.querySelectorAll(".tech-icons img");
    const numberEl = card.querySelector(".project-number"); // <-- Pegando o número

    // Lógica do Contador
    const targetVal = parseInt(numberEl.innerText, 10); 
    const counterObj = { val: 10 }; // Começa no 10

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Anima o Card inteiro subindo sutilmente (só para dar entrada)
    tl.from(card, {
      y: 30,
      opacity: 0,
      duration: .6,
      ease: "power3.out"
    })
    
    // ANIMAÇÃO DA ROLETA NUMÉRICA (Reinserida)
    .to(counterObj, {
      val: targetVal,
      duration: 1.2,
      ease: "power2.out",
      roundProps: "val",
      onUpdate: () => {
        numberEl.innerText = counterObj.val < 10 ? "0" + counterObj.val : counterObj.val;
      }
    }, "-=.4")
    .from(numberEl, {
      yPercent: -100,
      duration: 1.2,
      ease: "back.out(1.2)"
    }, "<") // Sincroniza a descida com a contagem
    
    // Header e Imagens surgem
    .from([card.querySelector(".project-text"), card.querySelector(".live-project-btn"), gallery], {
      y: 20,
      opacity: 0,
      duration: .6,
      stagger: .1,
      ease: "power2.out"
    }, "-=1") // Inicia um pouco antes da roleta terminar
    
    // Texto é digitado
    .to(chars, {
      opacity: 1,
      duration: .01,
      stagger: .005, 
      ease: "none"
    }, "-=.4")
    
    // Tecnologias surgem
    .from(techIcons, {
      y: 10,
      opacity: 0,
      duration: .4,
      stagger: .1,
      ease: "power2.out"
    }, "-=.2");
  });

  // 4. Lógica do Lightbox Mágico (FLIP)
  const overlay = document.querySelector(".image-zoom-overlay");
  const closeBtn = document.querySelector(".close-zoom-btn");
  const zoomableImages = document.querySelectorAll(".zoomable-img");
  
  let activeImage = null;
  let originalParent = null;

  zoomableImages.forEach(img => {
    img.addEventListener("click", () => {
      const state = Flip.getState(img);
      activeImage = img;
      originalParent = img.parentElement; 
      overlay.appendChild(img);
      overlay.classList.add("active"); 
      Flip.from(state, {
        duration: .6,
        ease: "power3.inOut",
        scale: true, 
      });
    });
  });

  const closeModal = () => {
    if (!activeImage) return;
    const state = Flip.getState(activeImage);
    originalParent.appendChild(activeImage);
    overlay.classList.remove("active"); 
    Flip.from(state, {
      duration: .6,
      ease: "power3.inOut",
      scale: true,
      onComplete: () => {
        activeImage = null;
      }
    });
  };
  
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target !== closeBtn && activeImage) closeModal();
  });
}

// ==========================================
  // 5. ANIMAÇÃO DO CONTADOR EXTRA DE PROJETOS
  // ==========================================
  const counterBadge = document.querySelector(".projects-counter-badge");
  const numberDisplay = document.querySelector(".counter-number");

  if (counterBadge && numberDisplay) {
      const targetNumber = parseInt(numberDisplay.getAttribute("data-target"), 10);
      const fakeObj = { val: 0 };

      // Verifica se é mobile (tela menor que 768px)
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      const tlCounter = gsap.timeline({
          scrollTrigger: {
              trigger: counterBadge,
              start: "top 85%", 
              toggleActions: "play none none none"
          }
      });

      tlCounter.to(counterBadge, {
          y: 0,
          opacity: 1,
          // Se for mobile, demora mais para subir (1.2s) e tem um pequeno atraso (.3s)
          duration: isMobile ? 1.2 : .8,
          delay: isMobile ? .3 : 0, 
          ease: "power3.out"
      })
      .to(fakeObj, {
          val: targetNumber,
          duration: 2,
          ease: "power2.out",
          roundProps: "val",
          onUpdate: () => {
              numberDisplay.innerText = fakeObj.val;
          }
      }, "-=.4");
  }