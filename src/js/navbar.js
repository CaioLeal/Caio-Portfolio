/* src/js/navbar.js */
import gsap from "gsap";

export function initNavbar() {
  console.log("navbar iniciou")

  // Guarda global simples pra impedir dupla inicialização
  if (document.body.dataset.navbarInit === "true") return;
  document.body.dataset.navbarInit = "true";

  const navbarWrapper = document.querySelector(".navbar-wrapper"); 
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const navLinksMobile = document.querySelector(".nav-links-mobile");
  const lines = document.querySelectorAll(".hamburger-btn .line");
  const mobileLinkItems = document.querySelectorAll(".nav-links-mobile li");
  const mobileLinks = document.querySelectorAll(".nav-links-mobile a");
  
  const langBtn = document.getElementById('currentLangBtn');
  const langDropdown = document.getElementById('langDropdown');
  const langOptions = document.querySelectorAll('.lang-option'); // Pegando as opções de idiomas

  // Lógica de Scroll (Encolhe o wrapper)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbarWrapper.classList.add('scrolled');
    } else {
      navbarWrapper.classList.remove('scrolled');
    }
  });
  
  let isMenuOpen = false;
  let tl = gsap.timeline({ paused: true });

  // Animação do Overlay Mobile
  tl.to(navLinksMobile, { autoAlpha: 1, duration: .4, ease: "power2.inOut" })
    .fromTo(mobileLinkItems, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .3, stagger: .05, ease: "power2.out" }, "-=.2");

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      tl.play();
      gsap.to(lines[0], { y: 9, rotation: 45, duration: .3 });
      gsap.to(lines[1], { opacity: 0, duration: .3 });
      gsap.to(lines[2], { y: -9, rotation: -45, duration: .3 });
    } else {
      tl.reverse();
      gsap.to(lines[0], { y: 0, rotation: 0, duration: .3 });
      gsap.to(lines[1], { opacity: 1, duration: .3 });
      gsap.to(lines[2], { y: 0, rotation: 0, duration: .3 });
    }
  };

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", toggleMenu);
  }

  // Fecha o menu ao clicar num link (Mobile) de forma suave
  mobileLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          // O Scroll suave já é cuidado pelo main.js
          if (isMenuOpen) {
             // Atrasa um pouquinho o fechamento do menu para não parecer bugado enquanto o scroll começa
             setTimeout(() => {
                 toggleMenu();
             }, 300); 
          }
      });
  });

// ==========================================
  // LÓGICA DO DROPDOWN DE IDIOMAS (ORIGINAL)
  // ==========================================
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation(); 
      langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('show');
    });
  }
} // Fim da função initNavbar