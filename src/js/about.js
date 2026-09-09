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
  tl.from(".about-title", { x: -50, opacity: 0, duration: 0.8, ease: "power2.out" })
    .from(".about-paragraph", { 
      x: -50, 
      opacity: 0, 
      duration: 0.8, 
      stagger: 0.2, 
      ease: "power2.out" 
    }, "-=0.6")
    .from(".about-btn", { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.2");

  // Ícones 3D (Vindo de fora da tela girando)
  tl.from(".icon-splash", { x: -200, y: -200, rotation: -45, opacity: 0, duration: 1, ease: "back.out(1.2)" }, "-=1")
    .from(".icon-cubes", { x: 200, y: -200, rotation: 45, opacity: 0, duration: 1, ease: "back.out(1.2)" }, "-=0.9")
    .from(".icon-heart", { x: -200, y: 200, rotation: -30, opacity: 0, duration: 1, ease: "back.out(1.2)" }, "-=0.8")
    .from(".icon-flower", { x: 200, y: 200, rotation: 30, opacity: 0, duration: 1, ease: "back.out(1.2)" }, "-=0.7");

  // 2. Animação Flutuante Contínua (Idle)
  // Usamos yPercent e tempos (duration/delay) diferentes para parecer um movimento orgânico
  gsap.to(".icon-splash", { yPercent: -15, duration: 2.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
  gsap.to(".icon-cubes", { yPercent: 15, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.5 });
  gsap.to(".icon-heart", { yPercent: -20, duration: 2.8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1 });
  gsap.to(".icon-flower", { yPercent: 20, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.2 });

  // 3. Parallax com o Mouse
  if (window.innerWidth > 992) {
    document.addEventListener("mousemove", (e) => {
      const { innerWidth, innerHeight } = window;
      const xPos = (e.clientX / innerWidth - 0.5) * 2;
      const yPos = (e.clientY / innerHeight - 0.5) * 2;

      // O Parallax usa "x" e "y", então ele não anula o "yPercent" do flutuar contínuo ali de cima!
      gsap.to(".icon-splash", { x: xPos * 40, y: yPos * 20, duration: 1.5, ease: "power2.out" });
      gsap.to(".icon-cubes", { x: xPos * -30, y: yPos * -25, duration: 1.5, ease: "power2.out" });
      gsap.to(".icon-heart", { x: xPos * 50, y: yPos * -30, duration: 1.5, ease: "power2.out" });
      gsap.to(".icon-flower", { x: xPos * -40, y: yPos * 30, duration: 1.5, ease: "power2.out" });
      
      gsap.to(".about-container", { x: xPos * 10, y: yPos * 5, duration: 1, ease: "power2.out" });
    });
  }
}