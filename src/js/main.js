/* src/js/main.js */
import { gsap } from "gsap";
// IMPORTANTE: Importar o ScrollToPlugin
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; 

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

// Registrar o plugin do GSAP
gsap.registerPlugin(ScrollToPlugin);

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
    // ROLAGEM SUAVE GLOBAL (SMOOTH SCROLL)
    // ==========================================
    // Seleciona todos os links que começam com '#' (âncoras)
    const smoothLinks = document.querySelectorAll('a[href^="#"]');

    smoothLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o pulo seco padrão do navegador

            const targetId = this.getAttribute('href');
            
            // Se for apenas '#', não faz nada (ex: botão de live-project falso)
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula a posição. Se for para #inicio (topo), vai para 0.
                // Para outras seções, desconta 80px por causa da navbar fixa.
                const offset = targetId === '#inicio' ? 0 : 80;

                // Animação "Manteiga" com GSAP
                gsap.to(window, {
                    duration: 1.5, // Duração de 1.5 segundos (bem suave)
                    scrollTo: {
                        y: targetElement,
                        offsetY: offset 
                    },
                    ease: "power4.inOut" // Acelera e desacelera de forma bem dramática e elegante
                });
            }
        });
    });
});

// ==========================================
    // PARALAXE COM GIROSCÓPIO (MOBILE)
    // ==========================================
    // Verifica se estamos num dispositivo móvel e se ele suporta eventos de orientação
    if (window.innerWidth <= 992 && window.DeviceOrientationEvent) {
        
        window.addEventListener("deviceorientation", (e) => {
            // Gama: inclinação Esquerda/Direita (vai de -90 a 90)
            let gamma = e.gamma; 
            // Beta: inclinação Frente/Trás (vai de -180 a 180)
            let beta = e.beta; 

            // Se os valores vierem nulos (dispositivo sem sensor), encerra
            if (gamma === null || beta === null) return;

            // Limitamos a inclinação para a tela não virar uma bagunça se a pessoa virar o celular de cabeça para baixo
            if (gamma > 45) gamma = 45;
            if (gamma < -45) gamma = -45;
            if (beta > 80) beta = 80; // Celular mais "em pé"
            if (beta < 10) beta = 10; // Celular mais "deitado" na mesa

            // Normalizamos os valores para um multiplicador de -1 a 1 (parecido com o que fizemos no MouseMove)
            const xPos = gamma / 45; 
            const yPos = (beta - 45) / 35; // Consideramos ~45 graus como o centro de repouso do celular na mão

            // Aplicamos os movimentos (com intensidades menores que no desktop para não ficar enjoativo no celular)
            
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