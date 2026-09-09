/* src/js/contact.js */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initContact() {
  
  // 1. Auto-resize do Textarea (Melhora a UX do formulário)
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

  // Título e Email (Vindo da Esquerda)
  tl.from(".contact-info > *", { 
      x: -50, 
      opacity: 0, 
      duration: 0.8, 
      stagger: 0.2,
      ease: "power2.out" 
    })
    // Inputs do formulário (Vindo de baixo)
    .from(".form-row", { 
      y: 30, 
      opacity: 0, 
      duration: 0.6, 
      stagger: 0.15,
      ease: "power2.out" 
    }, "-=0.4")
    // Botão de Enviar
    .from(".submit-btn", { 
      y: 20, 
      opacity: 0, 
      duration: 0.4, 
      ease: "power2.out" 
    }, "-=0.2");


  // Ícones 3D (Vindo de fora da tela girando)
  tl.from(".icon-thunder", { x: 200, y: -200, rotation: 45, opacity: 0, duration: 1, ease: "back.out(1.2)" }, "-=1")
    .from(".icon-balloon", { x: -200, y: 200, rotation: -30, opacity: 0, duration: 1, ease: "back.out(1.2)" }, "-=0.9");


  // 3. Animação Flutuante Contínua (Idle) - Idêntica à lógica do About
  gsap.to(".icon-thunder", { yPercent: -15, duration: 2.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
  gsap.to(".icon-balloon", { yPercent: 20, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.5 });


  // 4. Parallax com o Mouse
  if (window.innerWidth > 992) {
    document.addEventListener("mousemove", (e) => {
      const { innerWidth, innerHeight } = window;
      const xPos = (e.clientX / innerWidth - 0.5) * 2;
      const yPos = (e.clientY / innerHeight - 0.5) * 2;

      // Movimenta os ícones
      gsap.to(".icon-thunder", { x: xPos * -40, y: yPos * -20, duration: 1.5, ease: "power2.out" });
      gsap.to(".icon-balloon", { x: xPos * 50, y: yPos * 30, duration: 1.5, ease: "power2.out" });
      
      // Movimenta os containers principais sutilmente
      gsap.to(".contact-info", { x: xPos * 15, y: yPos * 5, duration: 1, ease: "power2.out" });
      gsap.to(".contact-form-wrapper", { x: xPos * -10, y: yPos * -5, duration: 1, ease: "power2.out" });
    });
  }
}