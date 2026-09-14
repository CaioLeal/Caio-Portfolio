/* src/js/footer.js */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initFooter() {
  
  // 1. Animação de Entrada
  // Em vez de criar a timeline e pausar, deixamos o ScrollTrigger gerenciar toda a linha do tempo
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer-section",
      start: "top 85%", // Dispara um pouco mais tarde para garantir que a seção apareça
      toggleActions: "play none none none"
    }
  });

  tl.from(".footer-name", {
    y: 50,
    opacity: 0,
    duration: .8,
    stagger: .1,
    ease: "power3.out"
  })
  .from(".info-block", {
    y: 30,
    opacity: 0,
    duration: .6,
    stagger: .2,
    ease: "power2.out"
  }, "-=.4")
  // A animação das formas
  .fromTo(".shape", 
    { scale: 0, rotation: -45, opacity: 0 }, 
    { scale: 1, rotation: 0, opacity: 1, duration: .8, stagger: .1, ease: "back.out(1.5)" }, 
    "-=.2"
  );


  // 2. Interações de Hover Aleatórias (GSAP)
  const shapes = document.querySelectorAll(".shape");

  shapes.forEach((shape) => {
    shape.addEventListener("mouseenter", () => {
      // Cria uma animação única baseada em matemática aleatória para cada hover
      const randomRot = Math.random() * 90 - 45; // -45 a 45 graus
      const randomScale = Math.random() * .3 + 1.1; // 1.1 a 1.4

      gsap.to(shape, {
        scale: randomScale,
        rotation: randomRot,
        duration: .4,
        ease: "back.out(2)"
      });
      
      // Aplicar filtro de cor (Gira a matiz do HUE para mudar a cor da forma)
      gsap.to(shape, {
          filter: `hue-rotate(${Math.random() * 180}deg)`,
          duration: .3
      });
    });

    shape.addEventListener("mouseleave", () => {
      // Volta ao normal quando o mouse sai
      gsap.to(shape, {
        scale: 1,
        rotation: 0,
        filter: "hue-rotate(0deg)",
        duration: .6,
        ease: "elastic.out(1, .4)"
      });
    });
  });
}