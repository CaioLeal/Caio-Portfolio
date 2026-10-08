/* src/js/backtotop.js */

export function initBackToTop(lenisInstance) {
    const btn = document.getElementById('back-to-top');
    const aboutSection = document.getElementById('sobre'); // A segunda seção

    if (!btn || !aboutSection) return;

    // Função para verificar se deve mostrar ou esconder o botão
    function checkScroll() {
        // Pega a posição do topo da seção "Sobre" em relação ao viewport
        const aboutRect = aboutSection.getBoundingClientRect();
        
        // Se o topo da seção "Sobre" chegou no topo da tela (ou já passou), mostra o botão
        if (aboutRect.top <= 0) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    }

    // Ouve o evento de scroll da janela
    window.addEventListener('scroll', checkScroll);
    
    // Verifica logo de cara, caso a pessoa já atualize a página no meio dela
    checkScroll();

    // Ação de clicar no botão
    btn.addEventListener('click', () => {
        // Se você passou a instância do Lenis, ele usa a rolagem amanteigada
        if (lenisInstance) {
            lenisInstance.scrollTo(0, {
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
        } else {
            // Fallback para rolagem nativa do navegador
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
}