import { initNavbar } from './navbar.js';
import { initHero } from './hero.js';
import { initAbout } from './about.js';
import { initServices } from './services.js';
import { initProjects } from './projects.js';
import { initContact } from './contact.js';
import { initFormations } from './formations.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initHero();
    initAbout();
    initServices();
    initProjects();
    initContact();
    initFormations();
  // Aqui você vai iniciar os scripts das traduções depois
});