/* src/js/main.js */
import { gsap } from "gsap";
// Importa o Lenis (A mágica da rolagem com inércia)
import Lenis from '@studio-freight/lenis'; 

import { initNavbar } from './navbar.js';
import { initHero } from './hero.js';
import { initAbout } from './about.js';
import { initServices } from './services.js';
import { initProjects } from './projects.js';
import { initContact } from './contact.js';
import { initFormations } from './formations.js';
import { initCosmus } from './cosmus.js';
import { initFooter } from './footer.js';
import { initI18n } from './i18n.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initHero();
    initAbout();
    initServices();
    initProjects();
    initContact();
    initFormations();
    initCosmus();
    initFooter();
    initI18n();

    // ==========================================
    // ROLAGEM SUAVE COM INÉRCIA (LENIS)
    // ==========================================
    
    // Inicializa o Lenis
    const lenis = new Lenis({
        duration: 2, // Duração do "deslizamento" após parar de rolar
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de desaceleração (manteiga)
        direction: 'vertical', // Direção do scroll
        gestureDirection: 'vertical', // Direção do gesto (touchpad)
        smooth: true,
        mouseMultiplier: 1, // Sensibilidade do mouse
        smoothTouch: false, // Deixa false para não interferir na rolagem nativa do celular (que já é boa)
        touchMultiplier: 2,
    });

    // Integra o Lenis com o RequestAnimationFrame do navegador
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Opcional: Se quiser que as animações do ScrollTrigger fiquem perfeitas com o Lenis
    // gsap.ticker.add((time)=>{
    //     lenis.raf(time * 1000)
    // })
    // gsap.ticker.lagSmoothing(0, 0)

    // ==========================================
    // CLIQUES NOS LINKS (Usando o Lenis para ir até a seção)
    // ==========================================
    const smoothLinks = document.querySelectorAll('a[href^="#"]');

    smoothLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offset = targetId === '#inicio' ? 0 : -80; // O Lenis usa negativo para compensar a navbar

                // Usa o método scrollTo nativo do Lenis!
                lenis.scrollTo(targetElement, {
                    offset: offset,
                    duration: 1.5,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
                });
            }
        });
    });

    // ==========================================
    // PARALAXE COM GIROSCÓPIO (MOBILE)
    // ==========================================
    if (window.innerWidth <= 992 && window.DeviceOrientationEvent) {
        
        window.addEventListener("deviceorientation", (e) => {
            let gamma = e.gamma; 
            let beta = e.beta; 

            if (gamma === null || beta === null) return;

            if (gamma > 45) gamma = 45;
            if (gamma < -45) gamma = -45;
            if (beta > 80) beta = 80; 
            if (beta < 10) beta = 10; 

            const xPos = gamma / 45; 
            const yPos = (beta - 45) / 35; 
            
            // HERO
            gsap.to(".hero-bg-text", { x: xPos * 15, y: yPos * 10, duration: 1, ease: "power2.out" });
            gsap.to(".hero-mascot", { x: xPos * -15, y: yPos * -10, duration: 1, ease: "power2.out" });

            // ABOUT
            gsap.to(".icon-splash", { x: xPos * 15, y: yPos * 10, duration: 1.5, ease: "power2.out" });
            gsap.to(".icon-cubes", { x: xPos * -10, y: yPos * -10, duration: 1.5, ease: "power2.out" });
            gsap.to(".icon-heart", { x: xPos * 20, y: yPos * -10, duration: 1.5, ease: "power2.out" });
            gsap.to(".icon-flower", { x: xPos * -15, y: yPos * 15, duration: 1.5, ease: "power2.out" });

            // CONTACT
            gsap.to(".icon-thunder", { x: xPos * -15, y: yPos * -10, duration: 1.5, ease: "power2.out" });
            gsap.to(".icon-balloon", { x: xPos * 20, y: yPos * 15, duration: 1.5, ease: "power2.out" });

            // COSMUS
            gsap.to(".mascot-left", { x: xPos * 15, y: yPos * 10, duration: 1.5, ease: "power2.out" });
            gsap.to(".mascot-right", { x: xPos * -15, y: yPos * -10, duration: 1.5, ease: "power2.out" });
        });
    }
});