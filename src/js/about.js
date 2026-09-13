/* src/js/about.js */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAbout() {
  // 1. Timeline ativada pelo Scroll
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 75%", 
      toggleActions: "play none none none"
    }
  });

  // Título e Textos (Vindo da Esquerda fluidamente)
  tl.from(".about-title", { x: -50, opacity: 0, duration: .8, ease: "power2.out" })
    .from(".about-paragraph", { 
      x: -50, 
      opacity: 0, 
      duration: .8, 
      stagger: .2, 
      ease: "power2.out" 
    }, "-=0.6")
    .from(".about-btn", { y: 30, opacity: 0, duration: .6, ease: "power2.out" }, "-=0.2");

  // Ícones SVG (Vindo de fora da tela girando)
  tl.from(".icon-splash", { x: -200, y: -200, rotation: -45, opacity: 0, duration: 1, ease: "back.out(1.2)" }, "-=1")
    .from(".icon-cubes", { x: 200, y: -200, rotation: 45, opacity: 0, duration: 1, ease: "back.out(1.2)" }, "-= .9")
    .from(".icon-heart", { x: -200, y: 200, rotation: -30, opacity: 0, duration: 1, ease: "back.out(1.2)" }, "-= .8")
    .from(".icon-flower", { x: 200, y: 200, rotation: 30, opacity: 0, duration: 1, ease: "back.out(1.2)" }, "-= .7");

  // 2. Animação Flutuante Contínua (Idle)
  // Salvamos as animações em variáveis para podermos pausá-las no hover
  const float1 = gsap.to(".icon-splash", { yPercent: -15, duration: 2.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
  const float2 = gsap.to(".icon-cubes", { yPercent: 15, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.5 });
  const float3 = gsap.to(".icon-heart", { yPercent: -20, duration: 2.8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1 });
  const float4 = gsap.to(".icon-flower", { yPercent: 20, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.2 });

  // 3. Efeito de Hover nas formas (Igual ao Footer)
  const shapesAbout = document.querySelectorAll(".shape-about");

  shapesAbout.forEach((shape) => {
    shape.addEventListener("mouseenter", () => {
      // Pausa a animação de flutuar
      gsap.killTweensOf(shape, "yPercent");
        
      const randomRot = Math.random() * 90 - 45; 
      const randomScale = Math.random() * 0.3 + 1.2; // Escala um pouco mais no about

      gsap.to(shape, {
        scale: randomScale,
        rotation: randomRot,
        duration: 0.4,
        ease: "back.out(2)"
      });
      
      gsap.to(shape, {
          filter: `hue-rotate(${Math.random() * 180}deg)`,
          duration: 0.3
      });
    });

    shape.addEventListener("mouseleave", () => {
      // Volta a forma e a cor ao normal
      gsap.to(shape, {
        scale: 1,
        rotation: 0,
        filter: "hue-rotate(0deg)",
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
        onComplete: () => {
             // Retoma a animação de flutuar baseada em qual elemento é
             if(shape.classList.contains('icon-splash')) float1.restart();
             if(shape.classList.contains('icon-cubes')) float2.restart();
             if(shape.classList.contains('icon-heart')) float3.restart();
             if(shape.classList.contains('icon-flower')) float4.restart();
        }
      });
    });
  });

  // 4. Parallax com o Mouse
  if (window.innerWidth > 992) {
    document.addEventListener("mousemove", (e) => {
      const { innerWidth, innerHeight } = window;
      const xPos = (e.clientX / innerWidth - 0.5) * 2;
      const yPos = (e.clientY / innerHeight - 0.5) * 2;

      // O Parallax continua funcionando no "x" e "y" reais
      gsap.to(".icon-splash", { x: xPos * 40, y: yPos * 20, duration: 1.5, ease: "power2.out" });
      gsap.to(".icon-cubes", { x: xPos * -30, y: yPos * -25, duration: 1.5, ease: "power2.out" });
      gsap.to(".icon-heart", { x: xPos * 50, y: yPos * -30, duration: 1.5, ease: "power2.out" });
      gsap.to(".icon-flower", { x: xPos * -40, y: yPos * 30, duration: 1.5, ease: "power2.out" });
      
      gsap.to(".about-container", { x: xPos * 10, y: yPos * 5, duration: 1, ease: "power2.out" });
    });
  }
}