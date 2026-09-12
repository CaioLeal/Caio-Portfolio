/* src/js/i18n.js */
import { gsap } from "gsap";

export function initI18n() {
    const langBtn = document.getElementById('currentLangBtn');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentFlagImg = document.querySelector('.current-flag'); 

    if (!langBtn || !langDropdown) return;

    // Dicionário de Traduções
    const translations = {
        'pt-br': { 
            //NAVBAR

            "nav-home": "Início",
            "nav-about": "Sobre",
            "nav-services": "Serviços",
            "nav-projects": "Projetos",
            "nav-formations": "Formações",
            "nav-contact": "Contato",

            //HERO

            "hero-title": "OLÁ, SOU CAIO",
            "hero-desc": "Um desenvolvedor full<br>stack apaixonado por<br>criar projetos ousados e<br>memoráveis 🚀",
            "hero-btn": "Baixar Currículo",
            "hero-bottom": "PORTFÓLIO",

            //ABOUT

            "about-title": "SOBRE MIM",
            "about-p1": "Sou um profissional apaixonado por desenvolvimento de software e focado em criar soluções digitais completas.",
            "about-p2": "Do planejamento arquitetônico de sistemas backend robustos à lapidação de interfaces pixel-perfect no frontend, vivo na interseção onde o design inteligente encontra o código limpo.",
            "about-p3": "Front-end / Back-end / Design / Repetir",
            "about-btn": "CONTATO",

            //SERVICE

            "services-title": "SERVICES", 
            "srv-1-title": "Frontend Development",
            "srv-1-desc": "Criação de interfaces imersivas, responsivas e de alta performance utilizando HTML, CSS, JavaScript, React e animações fluidas com GSAP.",
            "srv-2-title": "Backend Development",
            "srv-2-desc": "Desenvolvimento de APIs seguras e escaláveis, arquitetura de banco de dados e lógica de servidores utilizando Python, Java e PHP.",
            "srv-3-title": "UI/UX Design",
            "srv-3-desc": "Prototipação de interfaces focadas na experiência do usuário, aliando estética e usabilidade para reter a atenção do cliente final.",
            "srv-4-title": "Web Applications",
            "srv-4-desc": "Soluções Full Stack de ponta a ponta. Da concepção do banco de dados até o deploy na nuvem da sua aplicação web completa.",
            
            //PROJECT

            "projects-title": "PROJETOS",
            "prj-1-cat": "Sistema web",
            "prj-1-desc": "Landing page interativa para uma plataforma de análise de desempenho no futebol, com foco em UI/UX, animações avançadas e experiência responsiva. O projeto evoluiu para incluir painel administrativo e integração com banco de dados, permitindo gerenciar conteúdos de forma dinâmica.",
            "prj-2-cat": "Landing Page",
            "prj-2-desc": "Landing page inspirada no ecossistema Apple, desenvolvida para apresentar o iPhone 17 Pro com uma experiência visual premium. O projeto utiliza componentes reutilizáveis, animações fluidas e troca dinâmica de modelos e cores, com foco em responsividade, performance e fidelidade visual.",
            "prj-3-cat": "Software",
            "prj-3-desc": "Software profissional de análise e desempenho esportivo, criado para transformar dados de partidas em insights táticos e visuais. A plataforma reúne estatísticas, dashboards, mapas de calor, análise de atletas, comparativos entre equipes, lousa tática, telestrator e rastreamento de jogadores com IA.",
            "prj-4-cat": "Sistema Interativo",
            "prj-4-desc": "Plataforma gamificada de figurinhas virtuais, desenvolvida com Vite e Firebase, com sistema de jogadores, abertura de pacotes, coleção e interação com figurinhas. O projeto também conta com loja, códigos promocionais, moedas, recompensas e um painel administrativo completo para gerenciamento da plataforma.",
            "live-project": "Veja Aqui",
            "projects-more": "projetos entregues",
            "projects-more-sub": "Veja mais no meu GitHub ou entre em contato para o portfólio completo.",

            //CONTACT

            "contact-title": "VAMOS<br>NOS<br>FALAR",
            "contact-name": "Nome Completo*",
            "contact-email": "Email",
            "contact-phone": "Telefone*",
            "contact-msg": "Mensagem*",
            "contact-btn": "ENVIAR",

            //FORMATIONS

            "formations-title": "MINHAS FORMAÇÕES",
            "formations-subtitle": "Aprendizado contínuo e aprimoramento técnico.",
            "status-in-progress": "Em Andamento",
            "status-completed": "Concluído",
            "form-1-name": "Análise e Desenvolvimento de Sistemas",
            "form-1-inst": "Uninove",
            "form-1-date": "Julho/2025 — Atualmente",
            "form-2-name": "Python Development",
            "form-2-inst": "FIAP",
            "form-2-date": "Concluído em Julho/2026",
            "form-3-name": "Java Development",
            "form-3-inst": "FIAP",
            "form-3-date": "Concluído em Julho/2026",
            "form-4-name": "Desenvolvimento Full Stack (JS e PHP)",
            "form-4-inst": "Udemy",
            "form-4-date": "Concluído em Junho/2025",
            "form-5-name": "Ada Santander Coders",
            "form-5-inst": "ADA TECH",
            "form-5-date": "Concluído em Janeiro/2025",
            "social-title": "Me encontre nas redes",

            //COSMUS

            "cosmus-name": "Cosmus Agency",
            "cosmus-role": "Criador e Fundador",
            "cosmus-p1": "Não criamos só sites. Criamos presença digital.",
            "cosmus-p3": "Na Cosmus Agency, criamos sites e lojas virtuais que vão além do visual: são rápidos, estratégicos e focados em gerar resultados. Cada projeto é único, com design moderno, boa experiência do usuário e otimização para crescer o seu negócio.",
            "cosmus-btn": "Visite Aqui"
        },
        'pt-pt': {
        //NAVBAR

        "nav-home": "Início",
        "nav-about": "Sobre",
        "nav-services": "Serviços",
        "nav-projects": "Projetos",
        "nav-formations": "Formações",
        "nav-contact": "Contacto",

        //HERO

        "hero-title": "OLÁ, SOU CAIO",
        "hero-desc": "Um programador full<br>stack apaixonado por<br>criar projetos ousados e<br>memoráveis 🚀",
        "hero-btn": "Descarregar Currículo",
        "hero-bottom": "PORTFÓLIO",

        //ABOUT

        "about-title": "SOBRE MIM",
        "about-p1": "Sou um profissional apaixonado pelo desenvolvimento de software e focado na criação de soluções digitais completas.",
        "about-p2": "Desde o planeamento arquitetónico de sistemas backend robustos até ao aperfeiçoamento de interfaces pixel-perfect no frontend, vivo na interseção onde o design inteligente encontra o código limpo.",
        "about-p3": "Front-end / Back-end / Design / Repetir",
        "about-btn": "CONTACTO",

        //SERVICE

        "services-title": "SERVIÇOS", 
        "srv-1-title": "Desenvolvimento Frontend",
        "srv-1-desc": "Criação de interfaces imersivas, responsivas e de alto desempenho utilizando HTML, CSS, JavaScript, React e animações fluidas com GSAP.",
        "srv-2-title": "Desenvolvimento Backend",
        "srv-2-desc": "Desenvolvimento de APIs seguras e escaláveis, arquitetura de bases de dados e lógica de servidores utilizando Python, Java e PHP.",
        "srv-3-title": "Design UI/UX",
        "srv-3-desc": "Prototipagem de interfaces focadas na experiência do utilizador, aliando estética e usabilidade para captar e reter a atenção do cliente final.",
        "srv-4-title": "Aplicações Web",
        "srv-4-desc": "Soluções Full Stack de ponta a ponta. Desde a conceção da base de dados até à implementação na nuvem da sua aplicação web completa.",
        
        //PROJECT

        "projects-title": "PROJETOS",
        "prj-1-cat": "Sistema Web",
        "prj-1-desc": "Landing page interativa para uma plataforma de análise de desempenho no futebol, com foco em UI/UX, animações avançadas e experiência responsiva. O projeto evoluiu para incluir um painel administrativo e integração com uma base de dados, permitindo gerir conteúdos de forma dinâmica.",
        "prj-2-cat": "Landing Page",
        "prj-2-desc": "Landing page inspirada no ecossistema Apple, desenvolvida para apresentar o iPhone 17 Pro com uma experiência visual premium. O projeto utiliza componentes reutilizáveis, animações fluidas e troca dinâmica de modelos e cores, com foco na responsividade, desempenho e fidelidade visual.",
        "prj-3-cat": "Software",
        "prj-3-desc": "Software profissional de análise e desempenho desportivo, criado para transformar dados de partidas em insights táticos e visuais. A plataforma reúne estatísticas, dashboards, mapas de calor, análise de atletas, comparativos entre equipas, quadro tático, telestrator e rastreamento de jogadores com IA.",
        "prj-4-cat": "Sistema Interativo",
        "prj-4-desc": "Plataforma gamificada de cromos virtuais, desenvolvida com Vite e Firebase, com sistema de jogadores, abertura de pacotes, coleção e interação com cromos. O projeto também conta com loja, códigos promocionais, moedas, recompensas e um painel administrativo completo para a gestão da plataforma.",
        "live-project": "Ver Aqui",
        "projects-more": "projetos entregues",
        "projects-more-sub": "Veja mais no meu GitHub ou entre em contacto para obter o portfólio completo.",

        //CONTACT

        "contact-title": "VAMOS<br>FALAR<br>CONSIG<br>O",
        "contact-name": "Nome Completo*",
        "contact-email": "E-mail",
        "contact-phone": "Telefone*",
        "contact-msg": "Mensagem*",
        "contact-btn": "ENVIAR",

        //FORMATIONS

        "formations-title": "AS MINHAS FORMAÇÕES",
        "formations-subtitle": "Aprendizagem contínua e aperfeiçoamento técnico.",
        "status-in-progress": "Em Curso",
        "status-completed": "Concluído",
        "form-1-name": "Análise e Desenvolvimento de Sistemas",
        "form-1-inst": "Uninove",
        "form-1-date": "Julho/2025 — Atualmente",
        "form-2-name": "Desenvolvimento Python",
        "form-2-inst": "FIAP",
        "form-2-date": "Concluído em Julho/2026",
        "form-3-name": "Desenvolvimento Java",
        "form-3-inst": "FIAP",
        "form-3-date": "Concluído em Julho/2026",
        "form-4-name": "Desenvolvimento Full Stack (JS e PHP)",
        "form-4-inst": "Udemy",
        "form-4-date": "Concluído em Junho/2025",
        "form-5-name": "Ada Santander Coders",
        "form-5-inst": "ADA TECH",
        "form-5-date": "Concluído em Janeiro/2025",
        "social-title": "Encontre-me nas redes",

        //COSMUS
        
        "cosmus-name": "Cosmus Agency",
        "cosmus-role": "Criador e Fundador",
        "cosmus-p1": "Não criamos apenas sites. Criamos presença digital.",
        "cosmus-p3": "Na Cosmus Agency, criamos sites e lojas online que vão além do visual: são rápidos, estratégicos e focados em gerar resultados. Cada projeto é único, com um design moderno, uma boa experiência do utilizador e otimização para fazer crescer o seu negócio.",
        "cosmus-btn": "Visite Aqui"
        },
        'en': {
        //NAVBAR

        "nav-home": "Home",
        "nav-about": "About",
        "nav-services": "Services",
        "nav-projects": "Projects",
        "nav-formations": "Education",
        "nav-contact": "Contact",

        //HERO

        "hero-title": "HELLO, I'M CAIO",
        "hero-desc": "A full<br>stack developer passionate about<br>creating bold and<br>memorable projects 🚀",
        "hero-btn": "Download Resume",
        "hero-bottom": "PORTFOLIO",

        //ABOUT

        "about-title": "ABOUT ME",
        "about-p1": "I'm a software development professional passionate about creating complete digital solutions.",
        "about-p2": "From architectural planning of robust backend systems to crafting pixel-perfect frontend interfaces, I live at the intersection where smart design meets clean code.",
        "about-p3": "Front-end / Back-end / Design / Repeat",
        "about-btn": "CONTACT",

        //SERVICE

        "services-title": "SERVICES",
        "srv-1-title": "Frontend Development",
        "srv-1-desc": "Creation of immersive, responsive, and high-performance interfaces using HTML, CSS, JavaScript, React, and fluid animations with GSAP.",
        "srv-2-title": "Backend Development",
        "srv-2-desc": "Development of secure and scalable APIs, database architecture, and server-side logic using Python, Java, and PHP.",
        "srv-3-title": "UI/UX Design",
        "srv-3-desc": "Prototyping of interfaces focused on user experience, combining aesthetics and usability to capture and retain the end customer's attention.",
        "srv-4-title": "Web Applications",
        "srv-4-desc": "End-to-end Full Stack solutions. From database design to cloud deployment of your complete web application.",
        
        //PROJECT

        "projects-title": "PROJECTS",
        "prj-1-cat": "Web System",
        "prj-1-desc": "Interactive landing page for a football performance analysis platform, focused on UI/UX, advanced animations, and responsive experience. The project evolved to include an administrative dashboard and database integration, allowing content to be managed dynamically.",
        "prj-2-cat": "Landing Page",
        "prj-2-desc": "Landing page inspired by the Apple ecosystem, developed to showcase the iPhone 17 Pro with a premium visual experience. The project uses reusable components, fluid animations, and dynamic model and color switching, with a focus on responsiveness, performance, and visual fidelity.",
        "prj-3-cat": "Software",
        "prj-3-desc": "Professional sports analysis and performance software designed to transform match data into tactical and visual insights. The platform brings together statistics, dashboards, heat maps, athlete analysis, team comparisons, tactical board, telestrator, and AI-powered player tracking.",
        "prj-4-cat": "Interactive System",
        "prj-4-desc": "Gamified virtual sticker platform developed with Vite and Firebase, featuring a player system, pack opening, collection, and interaction with stickers. The project also includes a store, promotional codes, currencies, rewards, and a complete administrative dashboard for platform management.",
        "live-project": "View Here",
        "projects-more": "delivered projects",
        "projects-more-sub": "See more on my GitHub or get in touch for the complete portfolio.",

        //CONTACT

        "contact-title": "LET'S<br>GET<br>IN TOUCH",
        "contact-name": "Full Name*",
        "contact-email": "Email",
        "contact-phone": "Phone*",
        "contact-msg": "Message*",
        "contact-btn": "SEND",

        //FORMATIONS

        "formations-title": "MY EDUCATION",
        "formations-subtitle": "Continuous learning and technical improvement.",
        "status-in-progress": "In Progress",
        "status-completed": "Completed",
        "form-1-name": "Systems Analysis and Development",
        "form-1-inst": "Uninove",
        "form-1-date": "July/2025 — Present",
        "form-2-name": "Python Development",
        "form-2-inst": "FIAP",
        "form-2-date": "Completed in July/2026",
        "form-3-name": "Java Development",
        "form-3-inst": "FIAP",
        "form-3-date": "Completed in July/2026",
        "form-4-name": "Full Stack Development (JS and PHP)",
        "form-4-inst": "Udemy",
        "form-4-date": "Completed in June/2025",
        "form-5-name": "Ada Santander Coders",
        "form-5-inst": "ADA TECH",
        "form-5-date": "Completed in January/2025",
        "social-title": "Find me on social media",

        //COSMUS
        
        "cosmus-name": "Cosmus Agency",
        "cosmus-role": "Creator & Founder",
        "cosmus-p1": "We don't just create websites. We create digital presence.",
        "cosmus-p3": "At Cosmus Agency, we create websites and online stores that go beyond looks: they are fast, strategic, and focused on delivering results. Every project is unique, featuring modern design, a great user experience, and optimization to help your business grow.",
        "cosmus-btn": "Visit Here"
        },
        'fr': { 
        //NAVBAR
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-services": "Services",
        "nav-projects": "Projets",
        "nav-formations": "Formations",
        "nav-contact": "Contact",

        //HERO

        "hero-title": "SALUT C'EST CAIO",
        "hero-desc": "Un développeur full<br>stack passionné par<br>la création de projets audacieux et<br>mémorables 🚀",
        "hero-btn": "Télécharger le CV",
        "hero-bottom": "PORTFOLIO",

        //ABOUT

        "about-title": "À PROPOS DE MOI",
        "about-p1": "Je suis un professionnel passionné par le développement logiciel et spécialisé dans la création de solutions numériques complètes.",
        "about-p2": "De la conception architecturale de systèmes backend robustes au perfectionnement d'interfaces pixel-perfect côté frontend, j'évolue à l'intersection où le design intelligent rencontre un code propre.",
        "about-p3": "Front-end / Back-end / Design / Répéter",
        "about-btn": "CONTACT",

        //SERVICE

        "services-title": "SERVICES", 
        "srv-1-title": "Développement Frontend",
        "srv-1-desc": "Création d'interfaces immersives, responsives et performantes utilisant HTML, CSS, JavaScript, React et des animations fluides avec GSAP.",
        "srv-2-title": "Développement Backend",
        "srv-2-desc": "Développement d'API sécurisées et évolutives, architecture de bases de données et logique serveur utilisant Python, Java et PHP.",
        "srv-3-title": "Design UI/UX",
        "srv-3-desc": "Prototypage d'interfaces axées sur l'expérience utilisateur, alliant esthétique et ergonomie afin de capter et retenir l'attention du client final.",
        "srv-4-title": "Applications Web",
        "srv-4-desc": "Solutions Full Stack de bout en bout. De la conception de la base de données au déploiement dans le cloud de votre application web complète.",
        
        //PROJECT

        "projects-title": "PROJETS",
        "prj-1-cat": "Système web",
        "prj-1-desc": "Landing page interactive pour une plateforme d'analyse des performances dans le football, axée sur l'UI/UX, les animations avancées et une expérience responsive. Le projet a évolué pour intégrer un panneau d'administration et une base de données, permettant de gérer les contenus de manière dynamique.",
        "prj-2-cat": "Landing Page",
        "prj-2-desc": "Landing page inspirée de l'écosystème Apple, développée pour présenter l'iPhone 17 Pro avec une expérience visuelle premium. Le projet utilise des composants réutilisables, des animations fluides et un changement dynamique des modèles et des couleurs, avec un accent particulier sur la responsivité, les performances et la fidélité visuelle.",
        "prj-3-cat": "Logiciel",
        "prj-3-desc": "Logiciel professionnel d'analyse et de performance sportive, conçu pour transformer les données des matchs en informations tactiques et visuelles. La plateforme réunit statistiques, tableaux de bord, cartes de chaleur, analyse des athlètes, comparatifs entre équipes, tableau tactique, téléstrateur et suivi des joueurs grâce à l'IA.",
        "prj-4-cat": "Système Interactif",
        "prj-4-desc": "Plateforme gamifiée de vignettes virtuelles, développée avec Vite et Firebase, comprenant un système de joueurs, l'ouverture de paquets, une collection et des interactions avec les vignettes. Le projet dispose également d'une boutique, de codes promotionnels, de monnaies virtuelles, de récompenses et d'un panneau d'administration complet pour la gestion de la plateforme.",
        "live-project": "Voir ici",
        "projects-more": "projets livrés",
        "projects-more-sub": "Découvrez-en davantage sur mon GitHub ou contactez-moi pour accéder au portfolio complet.",

        //CONTACT

        "contact-title": "PARLONS<br>EN<br>SEMBLE",
        "contact-name": "Nom complet*",
        "contact-email": "E-mail",
        "contact-phone": "Téléphone*",
        "contact-msg": "Message*",
        "contact-btn": "ENVOYER",

        //FORMATIONS

        "formations-title": "MES FORMATIONS",
        "formations-subtitle": "Apprentissage continu et perfectionnement technique.",
        "status-in-progress": "En cours",
        "status-completed": "Terminé",
        "form-1-name": "Analyse et développement de systèmes",
        "form-1-inst": "Uninove",
        "form-1-date": "Juillet/2025 — Aujourd'hui",
        "form-2-name": "Développement Python",
        "form-2-inst": "FIAP",
        "form-2-date": "Terminé en juillet/2026",
        "form-3-name": "Développement Java",
        "form-3-inst": "FIAP",
        "form-3-date": "Terminé en juillet/2026",
        "form-4-name": "Développement Full Stack (JS et PHP)",
        "form-4-inst": "Udemy",
        "form-4-date": "Terminé en juin/2025",
        "form-5-name": "Ada Santander Coders",
        "form-5-inst": "ADA TECH",
        "form-5-date": "Terminé en janvier/2025",
        "social-title": "Retrouvez-moi sur les réseaux",

        //COSMUS

        "cosmus-name": "Cosmus Agency",
        "cosmus-role": "Créateur et Fondateur",
        "cosmus-p1": "Nous ne créons pas seulement des sites web. Nous créons une présence numérique.",
        "cosmus-p3": "Chez Cosmus Agency, nous créons des sites web et des boutiques en ligne qui vont au-delà de l'esthétique : ils sont rapides, stratégiques et conçus pour générer des résultats. Chaque projet est unique, avec un design moderne, une excellente expérience utilisateur et une optimisation pensée pour faire grandir votre entreprise.",
        "cosmus-btn": "Visitez ici"
        
        },
        'it': {
        // NAVBAR
        "nav-home": "Home",
        "nav-about": "Chi sono",
        "nav-services": "Servizi",
        "nav-projects": "Progetti",
        "nav-formations": "Formazione",
        "nav-contact": "Contatti",

        // HERO
        "hero-title": "CIAO, SONO CAIO",
        "hero-desc": "Uno sviluppatore full<br>stack appassionato di<br>creare progetti audaci e<br>memorabili 🚀",
        "hero-btn": "Scarica il Curriculum",
        "hero-bottom": "PORTFOLIO",

        // ABOUT
        "about-title": "CHI SONO",
        "about-p1": "Sono un professionista appassionato di sviluppo software e focalizzato sulla creazione di soluzioni digitali complete.",
        "about-p2": "Dalla progettazione architettonica di sistemi backend robusti alla cura di interfacce pixel-perfect nel frontend, vivo nell'intersezione in cui il design intelligente incontra il codice pulito.",
        "about-p3": "Front-end / Back-end / Design / Ripetere",
        "about-btn": "CONTATTI",

        // SERVICE
        "services-title": "SERVIZI",
        "srv-1-title": "Sviluppo Frontend",
        "srv-1-desc": "Creazione di interfacce immersive, responsive e ad alte prestazioni utilizzando HTML, CSS, JavaScript, React e animazioni fluide con GSAP.",
        "srv-2-title": "Sviluppo Backend",
        "srv-2-desc": "Sviluppo di API sicure e scalabili, architettura di database e logica server utilizzando Python, Java e PHP.",
        "srv-3-title": "UI/UX Design",
        "srv-3-desc": "Prototipazione di interfacce incentrate sull'esperienza dell'utente, combinando estetica e usabilità per catturare e mantenere l'attenzione del cliente finale.",
        "srv-4-title": "Applicazioni Web",
        "srv-4-desc": "Soluzioni Full Stack end-to-end. Dalla progettazione del database fino al deploy sul cloud della tua applicazione web completa.",

        // PROJECT
        "projects-title": "PROGETTI",
        "prj-1-cat": "Sistema web",
        "prj-1-desc": "Landing page interattiva per una piattaforma di analisi delle prestazioni nel calcio, con focus su UI/UX, animazioni avanzate ed esperienza responsive. Il progetto si è evoluto fino a includere un pannello amministrativo e l'integrazione con un database, permettendo di gestire i contenuti in modo dinamico.",
        "prj-2-cat": "Landing Page",
        "prj-2-desc": "Landing page ispirata all'ecosistema Apple, sviluppata per presentare l'iPhone 17 Pro con un'esperienza visiva premium. Il progetto utilizza componenti riutilizzabili, animazioni fluide e cambio dinamico di modelli e colori, con particolare attenzione a responsività, performance e fedeltà visiva.",
        "prj-3-cat": "Software",
        "prj-3-desc": "Software professionale per l'analisi e le prestazioni sportive, creato per trasformare i dati delle partite in insight tattici e visivi. La piattaforma riunisce statistiche, dashboard, mappe di calore, analisi degli atleti, confronti tra squadre, lavagna tattica, telestrator e tracciamento dei giocatori tramite IA.",
        "prj-4-cat": "Sistema Interattivo",
        "prj-4-desc": "Piattaforma gamificata di figurine virtuali, sviluppata con Vite e Firebase, con sistema di giocatori, apertura di pacchetti, collezione e interazione con le figurine. Il progetto include anche un negozio, codici promozionali, monete, ricompense e un pannello amministrativo completo per la gestione della piattaforma.",
        "live-project": "Vedi Qui",
        "projects-more": "progetti consegnati",
        "projects-more-sub": "Scopri di più sul mio GitHub o contattami per vedere il portfolio completo.",

        // CONTACT
        "contact-title": "PARLIAMO<br>UN PO'<br>INSIEME",
        "contact-name": "Nome Completo*",
        "contact-email": "Email",
        "contact-phone": "Telefono*",
        "contact-msg": "Messaggio*",
        "contact-btn": "INVIA",

        // FORMATIONS
        "formations-title": "LA MIA FORMAZIONE",
        "formations-subtitle": "Apprendimento continuo e miglioramento tecnico.",
        "status-in-progress": "In Corso",
        "status-completed": "Completato",
        "form-1-name": "Analisi e Sviluppo di Sistemi",
        "form-1-inst": "Uninove",
        "form-1-date": "Luglio/2025 — Attualmente",
        "form-2-name": "Python Development",
        "form-2-inst": "FIAP",
        "form-2-date": "Completato a Luglio/2026",
        "form-3-name": "Java Development",
        "form-3-inst": "FIAP",
        "form-3-date": "Completato a Luglio/2026",
        "form-4-name": "Sviluppo Full Stack (JS e PHP)",
        "form-4-inst": "Udemy",
        "form-4-date": "Completato a Giugno/2025",
        "form-5-name": "Ada Santander Coders",
        "form-5-inst": "ADA TECH",
        "form-5-date": "Completato a Gennaio/2025",
        "social-title": "Trovami sui social",

        // COSMUS
        "cosmus-name": "Cosmus Agency",
        "cosmus-role": "Creatore e Fondatore",
        "cosmus-p1": "Non creiamo solo siti web. Creiamo presenza digitale.",
        "cosmus-p3": "In Cosmus Agency, creiamo siti web e negozi online che vanno oltre l'aspetto visivo: sono veloci, strategici e focalizzati sulla generazione di risultati. Ogni progetto è unico, con un design moderno, una buona esperienza utente e un'ottimizzazione pensata per far crescere il tuo business.",
        "cosmus-btn": "Visita Qui"
        },
        'de': {
        // NAVBAR
        "nav-home": "Startseite",
        "nav-about": "Über mich",
        "nav-services": "Dienstleistungen",
        "nav-projects": "Projekte",
        "nav-formations": "Ausbildung",
        "nav-contact": "Kontakt",

        // HERO
        "hero-title": "HALLO, ICH BIN CAIO",
        "hero-desc": "Ein Full-Stack-Entwickler,<br>der leidenschaftlich gerne<br>mutige und unvergessliche<br>Projekte entwickelt 🚀",
        "hero-btn": "Lebenslauf herunterladen",
        "hero-bottom": "PORTFOLIO",

        // ABOUT
        "about-title": "ÜBER MICH",
        "about-p1": "Ich bin ein leidenschaftlicher Softwareentwickler mit Fokus auf die Entwicklung ganzheitlicher digitaler Lösungen.",
        "about-p2": "Von der architektonischen Planung robuster Backend-Systeme bis zur Feinabstimmung pixelgenauer Frontend-Oberflächen bewege ich mich an der Schnittstelle, an der intelligentes Design auf sauberen Code trifft.",
        "about-p3": "Front-end / Back-end / Design / Wiederholen",
        "about-btn": "KONTAKT",

        // SERVICE
        "services-title": "DIENSTLEISTUNGEN",
        "srv-1-title": "Frontend-Entwicklung",
        "srv-1-desc": "Entwicklung immersiver, responsiver und leistungsstarker Benutzeroberflächen mit HTML, CSS, JavaScript, React und flüssigen Animationen mit GSAP.",
        "srv-2-title": "Backend-Entwicklung",
        "srv-2-desc": "Entwicklung sicherer und skalierbarer APIs, Datenbankarchitekturen und Serverlogik mit Python, Java und PHP.",
        "srv-3-title": "UI/UX-Design",
        "srv-3-desc": "Prototyping von Benutzeroberflächen mit Fokus auf die User Experience, wobei Ästhetik und Benutzerfreundlichkeit kombiniert werden, um die Aufmerksamkeit des Endkunden zu gewinnen und zu halten.",
        "srv-4-title": "Webanwendungen",
        "srv-4-desc": "Full-Stack-Lösungen aus einer Hand. Von der Konzeption der Datenbank bis zum Cloud-Deployment deiner vollständigen Webanwendung.",

        // PROJECT
        "projects-title": "PROJEKTE",
        "prj-1-cat": "Websystem",
        "prj-1-desc": "Interaktive Landingpage für eine Plattform zur Analyse der Fußballleistung mit Fokus auf UI/UX, fortgeschrittene Animationen und responsive Benutzererfahrung. Das Projekt wurde um ein Administrationspanel und eine Datenbankintegration erweitert, wodurch Inhalte dynamisch verwaltet werden können.",
        "prj-2-cat": "Landingpage",
        "prj-2-desc": "Eine vom Apple-Ökosystem inspirierte Landingpage, entwickelt, um das iPhone 17 Pro mit einem hochwertigen visuellen Erlebnis zu präsentieren. Das Projekt verwendet wiederverwendbare Komponenten, flüssige Animationen und einen dynamischen Wechsel von Modellen und Farben, mit Fokus auf Responsivität, Performance und visuelle Genauigkeit.",
        "prj-3-cat": "Software",
        "prj-3-desc": "Professionelle Software zur Analyse und Bewertung sportlicher Leistungen, entwickelt, um Spieldaten in taktische und visuelle Erkenntnisse umzuwandeln. Die Plattform vereint Statistiken, Dashboards, Heatmaps, Spieleranalysen, Teamvergleiche, ein Taktikboard, Telestrator und KI-gestütztes Spieler-Tracking.",
        "prj-4-cat": "Interaktives System",
        "prj-4-desc": "Gamifizierte Plattform für virtuelle Sammelkarten, entwickelt mit Vite und Firebase, mit Spielersystem, Kartenpaketen, Sammlung und Interaktion mit den Karten. Das Projekt umfasst außerdem einen Shop, Rabattcodes, virtuelle Währungen, Belohnungen und ein vollständiges Administrationspanel zur Verwaltung der Plattform.",
        "live-project": "Hier ansehen",
        "projects-more": "abgeschlossene Projekte",
        "projects-more-sub": "Entdecke mehr auf meinem GitHub oder kontaktiere mich für das vollständige Portfolio.",

        // CONTACT
        "contact-title": "LASS<br>UNS<br>REDEN",
        "contact-name": "Vollständiger Name*",
        "contact-email": "E-Mail",
        "contact-phone": "Telefon*",
        "contact-msg": "Nachricht*",
        "contact-btn": "SENDEN",

        // FORMATIONS
        "formations-title": "MEINE AUSBILDUNG",
        "formations-subtitle": "Kontinuierliches Lernen und technische Weiterentwicklung.",
        "status-in-progress": "In Bearbeitung",
        "status-completed": "Abgeschlossen",
        "form-1-name": "Systemanalyse und -entwicklung",
        "form-1-inst": "Uninove",
        "form-1-date": "Juli/2025 — Aktuell",
        "form-2-name": "Python Development",
        "form-2-inst": "FIAP",
        "form-2-date": "Abgeschlossen im Juli/2026",
        "form-3-name": "Java Development",
        "form-3-inst": "FIAP",
        "form-3-date": "Abgeschlossen im Juli/2026",
        "form-4-name": "Full-Stack-Entwicklung (JS und PHP)",
        "form-4-inst": "Udemy",
        "form-4-date": "Abgeschlossen im Juni/2025",
        "form-5-name": "Ada Santander Coders",
        "form-5-inst": "ADA TECH",
        "form-5-date": "Abgeschlossen im Januar/2025",
        "social-title": "Finde mich in den sozialen Netzwerken",

        // COSMUS
        "cosmus-name": "Cosmus Agency",
        "cosmus-role": "Gründer und Schöpfer",
        "cosmus-p1": "Wir erstellen nicht nur Websites. Wir schaffen digitale Präsenz.",
        "cosmus-p3": "Bei Cosmus Agency entwickeln wir Websites und Online-Shops, die über das visuelle Erscheinungsbild hinausgehen: Sie sind schnell, strategisch und darauf ausgerichtet, Ergebnisse zu erzielen. Jedes Projekt ist einzigartig – mit modernem Design, einer guten Benutzererfahrung und Optimierungen, die darauf ausgelegt sind, dein Unternehmen wachsen zu lassen.",
        "cosmus-btn": "Hier besuchen"
        },
        'es-es': {
        // NAVBAR
        "nav-home": "Inicio",
        "nav-about": "Sobre mí",
        "nav-services": "Servicios",
        "nav-projects": "Proyectos",
        "nav-formations": "Formación",
        "nav-contact": "Contacto",

        // HERO
        "hero-title": "HOLA, SOY CAIO",
        "hero-desc": "Un desarrollador full<br>stack apasionado por<br>crear proyectos atrevidos y<br>memorables 🚀",
        "hero-btn": "Descargar CV",
        "hero-bottom": "PORTFOLIO",

        // ABOUT
        "about-title": "SOBRE MÍ",
        "about-p1": "Soy un profesional apasionado por el desarrollo de software y centrado en crear soluciones digitales completas.",
        "about-p2": "Desde la planificación arquitectónica de sistemas backend robustos hasta el perfeccionamiento de interfaces pixel-perfect en el frontend, vivo en la intersección donde el diseño inteligente se encuentra con el código limpio.",
        "about-p3": "Front-end / Back-end / Diseño / Repetir",
        "about-btn": "CONTACTO",

        // SERVICE
        "services-title": "SERVICIOS",
        "srv-1-title": "Desarrollo Frontend",
        "srv-1-desc": "Creación de interfaces inmersivas, adaptables y de alto rendimiento utilizando HTML, CSS, JavaScript, React y animaciones fluidas con GSAP.",
        "srv-2-title": "Desarrollo Backend",
        "srv-2-desc": "Desarrollo de APIs seguras y escalables, arquitectura de bases de datos y lógica de servidores utilizando Python, Java y PHP.",
        "srv-3-title": "Diseño UI/UX",
        "srv-3-desc": "Prototipado de interfaces centradas en la experiencia del usuario, combinando estética y usabilidad para captar y mantener la atención del cliente final.",
        "srv-4-title": "Aplicaciones Web",
        "srv-4-desc": "Soluciones Full Stack de principio a fin. Desde la concepción de la base de datos hasta el despliegue en la nube de tu aplicación web completa.",

        // PROJECT
        "projects-title": "PROYECTOS",
        "prj-1-cat": "Sistema web",
        "prj-1-desc": "Landing page interactiva para una plataforma de análisis del rendimiento futbolístico, centrada en UI/UX, animaciones avanzadas y una experiencia adaptativa. El proyecto evolucionó para incluir un panel de administración y una integración con base de datos, permitiendo gestionar los contenidos de forma dinámica.",
        "prj-2-cat": "Landing Page",
        "prj-2-desc": "Landing page inspirada en el ecosistema de Apple, desarrollada para presentar el iPhone 17 Pro con una experiencia visual premium. El proyecto utiliza componentes reutilizables, animaciones fluidas y cambio dinámico de modelos y colores, con especial atención a la adaptabilidad, el rendimiento y la fidelidad visual.",
        "prj-3-cat": "Software",
        "prj-3-desc": "Software profesional de análisis y rendimiento deportivo, creado para transformar los datos de los partidos en información táctica y visual. La plataforma reúne estadísticas, dashboards, mapas de calor, análisis de jugadores, comparativas entre equipos, pizarra táctica, telestrator y seguimiento de jugadores mediante IA.",
        "prj-4-cat": "Sistema Interactivo",
        "prj-4-desc": "Plataforma gamificada de cromos virtuales, desarrollada con Vite y Firebase, con sistema de jugadores, apertura de sobres, colección e interacción con los cromos. El proyecto también cuenta con tienda, códigos promocionales, monedas, recompensas y un panel de administración completo para gestionar la plataforma.",
        "live-project": "Ver aquí",
        "projects-more": "proyectos entregados",
        "projects-more-sub": "Descubre más en mi GitHub o ponte en contacto conmigo para ver el portfolio completo.",

        // CONTACT
        "contact-title": "VAMOS<br>A<br>HABLAR",
        "contact-name": "Nombre completo*",
        "contact-email": "Correo electrónico",
        "contact-phone": "Teléfono*",
        "contact-msg": "Mensaje*",
        "contact-btn": "ENVIAR",

        // FORMATIONS
        "formations-title": "MI FORMACIÓN",
        "formations-subtitle": "Aprendizaje continuo y mejora técnica.",
        "status-in-progress": "En curso",
        "status-completed": "Completado",
        "form-1-name": "Análisis y Desarrollo de Sistemas",
        "form-1-inst": "Uninove",
        "form-1-date": "Julio/2025 — Actualmente",
        "form-2-name": "Python Development",
        "form-2-inst": "FIAP",
        "form-2-date": "Completado en julio de 2026",
        "form-3-name": "Java Development",
        "form-3-inst": "FIAP",
        "form-3-date": "Completado en julio de 2026",
        "form-4-name": "Desarrollo Full Stack (JS y PHP)",
        "form-4-inst": "Udemy",
        "form-4-date": "Completado en junio de 2025",
        "form-5-name": "Ada Santander Coders",
        "form-5-inst": "ADA TECH",
        "form-5-date": "Completado en enero de 2025",
        "social-title": "Encuéntrame en redes sociales",

        // COSMUS
        "cosmus-name": "Cosmus Agency",
        "cosmus-role": "Creador y Fundador",
        "cosmus-p1": "No creamos solo páginas web. Creamos presencia digital.",
        "cosmus-p3": "En Cosmus Agency, creamos páginas web y tiendas online que van más allá de lo visual: son rápidas, estratégicas y están enfocadas en generar resultados. Cada proyecto es único, con un diseño moderno, una buena experiencia de usuario y una optimización pensada para hacer crecer tu negocio.",
        "cosmus-btn": "Visita aquí"
        },
        'es-la': {
        // NAVBAR
        "nav-home": "Inicio",
        "nav-about": "Sobre mí",
        "nav-services": "Servicios",
        "nav-projects": "Proyectos",
        "nav-formations": "Formación",
        "nav-contact": "Contacto",

        // HERO
        "hero-title": "HOLA, SOY CAIO",
        "hero-desc": "Un desarrollador full<br>stack apasionado por<br>crear proyectos audaces y<br>memorables 🚀",
        "hero-btn": "Descargar currículum",
        "hero-bottom": "PORTAFOLIO",

        // ABOUT
        "about-title": "SOBRE MÍ",
        "about-p1": "Soy un profesional apasionado por el desarrollo de software y enfocado en crear soluciones digitales completas.",
        "about-p2": "Desde la planificación arquitectónica de sistemas backend robustos hasta el perfeccionamiento de interfaces pixel-perfect en el frontend, vivo en la intersección donde el diseño inteligente se encuentra con el código limpio.",
        "about-p3": "Front-end / Back-end / Diseño / Repetir",
        "about-btn": "CONTACTO",

        // SERVICE
        "services-title": "SERVICIOS",
        "srv-1-title": "Desarrollo Frontend",
        "srv-1-desc": "Creación de interfaces inmersivas, responsivas y de alto rendimiento utilizando HTML, CSS, JavaScript, React y animaciones fluidas con GSAP.",
        "srv-2-title": "Desarrollo Backend",
        "srv-2-desc": "Desarrollo de APIs seguras y escalables, arquitectura de bases de datos y lógica de servidores utilizando Python, Java y PHP.",
        "srv-3-title": "Diseño UI/UX",
        "srv-3-desc": "Prototipado de interfaces enfocadas en la experiencia del usuario, combinando estética y usabilidad para captar y mantener la atención del cliente final.",
        "srv-4-title": "Aplicaciones Web",
        "srv-4-desc": "Soluciones Full Stack de principio a fin. Desde la concepción de la base de datos hasta el despliegue en la nube de tu aplicación web completa.",

        // PROJECT
        "projects-title": "PROYECTOS",
        "prj-1-cat": "Sistema web",
        "prj-1-desc": "Landing page interactiva para una plataforma de análisis del rendimiento en el fútbol, enfocada en UI/UX, animaciones avanzadas y una experiencia responsiva. El proyecto evolucionó para incluir un panel de administración y una integración con base de datos, permitiendo gestionar los contenidos de forma dinámica.",
        "prj-2-cat": "Landing Page",
        "prj-2-desc": "Landing page inspirada en el ecosistema de Apple, desarrollada para presentar el iPhone 17 Pro con una experiencia visual premium. El proyecto utiliza componentes reutilizables, animaciones fluidas y cambio dinámico de modelos y colores, con un enfoque en responsividad, rendimiento y fidelidad visual.",
        "prj-3-cat": "Software",
        "prj-3-desc": "Software profesional de análisis y rendimiento deportivo, creado para transformar los datos de los partidos en información táctica y visual. La plataforma reúne estadísticas, dashboards, mapas de calor, análisis de jugadores, comparativas entre equipos, pizarra táctica, telestrator y seguimiento de jugadores mediante IA.",
        "prj-4-cat": "Sistema Interactivo",
        "prj-4-desc": "Plataforma gamificada de tarjetas virtuales, desarrollada con Vite y Firebase, con sistema de jugadores, apertura de paquetes, colección e interacción con las tarjetas. El proyecto también cuenta con tienda, códigos promocionales, monedas, recompensas y un panel de administración completo para gestionar la plataforma.",
        "live-project": "Ver aquí",
        "projects-more": "proyectos entregados",
        "projects-more-sub": "Descubre más en mi GitHub o contáctame para conocer el portafolio completo.",

        // CONTACT
        "contact-title": "VAMOS<br>A<br>HABLAR",
        "contact-name": "Nombre completo*",
        "contact-email": "Correo electrónico",
        "contact-phone": "Teléfono*",
        "contact-msg": "Mensaje*",
        "contact-btn": "ENVIAR",

        // FORMATIONS
        "formations-title": "MI FORMACIÓN",
        "formations-subtitle": "Aprendizaje continuo y mejora técnica.",
        "status-in-progress": "En progreso",
        "status-completed": "Completado",
        "form-1-name": "Análisis y Desarrollo de Sistemas",
        "form-1-inst": "Uninove",
        "form-1-date": "Julio/2025 — Actualmente",
        "form-2-name": "Python Development",
        "form-2-inst": "FIAP",
        "form-2-date": "Completado en julio de 2026",
        "form-3-name": "Java Development",
        "form-3-inst": "FIAP",
        "form-3-date": "Completado en julio de 2026",
        "form-4-name": "Desarrollo Full Stack (JS y PHP)",
        "form-4-inst": "Udemy",
        "form-4-date": "Completado en junio de 2025",
        "form-5-name": "Ada Santander Coders",
        "form-5-inst": "ADA TECH",
        "form-5-date": "Completado en enero de 2025",
        "social-title": "Encuéntrame en redes sociales",

        // COSMUS
        "cosmus-name": "Cosmus Agency",
        "cosmus-role": "Creador y Fundador",
        "cosmus-p1": "No creamos solo sitios web. Creamos presencia digital.",
        "cosmus-p3": "En Cosmus Agency, creamos sitios web y tiendas en línea que van más allá de lo visual: son rápidos, estratégicos y están enfocados en generar resultados. Cada proyecto es único, con un diseño moderno, una excelente experiencia de usuario y una optimización pensada para hacer crecer tu negocio.",
        "cosmus-btn": "Visita aquí"
        },
        'ja': {
        // NAVBAR

        "nav-home": "ホーム",
        "nav-about": "私について",
        "nav-services": "サービス",
        "nav-projects": "プロジェクト",
        "nav-formations": "学歴・資格",
        "nav-contact": "お問い合わせ",

        // HERO

        "hero-title": "こんにちは、カイオです",
        "hero-desc": "大胆で記憶に残る<br>プロジェクトを創ることに<br>情熱を注ぐ<br>フルスタック開発者です 🚀",
        "hero-btn": "履歴書をダウンロード",
        "hero-bottom": "ポートフォリオ",

        // ABOUT

        "about-title": "私について",
        "about-p1": "ソフトウェア開発に情熱を持ち、包括的なデジタルソリューションの創造に取り組んでいるプロフェッショナルです。",
        "about-p2": "堅牢なバックエンドシステムのアーキテクチャ設計から、フロントエンドのピクセル単位で洗練されたインターフェースの構築まで、スマートなデザインとクリーンなコードが交わる領域で開発に取り組んでいます。",
        "about-p3": "フロントエンド / バックエンド / デザイン / 繰り返す",
        "about-btn": "お問い合わせ",

        // SERVICE

        "services-title": "サービス",
        "srv-1-title": "フロントエンド開発",
        "srv-1-desc": "HTML、CSS、JavaScript、Reactを使用し、GSAPによる滑らかなアニメーションを取り入れた、没入感があり、レスポンシブで高性能なインターフェースを開発します。",
        "srv-2-title": "バックエンド開発",
        "srv-2-desc": "Python、Java、PHPを使用し、安全でスケーラブルなAPI、データベースアーキテクチャ、サーバーロジックを開発します。",
        "srv-3-title": "UI/UXデザイン",
        "srv-3-desc": "ユーザー体験を重視したインターフェースをプロトタイピングし、デザイン性と使いやすさを両立させ、ユーザーの関心を引きつけます。",
        "srv-4-title": "Webアプリケーション",
        "srv-4-desc": "データベースの設計からWebアプリケーションのクラウドへのデプロイまで、エンドツーエンドのフルスタックソリューションを提供します。",

        // PROJECT

        "projects-title": "プロジェクト",
        "prj-1-cat": "Webシステム",
        "prj-1-desc": "サッカーのパフォーマンス分析プラットフォーム向けのインタラクティブなランディングページです。UI/UX、先進的なアニメーション、レスポンシブなユーザー体験に重点を置いています。プロジェクトはさらに発展し、管理パネルとデータベース連携を追加。コンテンツを動的に管理できるシステムへと進化しました。",
        "prj-2-cat": "ランディングページ",
        "prj-2-desc": "Appleのエコシステムからインスピレーションを得たランディングページで、iPhone 17 Proをプレミアムなビジュアル体験で紹介するために開発しました。再利用可能なコンポーネント、滑らかなアニメーション、モデルやカラーの動的な切り替えを採用し、レスポンシブ対応、パフォーマンス、ビジュアルの再現性を重視しています。",
        "prj-3-cat": "ソフトウェア",
        "prj-3-desc": "試合データを戦術的・視覚的なインサイトへ変換するために開発した、プロフェッショナル向けのスポーツ分析・パフォーマンスソフトウェアです。統計情報、ダッシュボード、ヒートマップ、選手分析、チーム比較、戦術ボード、テレストレーター、AIによる選手トラッキングなどの機能を備えています。",
        "prj-4-cat": "インタラクティブシステム",
        "prj-4-desc": "ViteとFirebaseを使用して開発した、デジタルカードを集めて楽しめるゲーミフィケーションプラットフォームです。選手システム、パック開封、コレクション、カードとのインタラクションなどの機能を備えています。また、ショップ、プロモーションコード、ゲーム内通貨、報酬、プラットフォーム全体を管理できる管理パネルも実装しています。",
        "live-project": "こちらを見る",
        "projects-more": "納品済みプロジェクト",
        "projects-more-sub": "GitHubでさらにプロジェクトを見るか、完全版のポートフォリオについてお気軽にお問い合わせください。",

        // CONTACT

        "contact-title": "お話<br>しません<br>か？",
        "contact-name": "氏名*",
        "contact-email": "メールアドレス",
        "contact-phone": "電話番号*",
        "contact-msg": "メッセージ*",
        "contact-btn": "送信",

        // FORMATIONS

        "formations-title": "学歴・資格",
        "formations-subtitle": "継続的な学習と技術力の向上。",
        "status-in-progress": "進行中",
        "status-completed": "修了",
        "form-1-name": "システム分析・開発",
        "form-1-inst": "Uninove",
        "form-1-date": "2025年7月 — 現在",
        "form-2-name": "Python Development",
        "form-2-inst": "FIAP",
        "form-2-date": "2026年7月修了",
        "form-3-name": "Java Development",
        "form-3-inst": "FIAP",
        "form-3-date": "2026年7月修了",
        "form-4-name": "フルスタック開発（JS・PHP）",
        "form-4-inst": "Udemy",
        "form-4-date": "2025年6月修了",
        "form-5-name": "Ada Santander Coders",
        "form-5-inst": "ADA TECH",
        "form-5-date": "2025年1月修了",
        "social-title": "SNSでつながる",

        // COSMUS

        "cosmus-name": "Cosmus Agency",
        "cosmus-role": "クリエイター兼創設者",
        "cosmus-p1": "私たちはWebサイトを作るだけではありません。デジタルプレゼンスを創り出します。",
        "cosmus-p3": "Cosmus Agencyでは、見た目だけにとどまらないWebサイトやオンラインショップを制作しています。高速で、戦略的で、成果を生み出すことに重点を置いています。すべてのプロジェクトに個性を持たせ、モダンなデザイン、優れたユーザー体験、ビジネスの成長を支える最適化を提供します。",
        "cosmus-btn": "こちらを見る"
        },
        'ko': {
        // NAVBAR
        "nav-home": "홈",
        "nav-about": "소개",
        "nav-services": "서비스",
        "nav-projects": "프로젝트",
        "nav-formations": "학력 및 교육",
        "nav-contact": "문의",

        // HERO

        "hero-title": "안녕하세요, 저는 CAIO입니다",
        "hero-desc": "대담하고 기억에 남는<br>프로젝트를 만드는 데<br>열정을 가진<br>풀스택 개발자입니다 🚀",
        "hero-btn": "이력서 다운로드",
        "hero-bottom": "포트폴리오",

        // ABOUT

        "about-title": "소개",
        "about-p1": "소프트웨어 개발에 열정을 가지고 있으며, 완성도 높은 디지털 솔루션을 만드는 데 집중하는 개발자입니다.",
        "about-p2": "견고한 백엔드 시스템의 아키텍처 설계부터 프론트엔드의 픽셀 단위로 정교한 인터페이스 구현까지, 지능적인 디자인과 깔끔한 코드가 만나는 영역에서 개발하고 있습니다.",
        "about-p3": "프론트엔드 / 백엔드 / 디자인 / 반복",
        "about-btn": "문의하기",

        // SERVICE

        "services-title": "서비스",
        "srv-1-title": "프론트엔드 개발",
        "srv-1-desc": "HTML, CSS, JavaScript, React를 활용하고 GSAP의 부드러운 애니메이션을 적용하여 몰입감 있고 반응형이며 높은 성능을 갖춘 인터페이스를 개발합니다.",
        "srv-2-title": "백엔드 개발",
        "srv-2-desc": "Python, Java, PHP를 활용하여 안전하고 확장 가능한 API, 데이터베이스 아키텍처 및 서버 로직을 개발합니다.",
        "srv-3-title": "UI/UX 디자인",
        "srv-3-desc": "사용자 경험을 중심으로 인터페이스를 프로토타이핑하며, 디자인과 사용성을 조화롭게 결합하여 최종 사용자의 관심을 끌고 유지할 수 있도록 합니다.",
        "srv-4-title": "웹 애플리케이션",
        "srv-4-desc": "데이터베이스 설계부터 완성된 웹 애플리케이션의 클라우드 배포까지, 처음부터 끝까지 제공하는 Full Stack 솔루션입니다.",

        // PROJECT

        "projects-title": "프로젝트",
        "prj-1-cat": "웹 시스템",
        "prj-1-desc": "축구 경기력 분석 플랫폼을 위한 인터랙티브 랜딩 페이지입니다. UI/UX, 고급 애니메이션 및 반응형 사용자 경험에 중점을 두었습니다. 이후 관리자 패널과 데이터베이스 연동 기능을 추가하여 콘텐츠를 동적으로 관리할 수 있도록 발전시켰습니다.",
        "prj-2-cat": "랜딩 페이지",
        "prj-2-desc": "Apple 생태계에서 영감을 받아 제작한 랜딩 페이지로, iPhone 17 Pro를 프리미엄한 비주얼 경험으로 소개하기 위해 개발했습니다. 재사용 가능한 컴포넌트, 부드러운 애니메이션, 모델 및 색상의 동적 전환을 적용했으며 반응성, 성능 및 시각적 완성도에 중점을 두었습니다.",
        "prj-3-cat": "소프트웨어",
        "prj-3-desc": "경기 데이터를 전술적이고 시각적인 인사이트로 변환하기 위해 제작된 전문 스포츠 분석 및 경기력 관리 소프트웨어입니다. 통계, 대시보드, 히트맵, 선수 분석, 팀 간 비교, 전술 보드, 텔레스트레이터 및 AI 기반 선수 추적 기능을 제공합니다.",
        "prj-4-cat": "인터랙티브 시스템",
        "prj-4-desc": "Vite와 Firebase를 사용하여 개발한 게이미피케이션 기반의 디지털 카드 플랫폼입니다. 선수 시스템, 카드팩 개봉, 컬렉션 및 카드와의 상호작용 기능을 제공합니다. 또한 상점, 프로모션 코드, 가상 화폐, 보상 시스템 및 플랫폼 전체를 관리할 수 있는 완전한 관리자 패널을 갖추고 있습니다.",
        "live-project": "여기에서 보기",
        "projects-more": "완료된 프로젝트",
        "projects-more-sub": "GitHub에서 더 많은 프로젝트를 확인하거나 전체 포트폴리오가 필요하다면 문의해 주세요.",

        // CONTACT

        "contact-title": "함께<br>이야기<br>해볼까요?",
        "contact-name": "성명*",
        "contact-email": "이메일",
        "contact-phone": "전화번호*",
        "contact-msg": "메시지*",
        "contact-btn": "보내기",

        // FORMATIONS

        "formations-title": "학력 및 교육",
        "formations-subtitle": "지속적인 학습과 기술 역량 향상.",
        "status-in-progress": "진행 중",
        "status-completed": "완료",
        "form-1-name": "시스템 분석 및 개발",
        "form-1-inst": "Uninove",
        "form-1-date": "2025년 7월 — 현재",
        "form-2-name": "Python Development",
        "form-2-inst": "FIAP",
        "form-2-date": "2026년 7월 수료",
        "form-3-name": "Java Development",
        "form-3-inst": "FIAP",
        "form-3-date": "2026년 7월 수료",
        "form-4-name": "Full Stack 개발 (JS 및 PHP)",
        "form-4-inst": "Udemy",
        "form-4-date": "2025년 6월 수료",
        "form-5-name": "Ada Santander Coders",
        "form-5-inst": "ADA TECH",
        "form-5-date": "2025년 1월 수료",
        "social-title": "소셜 미디어에서 만나보세요",

        // COSMUS

        "cosmus-name": "Cosmus Agency",
        "cosmus-role": "크리에이터 겸 창립자",
        "cosmus-p1": "우리는 단순히 웹사이트를 만들지 않습니다. 디지털 존재감을 만듭니다.",
        "cosmus-p3": "Cosmus Agency에서는 단순히 보기 좋은 웹사이트와 온라인 쇼핑몰을 만드는 것을 넘어, 빠르고 전략적이며 실제 성과를 만들어낼 수 있는 디지털 솔루션을 제작합니다. 모든 프로젝트는 고유하며, 현대적인 디자인과 뛰어난 사용자 경험, 그리고 비즈니스 성장을 위한 최적화를 제공합니다.",
        "cosmus-btn": "여기에서 보기"
        },
        'pl': {
        // NAVBAR
        "nav-home": "Strona główna",
        "nav-about": "O mnie",
        "nav-services": "Usługi",
        "nav-projects": "Projekty",
        "nav-formations": "Wykształcenie",
        "nav-contact": "Kontakt",

        // HERO

        "hero-title": "CZEŚĆ, JESTEM CAIO",
        "hero-desc": "Jestem programistą full<br>stack, który z pasją<br>tworzy odważne i<br>niezapomniane projekty 🚀",
        "hero-btn": "Pobierz CV",
        "hero-bottom": "PORTFOLIO",

        // ABOUT

        "about-title": "O MNIE",
        "about-p1": "Jestem profesjonalistą z pasją do tworzenia oprogramowania, skupionym na projektowaniu kompleksowych rozwiązań cyfrowych.",
        "about-p2": "Od architektonicznego planowania solidnych systemów backendowych po dopracowywanie interfejsów pixel-perfect we frontendzie — działam na styku inteligentnego designu i czystego kodu.",
        "about-p3": "Front-end / Back-end / Design / Powtarzaj",
        "about-btn": "KONTAKT",

        // SERVICE

        "services-title": "USŁUGI",
        "srv-1-title": "Tworzenie Frontendu",
        "srv-1-desc": "Tworzenie immersyjnych, responsywnych i wydajnych interfejsów z wykorzystaniem HTML, CSS, JavaScript, React oraz płynnych animacji z GSAP.",
        "srv-2-title": "Tworzenie Backendu",
        "srv-2-desc": "Tworzenie bezpiecznych i skalowalnych API, architektury baz danych oraz logiki serwerowej z wykorzystaniem Python, Java i PHP.",
        "srv-3-title": "Projektowanie UI/UX",
        "srv-3-desc": "Prototypowanie interfejsów skoncentrowanych na doświadczeniu użytkownika, łączących estetykę i użyteczność w celu przyciągnięcia i utrzymania uwagi klienta końcowego.",
        "srv-4-title": "Aplikacje internetowe",
        "srv-4-desc": "Kompleksowe rozwiązania Full Stack. Od zaprojektowania bazy danych po wdrożenie kompletnej aplikacji internetowej w chmurze.",

        // PROJECT

        "projects-title": "PROJEKTY",
        "prj-1-cat": "System webowy",
        "prj-1-desc": "Interaktywny landing page dla platformy analizy wyników piłkarskich, skupiający się na UI/UX, zaawansowanych animacjach i responsywnym doświadczeniu użytkownika. Projekt został rozbudowany o panel administracyjny i integrację z bazą danych, umożliwiając dynamiczne zarządzanie treścią.",
        "prj-2-cat": "Landing Page",
        "prj-2-desc": "Landing page inspirowany ekosystemem Apple, stworzony do prezentacji iPhone'a 17 Pro w ramach wyjątkowych wrażeń wizualnych. Projekt wykorzystuje komponenty wielokrotnego użytku, płynne animacje oraz dynamiczną zmianę modeli i kolorów, z naciskiem na responsywność, wydajność i wierność wizualną.",
        "prj-3-cat": "Oprogramowanie",
        "prj-3-desc": "Profesjonalne oprogramowanie do analizy i oceny wyników sportowych, stworzone w celu przekształcania danych meczowych w informacje taktyczne i wizualne. Platforma obejmuje statystyki, dashboardy, mapy cieplne, analizę zawodników, porównania drużyn, tablicę taktyczną, telestrator oraz śledzenie zawodników z wykorzystaniem AI.",
        "prj-4-cat": "System interaktywny",
        "prj-4-desc": "Gamifikowana platforma wirtualnych kart kolekcjonerskich, stworzona z wykorzystaniem Vite i Firebase, z systemem zawodników, otwieraniem pakietów, kolekcjonowaniem i interakcją z kartami. Projekt obejmuje również sklep, kody promocyjne, wirtualną walutę, nagrody oraz kompletny panel administracyjny do zarządzania platformą.",
        "live-project": "Zobacz tutaj",
        "projects-more": "ukończonych projektów",
        "projects-more-sub": "Zobacz więcej na moim GitHubie lub skontaktuj się ze mną, aby otrzymać pełne portfolio.",

        // CONTACT

        "contact-title": "POROZMAWIAJMY<br>ZE<br>SOBĄ",
        "contact-name": "Imię i nazwisko*",
        "contact-email": "E-mail",
        "contact-phone": "Telefon*",
        "contact-msg": "Wiadomość*",
        "contact-btn": "WYŚLIJ",

        // FORMATIONS

        "formations-title": "MOJE WYKSZTAŁCENIE",
        "formations-subtitle": "Ciągła nauka i rozwój kompetencji technicznych.",
        "status-in-progress": "W toku",
        "status-completed": "Ukończone",
        "form-1-name": "Analiza i rozwój systemów",
        "form-1-inst": "Uninove",
        "form-1-date": "Lipiec/2025 — Obecnie",
        "form-2-name": "Python Development",
        "form-2-inst": "FIAP",
        "form-2-date": "Ukończone w lipcu 2026",
        "form-3-name": "Java Development",
        "form-3-inst": "FIAP",
        "form-3-date": "Ukończone w lipcu 2026",
        "form-4-name": "Tworzenie aplikacji Full Stack (JS i PHP)",
        "form-4-inst": "Udemy",
        "form-4-date": "Ukończone w czerwcu 2025",
        "form-5-name": "Ada Santander Coders",
        "form-5-inst": "ADA TECH",
        "form-5-date": "Ukończone w styczniu 2025",
        "social-title": "Znajdź mnie w mediach społecznościowych",

        // COSMUS

        "cosmus-name": "Cosmus Agency",
        "cosmus-role": "Twórca i Założyciel",
        "cosmus-p1": "Nie tworzymy tylko stron internetowych. Tworzymy cyfrową obecność.",
        "cosmus-p3": "W Cosmus Agency tworzymy strony internetowe i sklepy online, które wykraczają poza sam wygląd: są szybkie, strategiczne i skoncentrowane na osiąganiu wyników. Każdy projekt jest wyjątkowy — z nowoczesnym designem, doskonałym doświadczeniem użytkownika i optymalizacją stworzoną z myślą o rozwoju Twojego biznesu.",
        "cosmus-btn": "Zobacz tutaj"
        },
        'ru': {
        // NAVBAR
        "nav-home": "Главная",
        "nav-about": "Обо мне",
        "nav-services": "Услуги",
        "nav-projects": "Проекты",
        "nav-formations": "Образование",
        "nav-contact": "Контакты",

        // HERO

        "hero-title": "ПРИВЕТ, Я КАЙО",
        "hero-desc": "Full-stack разработчик,<br>который увлечён созданием<br>смелых и незабываемых<br>проектов 🚀",
        "hero-btn": "Скачать резюме",
        "hero-bottom": "ПОРТФОЛИО",

        // ABOUT

        "about-title": "ОБО МНЕ",
        "about-p1": "Я профессионал, увлечённый разработкой программного обеспечения и сосредоточенный на создании комплексных цифровых решений.",
        "about-p2": "От архитектурного проектирования надёжных backend-систем до создания идеально выверенных интерфейсов во frontend — я работаю на пересечении интеллектуального дизайна и чистого кода.",
        "about-p3": "Front-end / Back-end / Дизайн / Повторить",
        "about-btn": "КОНТАКТ",

        // SERVICE

        "services-title": "УСЛУГИ",
        "srv-1-title": "Frontend-разработка",
        "srv-1-desc": "Создание иммерсивных, адаптивных и высокопроизводительных интерфейсов с использованием HTML, CSS, JavaScript, React и плавных анимаций с GSAP.",
        "srv-2-title": "Backend-разработка",
        "srv-2-desc": "Разработка безопасных и масштабируемых API, архитектуры баз данных и серверной логики с использованием Python, Java и PHP.",
        "srv-3-title": "UI/UX-дизайн",
        "srv-3-desc": "Прототипирование интерфейсов, ориентированных на пользовательский опыт, с сочетанием эстетики и удобства использования для привлечения и удержания внимания конечного клиента.",
        "srv-4-title": "Веб-приложения",
        "srv-4-desc": "Комплексные Full Stack-решения от начала до конца. От проектирования базы данных до развёртывания готового веб-приложения в облаке.",

        // PROJECT

        "projects-title": "ПРОЕКТЫ",
        "prj-1-cat": "Веб-система",
        "prj-1-desc": "Интерактивный лендинг для платформы анализа футбольных показателей с акцентом на UI/UX, продвинутые анимации и адаптивный пользовательский опыт. Проект был расширен административной панелью и интеграцией с базой данных, что позволяет динамически управлять контентом.",
        "prj-2-cat": "Лендинг",
        "prj-2-desc": "Лендинг, вдохновлённый экосистемой Apple, созданный для презентации iPhone 17 Pro с премиальным визуальным опытом. Проект использует переиспользуемые компоненты, плавные анимации и динамическое переключение моделей и цветов с акцентом на адаптивность, производительность и визуальную точность.",
        "prj-3-cat": "Программное обеспечение",
        "prj-3-desc": "Профессиональное программное обеспечение для спортивной аналитики и оценки результатов, созданное для преобразования данных матчей в тактические и визуальные инсайты. Платформа объединяет статистику, дашборды, тепловые карты, анализ игроков, сравнение команд, тактичесную доску, телестратор и отслеживание игроков с помощью ИИ.",
        "prj-4-cat": "Интерактивная система",
        "prj-4-desc": "Геймифицированная платформа виртуальных коллекционных карточек, разработанная с использованием Vite и Firebase, с системой игроков, открытием наборов, коллекционированием и взаимодействием с карточками. Проект также включает магазин, промокоды, виртуальную валюту, награды и полноценную административную панель для управления платформой.",
        "live-project": "Смотреть здесь",
        "projects-more": "завершённых проектов",
        "projects-more-sub": "Смотрите больше проектов на моём GitHub или свяжитесь со мной, чтобы получить полное портфолио.",

        // CONTACT

        "contact-title": "ДАВАЙТЕ<br>БУДЕМ<br>НА СВЯЗИ",
        "contact-name": "Полное имя*",
        "contact-email": "Электронная почта",
        "contact-phone": "Телефон*",
        "contact-msg": "Сообщение*",
        "contact-btn": "ОТПРАВИТЬ",

        // FORMATIONS

        "formations-title": "МОЁ ОБРАЗОВАНИЕ",
        "formations-subtitle": "Непрерывное обучение и развитие технических навыков.",
        "status-in-progress": "В процессе",
        "status-completed": "Завершено",
        "form-1-name": "Анализ и разработка систем",
        "form-1-inst": "Uninove",
        "form-1-date": "Июль 2025 — настоящее время",
        "form-2-name": "Python Development",
        "form-2-inst": "FIAP",
        "form-2-date": "Завершено в июле 2026",
        "form-3-name": "Java Development",
        "form-3-inst": "FIAP",
        "form-3-date": "Завершено в июле 2026",
        "form-4-name": "Full Stack-разработка (JS и PHP)",
        "form-4-inst": "Udemy",
        "form-4-date": "Завершено в июне 2025",
        "form-5-name": "Ada Santander Coders",
        "form-5-inst": "ADA TECH",
        "form-5-date": "Завершено в январе 2025",
        "social-title": "Найдите меня в социальных сетях",

        // COSMUS

        "cosmus-name": "Cosmus Agency",
        "cosmus-role": "Создатель и основатель",
        "cosmus-p1": "Мы создаём не просто сайты. Мы создаём цифровое присутствие.",
        "cosmus-p3": "В Cosmus Agency мы создаём сайты и интернет-магазины, которые выходят за рамки визуальной составляющей: они быстрые, стратегические и ориентированы на достижение результатов. Каждый проект уникален — с современным дизайном, отличным пользовательским опытом и оптимизацией, направленной на развитие вашего бизнеса.",
        "cosmus-btn": "Посмотреть"
        },
        'zh-cn': {
        // NAVBAR
        "nav-home": "首页",
        "nav-about": "关于我",
        "nav-services": "服务",
        "nav-projects": "项目",
        "nav-formations": "教育经历",
        "nav-contact": "联系我",

        // HERO

        "hero-title": "你好，我是 CAIO",
        "hero-desc": "一名热爱创造<br>大胆且令人难忘的<br>项目的全栈<br>开发者 🚀",
        "hero-btn": "下载简历",
        "hero-bottom": "作品集",

        // ABOUT

        "about-title": "关于我",
        "about-p1": "我是一名热爱软件开发的专业人士，专注于打造完整的数字化解决方案。",
        "about-p2": "从稳健后端系统的架构规划，到前端像素级精细的界面打磨，我始终专注于智能设计与简洁代码相结合的领域。",
        "about-p3": "前端 / 后端 / 设计 / 重复",
        "about-btn": "联系我",

        // SERVICE

        "services-title": "服务",
        "srv-1-title": "前端开发",
        "srv-1-desc": "使用 HTML、CSS、JavaScript、React 以及 GSAP 流畅动画，打造沉浸式、响应式且高性能的用户界面。",
        "srv-2-title": "后端开发",
        "srv-2-desc": "使用 Python、Java 和 PHP 开发安全、可扩展的 API、数据库架构以及服务器端业务逻辑。",
        "srv-3-title": "UI/UX 设计",
        "srv-3-desc": "以用户体验为核心进行界面原型设计，将美观与易用性相结合，从而吸引并留住最终用户的注意力。",
        "srv-4-title": "Web 应用",
        "srv-4-desc": "提供端到端的 Full Stack 全栈解决方案。从数据库设计到完整 Web 应用的云端部署，一站式完成。",

        // PROJECT

        "projects-title": "项目",
        "prj-1-cat": "Web 系统",
        "prj-1-desc": "为足球表现分析平台打造的交互式落地页，重点关注 UI/UX、高级动画和响应式用户体验。项目进一步扩展了管理后台和数据库集成功能，实现了内容的动态管理。",
        "prj-2-cat": "落地页",
        "prj-2-desc": "一款受 Apple 生态系统启发的落地页，用于以高端视觉体验展示 iPhone 17 Pro。项目采用可复用组件、流畅动画以及模型和颜色的动态切换，并重点优化响应式设计、性能和视觉还原度。",
        "prj-3-cat": "软件",
        "prj-3-desc": "专业的体育分析与表现评估软件，旨在将比赛数据转化为战术和可视化洞察。平台整合了统计数据、数据看板、热力图、球员分析、球队对比、战术板、战术标注工具以及基于 AI 的球员追踪功能。",
        "prj-4-cat": "交互式系统",
        "prj-4-desc": "使用 Vite 和 Firebase 开发的游戏化虚拟卡牌平台，包含球员系统、卡包开启、卡牌收藏以及卡牌互动等功能。项目还包括商城、优惠码、虚拟货币、奖励系统以及用于管理整个平台的完整后台管理面板。",
        "live-project": "查看项目",
        "projects-more": "已交付项目",
        "projects-more-sub": "在我的 GitHub 上查看更多项目，或联系我获取完整作品集。",

        // CONTACT

        "contact-title": "让我们<br>聊一<br>聊",
        "contact-name": "姓名*",
        "contact-email": "电子邮箱",
        "contact-phone": "电话号码*",
        "contact-msg": "留言*",
        "contact-btn": "发送",

        // FORMATIONS

        "formations-title": "我的教育经历",
        "formations-subtitle": "持续学习，不断提升技术能力。",
        "status-in-progress": "进行中",
        "status-completed": "已完成",
        "form-1-name": "系统分析与开发",
        "form-1-inst": "Uninove",
        "form-1-date": "2025年7月 — 至今",
        "form-2-name": "Python Development",
        "form-2-inst": "FIAP",
        "form-2-date": "2026年7月完成",
        "form-3-name": "Java Development",
        "form-3-inst": "FIAP",
        "form-3-date": "2026年7月完成",
        "form-4-name": "Full Stack 全栈开发（JS 和 PHP）",
        "form-4-inst": "Udemy",
        "form-4-date": "2025年6月完成",
        "form-5-name": "Ada Santander Coders",
        "form-5-inst": "ADA TECH",
        "form-5-date": "2025年1月完成",
        "social-title": "在社交媒体上找到我",

        // COSMUS

        "cosmus-name": "Cosmus Agency",
        "cosmus-role": "创始人兼创意负责人",
        "cosmus-p1": "我们不只是创建网站。我们打造数字影响力。",
        "cosmus-p3": "在 Cosmus Agency，我们打造的不只是视觉出色的网站和在线商店，更是快速、高效、具有战略意义并专注于成果的数字解决方案。每一个项目都独一无二，拥有现代化设计、优秀的用户体验以及助力业务增长的优化方案。",
        "cosmus-btn": "查看详情"
        },
        'zh-tw': {
        // NAVBAR
        "nav-home": "首頁",
        "nav-about": "關於我",
        "nav-services": "服務",
        "nav-projects": "專案",
        "nav-formations": "教育經歷",
        "nav-contact": "聯絡我",

        // HERO

        "hero-title": "你好，我是 CAIO",
        "hero-desc": "一名熱愛創造<br>大膽且令人難忘的<br>專案的全端<br>開發者 🚀",
        "hero-btn": "下載履歷",
        "hero-bottom": "作品集",

        // ABOUT

        "about-title": "關於我",
        "about-p1": "我是一名熱愛軟體開發的專業人士，專注於打造完整的數位解決方案。",
        "about-p2": "從穩健後端系統的架構規劃，到前端像素級精細的介面打磨，我始終專注於智慧設計與簡潔程式碼相結合的領域。",
        "about-p3": "前端 / 後端 / 設計 / 重複",
        "about-btn": "聯絡我",

        // SERVICE

        "services-title": "服務",
        "srv-1-title": "前端開發",
        "srv-1-desc": "使用 HTML、CSS、JavaScript、React 以及 GSAP 流暢動畫，打造沉浸式、響應式且高效能的使用者介面。",
        "srv-2-title": "後端開發",
        "srv-2-desc": "使用 Python、Java 和 PHP 開發安全、可擴展的 API、資料庫架構以及伺服器端邏輯。",
        "srv-3-title": "UI/UX 設計",
        "srv-3-desc": "以使用者體驗為核心進行介面原型設計，將美感與易用性相結合，吸引並留住最終使用者的注意力。",
        "srv-4-title": "Web 應用程式",
        "srv-4-desc": "提供端到端的 Full Stack 全端解決方案。從資料庫設計到完整 Web 應用程式的雲端部署，一站式完成。",

        // PROJECT

        "projects-title": "專案",
        "prj-1-cat": "Web 系統",
        "prj-1-desc": "為足球表現分析平台打造的互動式落地頁，專注於 UI/UX、高級動畫以及響應式使用者體驗。專案進一步擴充了管理後台與資料庫整合功能，實現內容的動態管理。",
        "prj-2-cat": "落地頁",
        "prj-2-desc": "一款受 Apple 生態系統啟發的落地頁，用於以高端視覺體驗展示 iPhone 17 Pro。專案採用可重複使用的元件、流暢動畫以及模型與色彩的動態切換，並著重於響應式設計、效能與視覺還原度。",
        "prj-3-cat": "軟體",
        "prj-3-desc": "專業的體育分析與表現評估軟體，旨在將比賽資料轉化為戰術與視覺化洞察。平台整合了統計資料、儀表板、熱力圖、球員分析、球隊比較、戰術板、戰術標註工具以及基於 AI 的球員追蹤功能。",
        "prj-4-cat": "互動式系統",
        "prj-4-desc": "使用 Vite 和 Firebase 開發的遊戲化虛擬卡牌平台，包含球員系統、卡包開啟、卡牌收藏以及卡牌互動等功能。專案還包括商城、優惠碼、虛擬貨幣、獎勵系統以及用於管理整個平台的完整後台管理面板。",
        "live-project": "查看專案",
        "projects-more": "已交付專案",
        "projects-more-sub": "在我的 GitHub 上查看更多專案，或聯絡我取得完整作品集。",

        // CONTACT

        "contact-title": "讓我們<br>聊一<br>聊",
        "contact-name": "姓名*",
        "contact-email": "電子郵件",
        "contact-phone": "電話號碼*",
        "contact-msg": "訊息*",
        "contact-btn": "送出",

        // FORMATIONS

        "formations-title": "我的教育經歷",
        "formations-subtitle": "持續學習，不斷提升技術能力。",
        "status-in-progress": "進行中",
        "status-completed": "已完成",
        "form-1-name": "系統分析與開發",
        "form-1-inst": "Uninove",
        "form-1-date": "2025年7月 — 至今",
        "form-2-name": "Python Development",
        "form-2-inst": "FIAP",
        "form-2-date": "2026年7月完成",
        "form-3-name": "Java Development",
        "form-3-inst": "FIAP",
        "form-3-date": "2026年7月完成",
        "form-4-name": "Full Stack 全端開發（JS 和 PHP）",
        "form-4-inst": "Udemy",
        "form-4-date": "2025年6月完成",
        "form-5-name": "Ada Santander Coders",
        "form-5-inst": "ADA TECH",
        "form-5-date": "2025年1月完成",
        "social-title": "在社群媒體上找到我",

        // COSMUS

        "cosmus-name": "Cosmus Agency",
        "cosmus-role": "創辦人兼創意負責人",
        "cosmus-p1": "我們不只是建立網站。我們打造數位影響力。",
        "cosmus-p3": "在 Cosmus Agency，我們打造的不只是視覺出色的網站與線上商店，更是快速、高效、具備策略性並專注於成果的數位解決方案。每一個專案都獨一無二，擁有現代化設計、優質的使用者體驗，以及助力企業成長的最佳化方案。",
        "cosmus-btn": "查看詳情"
        }
    };

    // Função que altera dinamicamente o link de download do currículo
    function updateResumeLink(lang) {
        const resumeBtn = document.querySelector('[data-i18n="hero-btn"]');
        if (!resumeBtn) return;

        if (lang === 'pt-br' || lang === 'pt-pt') {
            resumeBtn.setAttribute('href', '/pdf/Currículo - Caio Leal da Silva.pdf');
            resumeBtn.setAttribute('download', 'Currículo - Caio Leal da Silva.pdf');
        } else {
            resumeBtn.setAttribute('href', '/pdf/Resume - Caio Leal da Silva.pdf');
            resumeBtn.setAttribute('download', 'Resume - Caio Leal da Silva.pdf');
        }
    }

    // Função que executa a transição animada de texto e traduz a página
    function changeLanguage(langCode, flagSrc, isInitialLoad = false) {
        const elements = document.querySelectorAll('[data-i18n]');
        
        const hasTranslation = translations[langCode] && Object.keys(translations[langCode]).length > 0;
        const langToUse = hasTranslation ? langCode : 'pt-br';
        
        if(flagSrc && currentFlagImg) {
            currentFlagImg.src = flagSrc;
        }

        // --- LÓGICA DE ADAPTAÇÃO VISUAL PARA IDIOMAS ---
        const heroBgText = document.querySelector('.hero-bg-text');
        const navLinksDesktop = document.querySelector('.nav-links-desktop');

        // Lista de idiomas que NÃO precisam ser encolhidos
        const keepOriginalSizeLangs = ['pt-br', 'pt-pt', 'en'];

        if (!keepOriginalSizeLangs.includes(langToUse)) {
            // Se NÃO estiver na lista acima (ex: espanhol, francês, alemão), aplica os ajustes
            if (heroBgText) heroBgText.classList.add('lang-long');
            if (navLinksDesktop) {
                navLinksDesktop.classList.add('lang-long');
                // Se for alemão, permite quebrar linha na navbar
                if (langToUse === 'de') {
                    navLinksDesktop.classList.add('lang-wrap');
                } else {
                    navLinksDesktop.classList.remove('lang-wrap');
                }
            }
        } else {
            // Se for pt-br, pt-pt ou en, remove os ajustes (mantém tamanho original)
            if (heroBgText) heroBgText.classList.remove('lang-long');
            if (navLinksDesktop) {
                navLinksDesktop.classList.remove('lang-long');
                navLinksDesktop.classList.remove('lang-wrap');
            }
        }

        // --- NOVO EFEITO: SCRAMBLE / TEXTO HACKER ---
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";

        elements.forEach((el, index) => {
            const key = el.getAttribute('data-i18n');
            const finalStr = translations[langToUse] && translations[langToUse][key] ? translations[langToUse][key] : "";
            
            if (!finalStr) return;

            // Cancela qualquer animação anterior nesse elemento
            if (el._langTween) el._langTween.kill();

            // Se for o carregamento inicial, traduz direto, SEM animação
            if (isInitialLoad) {
                if (key === 'hero-desc' || key === 'about-p1' || key === 'contact-title' || finalStr.includes('<')) {
                    el.innerHTML = finalStr;
                } else {
                    el.textContent = finalStr;
                }
                gsap.set(el, { opacity: 1, y: 0 }); // Garante que está visível
            } 
            // Se for troca de idioma pelo usuário, faz a animação
            else {
                if (finalStr.includes('<')) {
                    el._langTween = gsap.to(el, {
                        opacity: 0, 
                        duration: 0.15, 
                        onComplete: () => {
                            el.innerHTML = finalStr;
                            gsap.to(el, { opacity: 1, duration: 0.3 });
                        }
                    });
                } else {
                    gsap.set(el, { opacity: 1 });

                    let obj = { step: 0 };
                    
                    el._langTween = gsap.to(obj, {
                        step: finalStr.length,
                        duration: 0.6,
                        delay: index * 0.050, 
                        ease: "power2.inOut",
                        onUpdate: () => {
                            let currentStep = Math.floor(obj.step);
                            let result = "";
                            for (let i = 0; i < finalStr.length; i++) {
                                if (i < currentStep) {
                                    result += finalStr[i]; 
                                } else {
                                    if (finalStr[i] === " ") {
                                        result += " ";
                                    } else {
                                        result += letters[Math.floor(Math.random() * letters.length)]; 
                                    }
                                }
                            }
                            el.textContent = result;
                        },
                        onComplete: () => {
                            el.textContent = finalStr; 
                        }
                    });
                }
            }
        });

        updateResumeLink(langCode);
    }

    // Clique nas opções de idioma do menu suspenso
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const rawLang = e.currentTarget.getAttribute('data-i18n');
            const langCode = rawLang.replace('lang-', '').toLowerCase(); 
            
            const flagSrc = e.currentTarget.querySelector('img').src;

            // O terceiro parâmetro (false) indica que NÃO é o carregamento inicial, então TEM animação
            changeLanguage(langCode, flagSrc, false); 
        });
    });

    // Detecta o idioma do usuário automaticamente e traduz a tela ao carregar
    function detectUserLanguage() {
        const userBrowserLang = navigator.language.toLowerCase(); 
        const supportedLangs = Object.keys(translations); 
        
        let initialLang = 'pt-br'; 
        let flagSrc = '/img/flags/br.png'; 
        
        if (supportedLangs.includes(userBrowserLang)) {
            initialLang = userBrowserLang;
        } else {
            const shortLang = userBrowserLang.split('-')[0]; 
            if (supportedLangs.includes(shortLang)) {
                 initialLang = shortLang;
            }
        }
        
        const matchingOption = document.querySelector(`[data-i18n="lang-${initialLang}"]`);
        if(matchingOption) {
            const imgEl = matchingOption.querySelector('img');
            if(imgEl) flagSrc = imgEl.src;
        }

        // O terceiro parâmetro (true) indica que É o carregamento inicial, então NÃO tem animação
        changeLanguage(initialLang, flagSrc, true);
    }

    detectUserLanguage();
}