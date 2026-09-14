/* src/js/formations.js */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initFormations() {
  
  // 1. Efeito Máquina de Escrever (Datas)
  const dateElements = document.querySelectorAll("[data-typewriter-form]");
  dateElements.forEach(el => {
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
    trigger: ".formations-section",
    start: "top 60%",
    onEnter: () => document.querySelector(".formations-title").classList.add("reveal"),
    onLeaveBack: () => document.querySelector(".formations-title").classList.remove("reveal")
  });

  // Animação do subtítulo
  gsap.from(".formations-subtitle", {
    scrollTrigger: {
        trigger: ".formations-section",
        start: "top 60%",
    },
    y: 20,
    opacity: 0,
    duration: .8,
    ease: "power2.out"
  });


  // 3. Animação dos Cards e Conteúdo
  const cards = document.querySelectorAll(".formation-card");
  
  cards.forEach((card) => {
    const status = card.querySelector(".formation-status");
    const logo = card.querySelector(".formation-logo-wrapper");
    const name = card.querySelector(".formation-name");
    const inst = card.querySelector(".formation-institution");
    const chars = card.querySelectorAll(".formation-date span");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    // Card sobe suavemente
    tl.from(card, {
      y: 30,
      opacity: 0,
      duration: .6,
      ease: "power3.out"
    })
    
    // Status e Logo aparecem
    .from([status, logo], {
      y: 20,
      opacity: 0,
      duration: .5,
      stagger: .1,
      ease: "power2.out"
    }, "-=.2")
    
    // Títulos
    .from([name, inst], {
      y: 15,
      opacity: 0,
      duration: .5,
      stagger: .1,
      ease: "power2.out"
    }, "-=.2")

    // Efeito de digitação da data
    .to(chars, {
      opacity: 1,
      duration: .01,
      stagger: .01, 
      ease: "none"
    }, "-=.2");
  });

  // 4. Animação da Área Social no final da seção
  const socialTl = gsap.timeline({
      scrollTrigger: {
          trigger: ".formations-social-area",
          start: "top 90%", // Dispara quando o topo da área estiver 90% na tela
          toggleActions: "play none none none"
      }
  });

  socialTl.from(".social-area-title", {
      y: 20,
      opacity: 0,
      duration: .5,
      ease: "power2.out"
  })
  .from(".social-icons .social-link", {
      y: 20,
      opacity: 0,
      duration: .5,
      stagger: .1,
      ease: "back.out(1.5)"
  }, "-=.3");
}