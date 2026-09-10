import { initNavbar } from './navbar.js';
import { initHero } from './hero.js';
import { initAbout } from './about.js';
import { initServices } from './services.js';
import { initProjects } from './projects.js';
import { initContact } from './contact.js';
import { initFormations } from './formations.js';
import { initCosmus } from './cosmus.js';
import { initFooter } from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initHero();
    initAbout();
    initServices();
    initProjects();
    initContact();
    initFormations();
    initCosmus();
    initFooter()
  // Aqui você vai iniciar os scripts das traduções depois
});