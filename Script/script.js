// Seleciona os elementos do áudio e do ícone
const musicIcon = document.getElementById('music-icon');
const backgroundMusic = document.getElementById('background-music');
backgroundMusic.volume = 0.3;

// Adiciona um evento de clique no ícone
musicIcon.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play()
            .then(() => console.log('Áudio reproduzido'))
            .catch(err => console.error('Erro ao reproduzir áudio:', err));
    } else {
        backgroundMusic.pause();
        console.log('Áudio pausado');
    }
});