/* src/js/cosmus.js */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initCosmus() {
  
  // 1. Gerador do Campo Estrelado (Starfield)
  const starfield = document.getElementById("starfield");
  const starCount = 100; // Quantidade de estrelas

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    
    // Posições, tamanhos e brilhos aleatórios
    const size = Math.random() * 3 + 1; // 1px a 4px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    starfield.appendChild(star);

    // Animação de piscar independente para cada estrela
    gsap.to(star, {
      opacity: Math.random() * .8 + .2,
      duration: Math.random() * 2 + 1,
      repeat: -1,
      yoyo: true,
      delay: Math.random() * 2,
      ease: "sine.inOut"
    });
  }

  // 2. Efeito Máquina de Escrever
  const textElements = document.querySelectorAll("[data-typewriter-cosmus]");
  textElements.forEach(el => {
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

  // 3. Animação de Entrada
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".cosmus-section",
      start: "top 70%",
      toggleActions: "play none none none"
    }
  });

  const header = document.querySelector(".cosmus-brand-header");
  const role = document.querySelector(".cosmus-role");
  const chars = document.querySelectorAll(".cosmus-texts span");
  const btn = document.querySelector(".cosmus-btn");
  const mascots = document.querySelectorAll(".cosmus-mascot");

  tl.from([header, role], {
    y: 30,
    opacity: 0,
    duration: .8,
    stagger: .2,
    ease: "power3.out"
  })
  .to(chars, {
    opacity: 1,
    duration: .01,
    stagger: .005,
    ease: "none"
  }, "-=.4")
  .from(btn, {
    y: 20,
    opacity: 0,
    duration: .6,
    ease: "power2.out"
  }, "-=.2")
  .from(mascots, {
    scale: .8,
    opacity: 0,
    duration: 1,
    stagger: .2,
    ease: "back.out(1.2)"
  }, "-=1");

  // 4. Parallax Mágico (Mascotes + Estrelas)
  if (window.innerWidth > 992) {
    // Fazer os mascotes flutuarem no eixo Y o tempo todo (Idle)
    gsap.to(".mascot-left", { yPercent: -10, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });
    gsap.to(".mascot-right", { yPercent: 10, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: .5 });

    document.addEventListener("mousemove", (e) => {
      const { innerWidth, innerHeight } = window;
      const xPos = (e.clientX / innerWidth - .5) * 2;
      const yPos = (e.clientY / innerHeight - .5) * 2;

      // Parallax dos Mascotes
      gsap.to(".mascot-left", { x: xPos * 40, y: yPos * 20, duration: 1.5, ease: "power2.out" });
      gsap.to(".mascot-right", { x: xPos * -40, y: yPos * -20, duration: 1.5, ease: "power2.out" });
      
      // O campo de estrelas se move suavemente na direção oposta, dando efeito de 3D imersivo!
      gsap.to("#starfield", { x: xPos * -20, y: yPos * -10, duration: 2, ease: "power1.out" });
      
      // O texto central se move muito sutilmente
      gsap.to(".cosmus-content", { x: xPos * 10, y: yPos * 5, duration: 1, ease: "power2.out" });
    });
  }
}