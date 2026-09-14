/* src/js/hero.js */
import gsap from "gsap";

export function initHero() {
  const tl = gsap.timeline();

  // 1. Animação de Entrada: Elementos surgindo um por um (stagger manual)
  tl.from(".hero-bg-text", { y: 100, opacity: 0, duration: 1.2, ease: "power3.out" })
    .from(".hero-bottom-text", { y: 50, opacity: 0, duration: 1, ease: "power2.out" }, "-=.8")
    .from(".hero-mascot", { y: 100, opacity: 0, duration: 1, ease: "power3.out" }, "-=.6")
    .from(".hero-desc", { x: -50, opacity: 0, duration: .8, ease: "power2.out" }, "-=.6")
    .from(".hero-btn", { x: 50, opacity: 0, duration: .8, ease: "power2.out" }, "-=.8");

  // 2. Parallax (Movimento com o mouse)
  if (window.innerWidth > 992) {
    document.addEventListener("mousemove", (e) => {
      const { innerWidth, innerHeight } = window;
      
      // Normaliza a posição do mouse entre -1 e 1
      const xPos = (e.clientX / innerWidth - .5) * 2;
      const yPos = (e.clientY / innerHeight - .5) * 2;

      // Movimenta o fundo (Texto Gigante)
      gsap.to(".hero-bg-text", { x: xPos * 40, y: yPos * 20, duration: 1, ease: "power2.out" });
      gsap.to(".hero-bottom-text", { x: xPos * 20, y: yPos * 10, duration: 1, ease: "power2.out" });

      // Movimenta o mascote na direção oposta ao fundo para dar o efeito 3D
      gsap.to(".hero-mascot", { x: xPos * -30, y: yPos * -15, duration: 1, ease: "power2.out" });

      // Textos e botão acompanham o movimento
      gsap.to(".hero-desc", { x: xPos * 15, y: yPos * 5, duration: 1.5, ease: "power2.out" });
      gsap.to(".hero-btn", { x: xPos * 15, y: yPos * 5, duration: 1.5, ease: "power2.out" });
    });
  }
}