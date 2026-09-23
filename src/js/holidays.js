/* src/js/holidays.js */
export function initHolidays() {
    // =========================================================================
    // 1. MOTOR DE EVENTOS: CONFIGURAÇÃO DE DATAS COMEMORATIVAS E GEEKS
    // =========================================================================
    const feriados = {
        // --- EVENTOS ESPECIAIS (SEM CHUVA DE ITENS, SÓ MUDANÇA DE TEMA) ---
        lancamentoGTA6: {
            ativo: true,
            inicio: { mes: 11, dia: 15 }, 
            fim: { mes: 11, dia: 30 },
            novaLogo: "", 
            imagemHero: "img/holidays/herogta.png", 
            imagemFooter: "",
            imagemVoadora: "",
            intervaloVoo: 0,
            favicon: "", 
            removerSombraHero: true,
            
            // Adiciona imagens soltas na Hero
            decoracoesHero: [
                {
                    src: "img/holidays/arvores.png", 
                    estilos: {
                        position: "absolute",
                        bottom: "-5%",       
                        left: "-5%",         
                        height: "105%",      
                        zIndex: "0",         
                        transform: "scaleX(-1)", 
                        opacity: "0.85"      
                    }
                },
                {
                    src: "img/holidays/arvores.png", 
                    estilos: {
                        position: "absolute",
                        bottom: "-5%",       
                        right: "-5%",        
                        height: "105%",      
                        zIndex: "0",         
                        transform: "scaleX(1)",  
                        opacity: "0.85"
                    }
                }
            ],

            cssVars: {
                "--bg-main": "linear-gradient(135deg, rgba(48, 63, 190, 1) 0%, rgba(105, 66, 180, 1) 15%, rgba(200, 142, 198, 1) 25%, rgba(206, 76, 169, 1) 35%)",
                "--bg-main1": "#3240c1", 
                "--accent-color": "#d04ba7",
                "--bg-dropdown": "#ab56b4",
                "--border-light": "rgba(255, 255, 255, .2)"
            },
            corBotao: "linear-gradient(90deg,rgba(50, 64, 193, 1) 0%, rgba(104, 66, 180, 1) 50%);",
            fontFamily: "'Pricedown', 'Montserrat', sans-serif" 
        },

        // --- DATAS GEEKS E TECH ---
        starWarsDay: {
            ativo: true,
            inicio: { mes: 5, dia: 1 },
            fim: { mes: 5, dia: 30 }, 
            novaLogo: "", 
            imagemHero: "", 
            imagemFooter: "",
            imagemVoadora: "", 
            intervaloVoo: 90000, 
            favicon: "", 
            fundoEstrelado: true, 
            fontFamily: "'Star Jedi', 'Montserrat', sans-serif", 
            icone: ["fa-solid fa-meteor", "fa-solid fa-star"], 
            cores: ["#ffe81f", "#ffffff", "#ff0000", "#0000ff"],
            fisica: { gravidade: 3, vento: .1, rotacao: 5, tamanhoBase: 4, intensidade: .05, sway: 0 } 
        },
        diaDoProgramador: {
            ativo: false, 
            inicio: { mes: 9, dia: 12 }, 
            fim: { mes: 9, dia: 14 },
            novaLogo: "", 
            imagemHero: "", 
            imagemFooter: "",
            imagemVoadora: "", 
            intervaloVoo: 90000, 
            favicon: "", 
            icone: ["fa-solid fa-code", "fa-solid fa-terminal", "fa-solid fa-bug"], 
            cores: ["#00ff00", "#33ff33", "#ffffff"], 
            cssVars: { "--accent-color": "#00ff00" },
            fisica: { gravidade: 1.5, vento: 0, rotacao: 0, tamanhoBase: 12, intensidade: .05, sway: 0 } 
        },
        diaDaToalha: {
            ativo: true, 
            inicio: { mes: 5, dia: 24 },
            fim: { mes: 5, dia: 26 },
            novaLogo: "", 
            imagemHero: "", 
            imagemFooter: "",
            imagemVoadora: "", 
            intervaloVoo: 0, 
            favicon: "", 
            icone: ["fa-solid fa-hand-towel", "fa-solid fa-rocket", "fa-solid fa-robot"], 
            cores: ["#ffffff", "#cccccc", "#646cff"],
            fisica: { gravidade: 1, vento: .5, rotacao: 5, tamanhoBase: 15, intensidade: .02, sway: 50 }
        },

        // --- FERIADOS MUNDIAIS E BRASILEIROS ---
        copaDoMundo: {
            ativo: true,
            anos: [2026, 2030, 2034, 2038, 2042], 
            inicio: { mes: 6, dia: 10 },
            fim: { mes: 7, dia: 20 },
            novaLogo: "", 
            imagemHero: "", 
            imagemFooter: "",
            imagemVoadora: "", 
            intervaloVoo: 0, 
            favicon: "", 
            icone: ["fa-regular fa-futbol", "fa-solid fa-trophy", "fa-solid fa-flag"], 
            cores: ["#009c3b", "#ffdf00", "#002776", "#ffffff"], 
            fisica: { gravidade: 1.5, vento: .2, rotacao: 10, tamanhoBase: 12, intensidade: .03, sway: 20 }
        },
        saoJoao: {
            ativo: false,
            inicio: { mes: 6, dia: 15 },
            fim: { mes: 6, dia: 30 },
            novaLogo: "", 
            imagemHero: "", 
            imagemFooter: "",
            imagemVoadora: "", 
            intervaloVoo: 0, 
            favicon: "", 
            icone: ["fa-solid fa-fire", "fa-solid fa-star"], 
            cores: ["#ff0000", "#ffff00", "#0000ff", "#008000"],
            fisica: { gravidade: .8, vento: 1.5, rotacao: 5, tamanhoBase: 10, intensidade: .04, sway: 80 }
        },
        anoNovoChines: {
            ativo: true,
            inicio: { mes: 2, dia: 5 }, 
            fim: { mes: 2, dia: 20 }, 
            novaLogo: "", 
            imagemHero: "", 
            imagemFooter: "",
            imagemVoadora: "", 
            intervaloVoo: 0, 
            favicon: "", 
            icone: ["fa-solid fa-dragon", "fa-solid fa-coins"], 
            cores: ["#ff0000", "#ffd700"], 
            fisica: { gravidade: 1, vento: .3, rotacao: 3, tamanhoBase: 14, intensidade: .03, sway: 40 }
        },
        valentinesDay: {
            ativo: true,
            inicio: { mes: 2, dia: 12 },
            fim: { mes: 2, dia: 15 },
            novaLogo: "", 
            imagemHero: "", 
            imagemFooter: "",
            imagemVoadora: "", 
            intervaloVoo: 0, 
            favicon: "", 
            icone: ["fa-solid fa-heart", "fa-solid fa-envelope-open-text"], 
            cores: ["#ff4d4d", "#ffb3b3", "#ffffff"],
            fisica: { gravidade: .6, vento: .2, rotacao: 2, tamanhoBase: 12, intensidade: .02, sway: 60 }
        },
        diaDosNamorados: {
            ativo: true,
            inicio: { mes: 6, dia: 8 },
            fim: { mes: 6, dia: 13 },
            novaLogo: "", 
            imagemHero: "img/holidays/heronamorados.png", 
            imagemFooter: "",
            imagemVoadora: "", 
            intervaloVoo: 0, 
            favicon: "", 
            icone: ["fa-solid fa-heart", "fa-solid fa-heart-pulse"], 
            cores: ["#e60000", "#ff6666", "#ffffff"],
            fisica: { gravidade: .6, vento: .2, rotacao: 2, tamanhoBase: 16, intensidade: .02, sway: 60 }
        },
        pascoa: {
            ativo: true,
            inicio: { mes: 3, dia: 25 },
            fim: { mes: 4, dia: 15 },
            novaLogo: "", 
            imagemHero: "img/holidays/heropascoa.png", 
            imagemFooter: "",
            imagemVoadora: "", 
            intervaloVoo: 0, 
            favicon: "", 
            icone: ["fa-solid fa-egg", "fa-solid fa-carrot"], 
            cores: ["#ffb3ba", "#baffc9", "#bae1ff", "#ffffba", "#e5ebe9"], 
            fisica: { gravidade: 1.2, vento: 0, rotacao: 5, tamanhoBase: 20, intensidade: .03, sway: 10 }
        },
        diaDasMaes: {
            ativo: true,
            inicio: { mes: 5, dia: 5 },
            fim: { mes: 5, dia: 15 },
            novaLogo: "", 
            imagemHero: "", 
            imagemFooter: "",
            imagemVoadora: "", 
            intervaloVoo: 0, 
            favicon: "", 
            icone: ["fa-solid fa-flower", "fa-solid fa-heart"], 
            cores: ["#ff99cc", "#ff3385", "#ffffff"],
            fisica: { gravidade: .8, vento: .3, rotacao: 4, tamanhoBase: 12, intensidade: .02, sway: 40 }
        },
        diaDaMulher: {
            ativo: false,
            inicio: { mes: 3, dia: 5 },
            fim: { mes: 3, dia: 10 },
            novaLogo: "", 
            imagemHero: "", 
            imagemFooter: "",
            imagemVoadora: "", 
            intervaloVoo: 0, 
            favicon: "", 
            icone: ["fa-solid fa-venus", "fa-solid fa-star"], 
            cores: ["#993399", "#df80ff", "#ffffff"],
            fisica: { gravidade: .8, vento: .2, rotacao: 2, tamanhoBase: 12, intensidade: .02, sway: 30 }
        },
        diaDosPais: {
            ativo: false,
            inicio: { mes: 8, dia: 5 },
            fim: { mes: 8, dia: 15 },
            novaLogo: "", 
            imagemHero: "", 
            imagemFooter: "",
            imagemVoadora: "", 
            intervaloVoo: 0, 
            favicon: "", 
            icone: ["fa-solid fa-tie"], 
            cores: ["#3366cc", "#003366", "#ffffff"],
            fisica: { gravidade: 1, vento: .2, rotacao: 1, tamanhoBase: 15, intensidade: .02, sway: 20 }
        },
        natal: {
            ativo: true, 
            inicio: { mes: 12, dia: 10 }, 
            fim: { mes: 12, dia: 25 },
            novaLogo: "", 
            imagemHero: "img/holidays/heronatal.png", 
            imagemFooter: "",
            imagemVoadora: "", 
            intervaloVoo: 0, 
            favicon: "", 
            icone: ["fa-solid fa-snowflake"], 
            cores: ["#ffffff", "#d9d9d9"],
            fisica: { gravidade: .7, vento: .5, rotacao: 2, tamanhoBase: 6, intensidade: .08, sway: 80 }
        }
    };

    // =========================================================================
    // 2. DETECTOR DE DATAS
    // =========================================================================
    const hoje = new Date();
    const anoAtual = hoje.getFullYear(); 
    const mesAtual = hoje.getMonth() + 1; 
    const diaAtual = hoje.getDate();

    let eventoAtivo = null;
    const dataAtualNum = mesAtual * 100 + diaAtual;

    for (const [nome, config] of Object.entries(feriados)) {
        if (!config.ativo) continue;
        if (config.anos && !config.anos.includes(anoAtual)) continue;

        const dataInicioNum = config.inicio.mes * 100 + config.inicio.dia;
        const dataFimNum = config.fim.mes * 100 + config.fim.dia;

        let taNoPeriodo = false;

        if (config.inicio.mes > config.fim.mes) {
            if (dataAtualNum >= dataInicioNum || dataAtualNum <= dataFimNum) {
                taNoPeriodo = true;
            }
        } else {
            if (dataAtualNum >= dataInicioNum && dataAtualNum <= dataFimNum) {
                taNoPeriodo = true;
            }
        }

        if (taNoPeriodo) {
            eventoAtivo = config;
            console.log("Feriado Ativo Encontrado: ", nome); 
            break; 
        }
    }

    if (!eventoAtivo) {
        console.log("Nenhum feriado ativo hoje.");
        return; 
    }

    // =========================================================================
    // 3. APLICADOR DE TEMAS E IMAGENS 
    // =========================================================================

    // 3.0. Troca Favicon do Site
    if (eventoAtivo.favicon) {
        const faviconLink = document.querySelector("link[rel*='icon']");
        if (faviconLink) {
            faviconLink.href = eventoAtivo.favicon;
        } else {
            const newFavicon = document.createElement("link");
            newFavicon.rel = "icon";
            newFavicon.href = eventoAtivo.favicon;
            document.head.appendChild(newFavicon);
        }
    }

    // 3.1. Variáveis CSS Globais
    if (eventoAtivo.cssVars) {
        
        for (const [variavel, valor] of Object.entries(eventoAtivo.cssVars)) {
            document.documentElement.style.setProperty(variavel, valor);
        }
        
        const style = document.createElement("style");
        
        // A MÁGICA: background-attachment: fixed faz o gradiente se esticar
        // baseado no tamanho da janela do usuário, e não no tamanho da seção.
        // Isso devolve aquele visual suave de "uma grande cor de fundo", 
        // mas as seções continuam sólidas com suas bordas e sombras!
        style.innerHTML = `
            .hero-section, 
            .about-section, 
            .services-section, 
            .projects-section, 
            .formations-section,
            .contact-section,
            .cosmus-section {
                background: linear-gradient(130deg,rgba(73, 64, 187, 1) 60%, rgba(140, 94, 186, 1) 85%) !important;
                background-attachment: fixed !important; 
            }
            
            /* Destaque para os cards não "sumirem" no fundo colorido */
            .project-card,
            .formation-card,
            .service-item,
            .contact-form-wrapper {
                
            }

            /* Footer com a cor secundária do tema */
            .footer-section {
                background: var(--bg-main1) !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Altera Botão e Remove Sombra
    if(eventoAtivo.corBotao || eventoAtivo.removerSombraHero) {
        const style = document.createElement("style");
        let cssExtra = "";
        
        if (eventoAtivo.corBotao) {
            cssExtra += `
                .glow-btn { background: ${eventoAtivo.corBotao} !important; border: none !important;} 
                .glow-btn::before { background: ${eventoAtivo.corBotao} !important; }
            `;
        }
        if (eventoAtivo.removerSombraHero) {
            cssExtra += `.hero-mascot { filter: none !important; }`;
        }
        style.innerHTML = cssExtra;
        document.head.appendChild(style);
    }

    // 3.2. Substituição de Fonte Global
    if (eventoAtivo.fontFamily) {
        const style = document.createElement("style");
        style.innerHTML = `
            h1, h2, h3, h4, p, a, span, .block-text, .hero-desc, button, .live-project-btn {
                font-family: ${eventoAtivo.fontFamily} !important;
            }
        `;
        document.head.appendChild(style);
    }

    // 3.3. Fundo Estrelado Dinâmico
    if (eventoAtivo.fundoEstrelado) {
        const spaceContainer = document.createElement("div");
        spaceContainer.style.position = "fixed";
        spaceContainer.style.inset = "0";
        spaceContainer.style.zIndex = "9997"; 
        spaceContainer.style.pointerEvents = "none";
        document.body.appendChild(spaceContainer);

        for (let i = 0; i < 100; i++) {
            const star = document.createElement("div");
            star.style.position = "absolute";
            star.style.width = Math.random() * 3 + "px";
            star.style.height = star.style.width;
            star.style.background = "#fff";
            star.style.borderRadius = "50%";
            star.style.left = Math.random() * 100 + "vw";
            star.style.top = Math.random() * 100 + "vh";
            star.style.opacity = Math.random();
            star.style.boxShadow = "0 0 5px #fff";
            
            star.style.animation = `piscar ${Math.random() * 3 + 1}s infinite alternate`;
            spaceContainer.appendChild(star);
        }
        
        const style = document.createElement("style");
        style.innerHTML = `@keyframes piscar { from { opacity: .2; } to { opacity: 1; } }`;
        document.head.appendChild(style);
    }

    // 3.4. Troca Imagens se fornecidas
    if (eventoAtivo.novaLogo) {
        const logoImg = document.querySelector(".navbar .glitch-logo");
        if (logoImg) logoImg.src = eventoAtivo.novaLogo;
    }

    if (eventoAtivo.imagemHero) {
        const heroImg = document.querySelector(".hero-mascot");
        if (heroImg) heroImg.src = eventoAtivo.imagemHero;
    }

    // 3.5. Decorações (Árvores) - COM SOLUÇÃO DO MOUSE E VENTO
    if (eventoAtivo.decoracoesHero) {
        // Voltei para a hero-section para as árvores ficarem nas extremidades da tela!
        const heroSection = document.querySelector(".hero-section"); 
        if (heroSection) {
            eventoAtivo.decoracoesHero.forEach(dec => {
                // 1. Criamos a "caixa" (wrapper) que o Mouse vai mover
                const wrapper = document.createElement("div");
                wrapper.classList.add("hero-tree");
                
                // Copia os estilos, mas tira o 'transform' para não dar conflito com o GSAP
                const transformInvertido = dec.estilos.transform;
                const estilosSemTransform = { ...dec.estilos };
                delete estilosSemTransform.transform;
                
                Object.assign(wrapper.style, estilosSemTransform);
                wrapper.style.pointerEvents = "none"; 
                
                // 2. Criamos a imagem que o CSS vai balançar (vento)
                const img = document.createElement("img");
                img.src = dec.src;
                img.style.width = "100%";
                img.style.height = "100%";
                img.style.objectFit = "contain";
                img.style.transformOrigin = "bottom center";
                
                // Aplica a inversão e o vento apenas na imagem
                if (transformInvertido === "scaleX(-1)") {
                   img.style.animation = `treeSwayInverted ${Math.random() * 2 + 3}s ease-in-out infinite alternate`;
                } else {
                   img.style.animation = `treeSway ${Math.random() * 2 + 3}s ease-in-out infinite alternate`;
                }

                wrapper.appendChild(img);
                heroSection.appendChild(wrapper);
            });
            
            const style = document.createElement("style");
            style.innerHTML = `
                @keyframes treeSway {
                    0% { transform: rotate(-2deg); }
                    100% { transform: rotate(2deg); }
                }
                @keyframes treeSwayInverted {
                    0% { transform: scaleX(-1) rotate(-2deg); }
                    100% { transform: scaleX(-1) rotate(2deg); }
                }
                /* Garante que o Caio fique por cima de tudo */
                .hero-center { z-index: 10 !important; }
                .hero-tree { z-index: 1 !important; }
            `;
            document.head.appendChild(style);
        }
    }

    if (eventoAtivo.imagemFooter) {
        const footer = document.querySelector(".footer-section");
        if (footer) {
            const imgFooterWrapper = document.createElement("div");
            imgFooterWrapper.style.position = "absolute";
            imgFooterWrapper.style.bottom = "0";
            imgFooterWrapper.style.left = "0";
            imgFooterWrapper.style.width = "100%";
            imgFooterWrapper.style.pointerEvents = "none";
            imgFooterWrapper.style.zIndex = "1"; 

            const imgFooter = document.createElement("img");
            imgFooter.src = eventoAtivo.imagemFooter;
            imgFooter.style.width = "100%";
            imgFooter.style.display = "block";
            
            imgFooterWrapper.appendChild(imgFooter);
            footer.appendChild(imgFooterWrapper);
        }
    }

    if (eventoAtivo.imagemVoadora) {
        const voador = document.createElement("img");
        voador.src = eventoAtivo.imagemVoadora;
        voador.style.position = "fixed"; 
        voador.style.left = "-300px"; 
        voador.style.width = "150px"; 
        voador.style.zIndex = "9999"; 
        voador.style.pointerEvents = "none"; 
        document.body.appendChild(voador);

        const iniciarVoo = () => {
            voador.style.top = `${Math.floor(Math.random() * 20) + 10}%`;
            voador.style.transition = "none";
            voador.style.transform = `translateX(0px)`;
            setTimeout(() => {
                voador.style.transition = "transform 10s linear"; 
                voador.style.transform = `translateX(${window.innerWidth + 500}px)`;
            }, 100);
        };
        setTimeout(iniciarVoo, 3000);
        setInterval(iniciarVoo, eventoAtivo.intervaloVoo || 120000);
    }

    // =========================================================================
    // 4. EFEITO DE PARTÍCULAS
    // =========================================================================
    if (!eventoAtivo.fisica || eventoAtivo.fisica.intensidade <= 0 || !eventoAtivo.icone) return;

    const weatherContainer = document.createElement("div");
    weatherContainer.style.position = "fixed";
    weatherContainer.style.inset = "0";
    weatherContainer.style.pointerEvents = "none";
    weatherContainer.style.zIndex = "9998"; 
    weatherContainer.style.overflow = "hidden";
    document.body.appendChild(weatherContainer);

    let mouseX = -1000;
    let mouseY = -1000;
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    let particulas = [];

    class Particula {
        constructor() {
            this.element = document.createElement("i");
            const iconesPossiveis = eventoAtivo.icone;
            this.element.className = iconesPossiveis[Math.floor(Math.random() * iconesPossiveis.length)];
            this.element.style.color = eventoAtivo.cores[Math.floor(Math.random() * eventoAtivo.cores.length)];
            
            this.element.style.position = "absolute";
            this.element.style.opacity = (Math.random() * .5 + .3).toFixed(2); 
            this.element.style.fontSize = `${Math.random() * 8 + eventoAtivo.fisica.tamanhoBase}px`; 
            
            this.x = Math.random() * window.innerWidth;
            this.y = -50; 
            
            this.vy = Math.random() * 1.5 + eventoAtivo.fisica.gravidade; 
            this.vx = (Math.random() - .5) * eventoAtivo.fisica.vento; 
            this.rotacao = Math.random() * 360;
            this.velocidadeRotacao = (Math.random() - .5) * eventoAtivo.fisica.rotacao;
            this.angSway = Math.random() * Math.PI * 2;

            weatherContainer.appendChild(this.element);
        }

        update() {
            const dx = this.x - mouseX;
            const dy = this.y - mouseY;
            const distancia = Math.sqrt(dx * dx + dy * dy);
            
            if (distancia < 80) { 
                const forcaImpacto = (80 - distancia) / 100; 
                this.vx += (dx / distancia) * forcaImpacto; 
                this.vy += (dy / distancia) * forcaImpacto; 
                this.velocidadeRotacao += (Math.random() - .5) * 20; 
            }

            const forcaBalanço = (eventoAtivo.fisica.sway || 0) / 100;
            this.angSway += .02;

            this.x += this.vx + Math.sin(this.angSway) * forcaBalanço;
            this.y += this.vy;
            this.rotacao += this.velocidadeRotacao;

            this.element.style.transform = `translate(${this.x}px, ${this.y}px) rotate(${this.rotacao}deg)`;
            
            return this.y < window.innerHeight + 50 && this.x > -50 && this.x < window.innerWidth + 50; 
        }
    }

    const animate = () => {
        if (Math.random() < eventoAtivo.fisica.intensidade) { 
            particulas.push(new Particula());
        }
        particulas = particulas.filter(p => {
            const taViva = p.update();
            if (!taViva) p.element.remove();
            return taViva;
        });
        requestAnimationFrame(animate);
    };

    animate();
}