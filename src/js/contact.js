/* src/js/contact.js */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initContact() {
  
  // 1. Auto-resize do Textarea
  const tx = document.querySelector("#message");
  if(tx) {
      tx.setAttribute("style", "height:" + (tx.scrollHeight) + "px;overflow-y:hidden;");
      tx.addEventListener("input", OnInput, false);
  }

  function OnInput() {
    this.style.height = 0;
    this.style.height = (this.scrollHeight) + "px";
  }


  // 2. Timeline ativada pelo Scroll
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 75%", 
      toggleActions: "play none none none"
    }
  });

  tl.from(".contact-info > *", { 
      x: -50, opacity: 0, duration: .8, stagger: .2, ease: "power2.out" 
    })
    .from(".form-row", { 
      y: 30, opacity: 0, duration: .6, stagger: .15, ease: "power2.out" 
    }, "-=.4")
    .from(".submit-btn", { 
      y: 20, opacity: 0, duration: .4, ease: "power2.out" 
    }, "-=.2");

  // Animação de entrada dos ícones
  tl.from(".icon-thunder", { x: 200, y: -200, rotation: 45, opacity: 0, duration: 1, ease: "back.out(1.2)" }, "-=1")
    .from(".icon-balloon", { x: -200, y: 200, rotation: -30, opacity: 0, duration: 1, ease: "back.out(1.2)" }, "-=.9");


  // 3. Animação Flutuante Contínua (Idle)
  const floatThunder = gsap.to(".icon-thunder", { yPercent: -15, duration: 2.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
  const floatHeart = gsap.to(".icon-balloon", { yPercent: 20, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: .5 });


  // 4. Parallax com o Mouse
if (window.innerWidth > 992) {
  const parallaxItems = [
    { selector: ".icon-thunder", x: -40, y: -20 },
    { selector: ".icon-balloon", x: 50, y: 30 },
    { selector: ".contact-info", x: 15, y: 5 },
    { selector: ".contact-form-wrapper", x: -10, y: -5 }
  ];

  window.addEventListener("mousemove", (e) => {
    const xPos = (e.clientX / window.innerWidth - 0.5) * 2;
    const yPos = (e.clientY / window.innerHeight - 0.5) * 2;

    parallaxItems.forEach(({ selector, x, y }) => {
      gsap.to(selector, {
        x: xPos * x,
        y: yPos * y,
        duration: 1.2,
        ease: "power2.out",
        overwrite: "auto"
      });
    });
  });
}


  // ==========================================
  // 5. INTERATIVIDADE: HOVER E CLIQUES MÁGICOS
  // ==========================================
  const shapesContact = document.querySelectorAll(".shape-contact");
  const particleContainer = document.getElementById("particle-container");
  
  // Cria o elemento de flash do trovão escondido
  const flashEl = document.createElement("div");
  flashEl.classList.add("flash-effect");
  document.querySelector(".contact-section").appendChild(flashEl);

  // Áudios (Usando URLs genéricas diretas. Você pode trocar pelos seus mp3 locais depois)
  const thunderSound = new Audio("/sound/thunder.mp3");
  const rainSound = new Audio("/sound/rain.mp3");
  const popSound = new Audio("/sound/whistle.mp3");
  
  // Deixa o som da chuva mais curto (só pra brincadeira)
  rainSound.volume = .5;
  thunderSound.volume = .2;
  popSound.volume = .7;

  // Efeito de Hover (Igual About e Footer)
  shapesContact.forEach((shape) => {
    shape.addEventListener("mouseenter", () => {
      if(shape.id === 'btn-thunder') gsap.killTweensOf(shape, "yPercent");
      if(shape.id === 'btn-heart') gsap.killTweensOf(shape, "yPercent");
        
      gsap.to(shape, {
        scale: 1.2,
        rotation: Math.random() * 30 - 15,
        filter: `hue-rotate(${Math.random() * 180}deg)`,
        duration: .3,
        ease: "back.out(2)"
      });
    });

    shape.addEventListener("mouseleave", () => {
      gsap.to(shape, {
        scale: 1,
        rotation: 0,
        filter: "hue-rotate(0deg)",
        duration: .6,
        ease: "elastic.out(1, .4)",
        onComplete: () => {
            if(shape.id === 'btn-thunder') floatThunder.restart();
            if(shape.id === 'btn-heart') floatHeart.restart();
        }
      });
    });
  });

  // Função genérica para criar chuva de partículas
  function createParticleRain(type, color, count, durationSecs) {
      for (let i = 0; i < count; i++) {
          setTimeout(() => {
              const particle = document.createElement("div");
              particle.classList.add("particle");
              
              if(type === 'drop') {
                  // Gota de chuva
                  particle.style.width = "2px";
                  particle.style.height = "25px";
                  particle.style.backgroundColor = color;
                  particle.style.left = `${Math.random() * 100}%`;
              } else if (type === 'heart') {
                  // Mini coraçãozinho
                  particle.innerHTML = "❤️";
                  particle.style.fontSize = `${Math.random() * 15 + 10}px`;
                  particle.style.color = color;
                  particle.style.left = `${Math.random() * 100}%`;
                  // O coração desce rodando
                  gsap.set(particle, { rotation: Math.random() * 360 });
              }

              particleContainer.appendChild(particle);

              // Anima a partícula caindo com GSAP
              gsap.to(particle, {
                  y: window.innerHeight + 100, // Cai até o fim da tela
                  rotation: type === 'heart' ? "+=360" : 0, // Coração roda, chuva não
                  duration: Math.random() * 1 + 1, // Entre 1 e 2 segundos caindo
                  ease: "none",
                  onComplete: () => {
                      particle.remove(); // Limpa do DOM quando sumir
                  }
              });
          }, Math.random() * (durationSecs * 1000)); // Distribui a criação ao longo do tempo
      }
  }

  // --- CLIQUE NO TROVÃO ---
  const btnThunder = document.getElementById("btn-thunder");
  btnThunder.addEventListener("click", () => {
      // Toca áudio
      thunderSound.currentTime = 0;
      thunderSound.play();
      rainSound.currentTime = 0;
      rainSound.play();
      
      // Anima o ícone
      gsap.fromTo(btnThunder, { scale: 1.5, filter: "brightness(2)" }, { scale: 1, filter: "brightness(1)", duration: .5, ease: "bounce.out" });

      // Flash de luz na tela
      gsap.to(flashEl, { opacity: .8, duration: .1, yoyo: true, repeat: 3, onComplete: () => gsap.to(flashEl, {opacity: 0}) });

      // Chove por 3 segundos
      createParticleRain('drop', '#4dc0ff', 150, 3);
      
      // Para o som da chuva após 3 segundos
      setTimeout(() => {
          gsap.to(rainSound, { volume: 0, duration: 1, onComplete: () => rainSound.pause() });
      }, 3000);
  });

  // --- CLIQUE NO CORAÇÃO ---
  const btnHeart = document.getElementById("btn-heart");
  btnHeart.addEventListener("click", () => {
      // Toca áudio
      popSound.currentTime = 0;
      popSound.play();
      
      // Anima o ícone como uma batida de coração
      gsap.fromTo(btnHeart, { scale: 1.6 }, { scale: 1, duration: .6, ease: "elastic.out(1, .3)" });

      // Chove corações por 2 segundos
      createParticleRain('heart', '#ff4d6d', 60, 2);
  });
}