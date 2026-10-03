/* src/js/music.js */
import gsap from "gsap";

export function initMusicPlayer() {
    const player = document.getElementById('music-player');
    const audio = document.getElementById('bg-audio');
    const playPauseBtn = document.getElementById('play-pause');
    const playPauseIcon = playPauseBtn.querySelector('span');
    const prevBtn = document.getElementById('prev-track');
    const nextBtn = document.getElementById('next-track');
    const volSlider = document.getElementById('volume-slider');
    const trackName = document.getElementById('track-name');
    const trackArtist = document.getElementById('track-artist');
    const trackArt = document.getElementById('track-art');

    if (!player) return;

    // =========================================
    //  CONFIGURAÇÕES DO PLAYER
    // =========================================
    const autoPlayInicial = false; 

    // =========================================
    //  SISTEMA DE PLAYLIST
    // =========================================
    let playlist = [
        { 
            name: "Midnight City", 
            artist: "M83", 
            src: "/music/M83 'Midnight City' Official video - M83.mp3", 
            art: "/music/M83 'Midnight City' Official video - M83.png" 
        },
        { 
            name: "Daffodil", 
            artist: "Edreeszy", 
            src: "/music/Edreeszy - Daffodil (Lyrics) - Edreeszy.mp3", 
            art: "/music/Edreeszy - Daffodil (Lyrics) - Edreeszy.png" 
        },
        { 
            name: "LMG", 
            artist: "Edreeszy", 
            src: "/music/Edreeszy - LMG (Lyrics) - Edreeszy.mp3", 
            art: "/music/Edreeszy - LMG (Lyrics) - Edreeszy.png" 
        }
    ];
    let currentTrackIdx = 0;

    function loadTrack(idx) {
        if(!playlist[idx]) return;
        
        audio.src = playlist[idx].src;
        trackName.textContent = playlist[idx].name;
        
        if (trackArtist) {
            trackArtist.textContent = playlist[idx].artist || "Desconhecido";
        }

        trackArt.style.display = 'block'; 
        trackArt.src = playlist[idx].art;
    }
    
    // Inicia carregando a primeira música
    loadTrack(0);

    // =========================================
    //  GERENCIAMENTO DE ESTADO COM "DUPLO TIMER"
    // =========================================
    let playerState = 'expanded'; 
    let idleTimer; // Tempo para virar bolinha
    let edgeTimer; // Tempo para ir pra borda
    let isMouseOver = false;

    function setState(newState) {
        playerState = newState;
        player.className = `music-player ${newState}`;
        
        // Zera a posição se ele voltar pro centro
        if(newState === 'hidden-edge' || newState === 'expanded') {
            gsap.to(player, { x: 0, y: 0, duration: 0.5 });
        }
    }

    // Adicionamos um parâmetro para saber se é a primeira vez que o site está carregando
    function resetIdleTimer(isInitialLoad = false) {
        if(playerState === 'hidden-edge') return; 
        
        // SEGREDO AQUI: Se for o carregamento inicial E a tela for de celular, inicia colapsado!
        if (isInitialLoad && window.innerWidth <= 768) {
            setState('collapsed');
            clearTimeout(idleTimer);
            clearTimeout(edgeTimer);
            
            // Vai direto pro cronômetro de se esconder na borda (4 segundos)
            edgeTimer = setTimeout(() => {
                if (playerState === 'collapsed' && !isMouseOver) {
                    setState('hidden-edge');
                }
            }, 4000);
            return;
        }
        
        setState('expanded');
        
        // Limpa os dois cronômetros
        clearTimeout(idleTimer);
        clearTimeout(edgeTimer);
        
        // 1º Cronômetro: 3 segundos para virar bolinha
        idleTimer = setTimeout(() => {
            if(playerState === 'expanded' && !isMouseOver) {
                setState('collapsed');
                
                // 2º Cronômetro: Passou mais 4 segundinhos como bolinha? Vai pra borda!
                edgeTimer = setTimeout(() => {
                    if (playerState === 'collapsed' && !isMouseOver) {
                        setState('hidden-edge');
                    }
                }, 4000); 
            }
        }, 3000);
    }

    // Inicializa passando "true" para forçar o check de celular logo na abertura
    resetIdleTimer(true);

    player.addEventListener('mouseenter', () => {
        isMouseOver = true;
        // Daqui em diante as chamadas não passam 'true', então ele sempre expande normalmente
        resetIdleTimer(); 
        gsap.to(player, { x: 0, y: 0, duration: 0.3 }); 
    });
    
    player.addEventListener('mouseleave', () => {
        isMouseOver = false;
        resetIdleTimer();
    });
    
    player.addEventListener('click', (e) => {
        if (e.target.closest('.player-ui')) return; 

        if(playerState === 'collapsed' || playerState === 'hidden-edge') {
            setState('expanded');
            resetIdleTimer();
            if (playerState === 'hidden-edge') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    });

    // Se rolar a página, força ele a ir pra borda imediatamente!
    window.addEventListener('scroll', () => {
        if(window.scrollY > 150 && playerState !== 'hidden-edge') {
            clearTimeout(idleTimer);
            clearTimeout(edgeTimer);
            setState('hidden-edge');
        } else if (window.scrollY <= 150 && playerState === 'hidden-edge') {
            // Se voltou pro topo da página, reinicia o ciclo
            resetIdleTimer();
        }
    });

    // =========================================
    // CORREÇÃO DO PARALAXE VOADOR
    // =========================================
    document.addEventListener("mousemove", (e) => {
        if (window.innerWidth > 992 && playerState !== 'hidden-edge' && window.scrollY < 200 && !isMouseOver) {
            const xPos = (e.clientX / window.innerWidth - 0.5) * 2;
            const yPos = (e.clientY / window.innerHeight - 0.5) * 2;
            gsap.to(player, { x: xPos * -20, y: yPos * -15, duration: 1, ease: "power2.out" });
        } 
        else if (window.scrollY >= 200 && playerState !== 'hidden-edge') {
             gsap.to(player, { x: 0, y: 0, duration: 0.5 });
        }
    });

    // =========================================
    //  CONTROLES DE ÁUDIO
    // =========================================
    audio.volume = volSlider.value;

    function togglePlay() {
        if (audio.paused) {
            audio.play().catch(() => console.log("Navegador bloqueou autoplay."));
            playPauseIcon.textContent = "pause";
            trackArt.classList.add('playing');
        } else {
            audio.pause();
            playPauseIcon.textContent = "play_arrow";
            trackArt.classList.remove('playing');
        }
    }

    playPauseBtn.addEventListener('click', togglePlay);

    nextBtn.addEventListener('click', () => {
        currentTrackIdx = (currentTrackIdx + 1) % playlist.length;
        loadTrack(currentTrackIdx);
        if(!audio.paused) audio.play();
    });

    prevBtn.addEventListener('click', () => {
        currentTrackIdx = (currentTrackIdx - 1 + playlist.length) % playlist.length;
        loadTrack(currentTrackIdx);
        if(!audio.paused) audio.play();
    });

    volSlider.addEventListener('input', (e) => {
        audio.volume = e.target.value;
    });

    audio.addEventListener('ended', () => {
        nextBtn.click();
    });

    if (autoPlayInicial) {
        audio.play().then(() => {
            playPauseIcon.textContent = "pause";
            trackArt.classList.add('playing');
        }).catch(() => {
            console.log("Autoplay bloqueado aguardando interação.");
            window.addEventListener('click', function startAudio() {
                togglePlay();
                window.removeEventListener('click', startAudio);
            }, { once: true });
        });
    }

    // =========================================
    //  FUNÇÃO GLOBAL PARA O HOLIDAYS.JS USAR
    // =========================================
    window.setMusicPlaylist = (newPlaylist) => {
        playlist = newPlaylist;
        currentTrackIdx = 0;
        loadTrack(0);
        audio.play().catch(()=>console.log("Autoplay bloqueado pelo navegador"));
        playPauseIcon.textContent = "pause";
        trackArt.classList.add('playing');
    };
}