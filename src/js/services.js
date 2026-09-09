/* src/js/services.js */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initServices() {
  
  // 1. Prepara o Efeito de Máquina de Escrever corrigindo a quebra de linha
  const descElements = document.querySelectorAll("[data-typewriter]");
  
  descElements.forEach(el => {
    const text = el.innerText;
    el.innerHTML = ""; 
    
    text.split("").forEach(char => {
      if (char === " ") {
        // Usa espaço real do navegador para permitir a quebra de linha automática (evita scroll horizontal)
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
  gsap.from(".services-title", {
    scrollTrigger: {
      trigger: ".services-section",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // 3. Animação Individual (Roleta Numérica + Texto)
  const items = document.querySelectorAll(".service-item");
  
  items.forEach((item) => {
    const numberEl = item.querySelector(".service-number");
    const title = item.querySelector(".service-name");
    const chars = item.querySelectorAll(".service-desc span"); // Pega apenas as letras visíveis, ignorando os nós de texto de espaço

    const targetVal = parseInt(numberEl.innerText, 10); 
    const counterObj = { val: 100 }; 

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    // Contador da roleta de 10 até o alvo
    tl.to(counterObj, {
      val: targetVal,
      duration: 1.2,
      ease: "power2.out",
      roundProps: "val",
      onUpdate: () => {
        numberEl.innerText = counterObj.val < 10 ? "0" + counterObj.val : counterObj.val;
      }
    })
    // Roleta desce
    .from(numberEl, {
      yPercent: -100,
      duration: 1.2,
      ease: "back.out(1.2)"
    }, "<")
    
    // Título surge
    .from(title, {
      x: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.6")
    
    // Texto é "digitado" sem causar overflow
    .to(chars, {
      opacity: 1,
      duration: 0.01,
      stagger: 0.01,
      ease: "none"
    }, "-=0.4");
  });
}