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
    
    // Tocar a playlist em ordem aleatória (Shuffle) ao iniciar o site?
    const misturarMusicas = true; 
    
    // Ativar o efeito "Fade" de 5 segundos na transição de músicas?
    const usarEfeitoFade = true;

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
        },
        { 
            name: "Little Dark Age", 
            artist: "MGMT", 
            src: "/music/MGMT - Little Dark Age (Letra) - Coimbrice.mp3", 
            art: "/music/little dark age.png" 
        },
        { 
            name: "Phantom Liberty", 
            artist: "Dawid Podsiadło", 
            src: "/music/Dawid Podsiadło, P.T. Adamczyk — Phantom Liberty (Official Cyberpunk 2077 Music Video) - Cyberpunk 2077.mp3", 
            art: "/music/Dawid Podsiadło, P.T. Adamczyk — Phantom Liberty (Official Cyberpunk 2077 Music Video) - Cyberpunk 2077.png" 
        },
        { 
            name: "End Of Beginning", 
            artist: "Djo", 
            src: "/music/Djo - End Of Beginning (Official Audio) - Djo Music.mp3", 
            art: "/music/Djo - End Of Beginning (Official Audio) - Djo Music.png" 
        },
        { 
            name: "After Dark", 
            artist: "Mr. Kitty", 
            src: "/music/after dark.mp3", 
            art: "/music/after dark.png" 
        },
        { 
            name: "I Like The Way You Kiss Me", 
            artist: "Artemas", 
            src: "/music/Artemas - i like the way you kiss me (Instrumental) - Urmusicsplitter.mp3", 
            art: "/music/Artemas - i like the way you kiss me (Instrumental) - Urmusicsplitter.png" 
        },
        { 
            name: "DtMF Piano version", 
            artist: "Lil Baby Grand", 
            src: "/music/DtMF (soft piano version) - Lil Baby Grand.mp3", 
            art: "/music/DtMF (soft piano version) - Lil Baby Grand.png" 
        }
    ];

    // Se a opção Shuffle estiver ativada, mistura a array da playlist antes de começar
    if (misturarMusicas) {
        playlist = playlist.sort(() => Math.random() - 0.5);
    }

    let currentTrackIdx = 0;
    let fadeOutDisparado = false; // Controle para não abaixar o volume várias vezes

    function loadTrack(idx) {
        if(!playlist[idx]) return;
        
        audio.src = playlist[idx].src;
        trackName.textContent = playlist[idx].name;
        
        if (trackArtist) {
            trackArtist.textContent = playlist[idx].artist || "Desconhecido";
        }

        trackArt.style.display = 'block'; 
        trackArt.src = playlist[idx].art;
        
        // Zera o controle de fade da música
        fadeOutDisparado = false;
        
        // Se usar o efeito, começa a música com volume 0 e sobe (Fade-in)
        if (usarEfeitoFade) {
            audio.volume = 0;
            gsap.to(audio, { volume: volSlider.value, duration: 2, ease: "power1.inOut" });
        } else {
            audio.volume = volSlider.value;
        }
    }
    
    loadTrack(0);

    // =========================================
    //  GERENCIAMENTO DE ESTADO COM "DUPLO TIMER"
    // =========================================
    let playerState = 'expanded'; 
    let idleTimer; 
    let edgeTimer; 
    let isMouseOver = false;

    function setState(newState) {
        playerState = newState;
        player.className = `music-player ${newState}`;
        
        if(newState === 'hidden-edge' || newState === 'expanded') {
            gsap.to(player, { x: 0, y: 0, duration: 0.5 });
        }
    }

    function resetIdleTimer(isInitialLoad = false) {
        if(playerState === 'hidden-edge') return; 
        
        if (isInitialLoad && window.innerWidth <= 768) {
            setState('collapsed');
            clearTimeout(idleTimer);
            clearTimeout(edgeTimer);
            
            edgeTimer = setTimeout(() => {
                if (playerState === 'collapsed' && !isMouseOver) {
                    setState('hidden-edge');
                }
            }, 4000);
            return;
        }
        
        setState('expanded');
        clearTimeout(idleTimer);
        clearTimeout(edgeTimer);
        
        idleTimer = setTimeout(() => {
            if(playerState === 'expanded' && !isMouseOver) {
                setState('collapsed');
                
                edgeTimer = setTimeout(() => {
                    if (playerState === 'collapsed' && !isMouseOver) {
                        setState('hidden-edge');
                    }
                }, 4000); 
            }
        }, 3000);
    }

    resetIdleTimer(true);

    player.addEventListener('mouseenter', () => {
        isMouseOver = true;
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

    window.addEventListener('scroll', () => {
        if(window.scrollY > 150 && playerState !== 'hidden-edge') {
            clearTimeout(idleTimer);
            clearTimeout(edgeTimer);
            setState('hidden-edge');
        } else if (window.scrollY <= 150 && playerState === 'hidden-edge') {
            resetIdleTimer();
        }
    });

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
    //  CONTROLES DE ÁUDIO E FADE-OUT
    // =========================================
    
    // Monitora o tempo da música para fazer o Fade-out nos últimos 5 segundos
    audio.addEventListener('timeupdate', () => {
        if (!usarEfeitoFade || fadeOutDisparado || isNaN(audio.duration)) return;
        
        // Se faltam 5 segundos ou menos para a música acabar...
        if (audio.duration - audio.currentTime <= 5) {
            fadeOutDisparado = true;
            // Abaixa o volume suavemente até quase zero usando o GSAP
            gsap.to(audio, { volume: 0.05, duration: 4.5, ease: "power1.inOut" });
        }
    });

    function togglePlay() {
        if (audio.paused) {
            audio.play().catch(() => console.log("Navegador bloqueou autoplay."));
            playPauseIcon.textContent = "pause";
            trackArt.classList.add('playing');
        } else {
            audio.pause();
            playPauseIcon.textContent = "play_arrow";
            trackArt.classList.remove('playing');
            // Se pausar, cancela qualquer fade acontecendo no GSAP
            gsap.killTweensOf(audio); 
        }
    }

    playPauseBtn.addEventListener('click', togglePlay);

    // Função auxiliar para transição manual (clicar em Next/Prev) com Fade rápido
    function changeTrackWithFade(directionFn) {
        const wasPlaying = !audio.paused;
        
        if (usarEfeitoFade && wasPlaying) {
            // Se estava tocando e clicou em mudar, faz um fade rápido de 0.5s antes de trocar
            gsap.to(audio, { 
                volume: 0, 
                duration: 0.5, 
                onComplete: () => {
                    directionFn();
                    if(wasPlaying) {
                        audio.play();
                        playPauseIcon.textContent = "pause";
                        trackArt.classList.add('playing');
                    }
                }
            });
        } else {
            // Se o fade estiver desligado ou a música já estiver pausada, troca de uma vez
            directionFn();
            if(wasPlaying) {
                audio.play();
                playPauseIcon.textContent = "pause";
                trackArt.classList.add('playing');
            } else {
                playPauseIcon.textContent = "play_arrow";
                trackArt.classList.remove('playing');
            }
        }
    }

    nextBtn.addEventListener('click', () => {
        changeTrackWithFade(() => {
            currentTrackIdx = (currentTrackIdx + 1) % playlist.length;
            loadTrack(currentTrackIdx);
        });
    });

    prevBtn.addEventListener('click', () => {
        changeTrackWithFade(() => {
            currentTrackIdx = (currentTrackIdx - 1 + playlist.length) % playlist.length;
            loadTrack(currentTrackIdx);
        });
    });

    volSlider.addEventListener('input', (e) => {
        // Se o usuário mexer no volume, cancela o fade automático para ele ter o controle de volta
        gsap.killTweensOf(audio); 
        audio.volume = e.target.value;
    });

    audio.addEventListener('ended', () => {
        // Vai pra próxima
        currentTrackIdx = (currentTrackIdx + 1) % playlist.length;
        loadTrack(currentTrackIdx);
        audio.play();
        playPauseIcon.textContent = "pause";
        trackArt.classList.add('playing');
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
        playlist = misturarMusicas ? newPlaylist.sort(() => Math.random() - 0.5) : newPlaylist;
        currentTrackIdx = 0;
        loadTrack(0);
        audio.play().catch(()=>console.log("Autoplay bloqueado pelo navegador"));
        playPauseIcon.textContent = "pause";
        trackArt.classList.add('playing');
    };
}