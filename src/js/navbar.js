/* src/js/navbar.js */
import gsap from "gsap";

export function initNavbar() {
  const navbarContainer = document.querySelector(".navbar-container"); 
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const navLinks = document.querySelector(".nav-links");
  const lines = document.querySelectorAll(".hamburger-btn .line");
  
  const langBtn = document.getElementById('currentLangBtn');
  const langDropdown = document.getElementById('langDropdown');

  if (!hamburgerBtn || !navLinks) return;

  // Lógica de Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbarContainer.classList.add('scrolled', 'glass-effect');
    } else {
      navbarContainer.classList.remove('scrolled', 'glass-effect');
    }
  });
  
  let isMenuOpen = false;
  let tl;
  let mm = gsap.matchMedia();

  mm.add("(max-width: 992px)", () => {
    tl = gsap.timeline({ paused: true });
    tl.to(navLinks, { autoAlpha: 1, duration: .4, ease: "power2.inOut" })
      .fromTo(".nav-links li", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .3, stagger: .1, ease: "power2.out" }, "-=0.2");

    return () => {
      gsap.set([navLinks, ".nav-links li"], { clearProps: "all" });
      isMenuOpen = false;
    };
  });

  hamburgerBtn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      if(tl) tl.play();
      gsap.to(lines[0], { y: 9, rotation: 45, duration: .3 });
      gsap.to(lines[1], { opacity: 0, duration: .3 });
      gsap.to(lines[2], { y: -9, rotation: -45, duration: .3 });
    } else {
      if(tl) tl.reverse();
      gsap.to(lines[0], { y: 0, rotation: 0, duration: .3 });
      gsap.to(lines[1], { opacity: 1, duration: .3 });
      gsap.to(lines[2], { y: 0, rotation: 0, duration: .3 });
    }
  });

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation(); 
      langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('show');
    });
  }
}