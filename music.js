document.addEventListener('DOMContentLoaded', function() {

    let playButton = document.getElementById('play');
    
    let audio = new Audio("music/wwat.mp3");
    audio.volume = 0.4;
    let count = 0;

    function playMusic() {
        if (count === 0) {
            count = 1;
            audio.play();
            playButton.textContent = 'Click To Pause Music';
        } else {
            count = 0;
            audio.pause();
            audio.currentTime = 0;
            playButton.textContent = 'Click To Play Music';
        }
    }

    if (playButton) {
        playButton.addEventListener('click', playMusic);
    } else {
        console.error('Play button not found');
    }
});
