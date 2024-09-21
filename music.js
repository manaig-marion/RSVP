document.addEventListener('DOMContentLoaded', function() {

    let playButton = document.getElementById('play');
    
    let audio = new Audio("music/dlw.mp3");
    audio.volume = 0.4;
    let count = 0;

    function playMusic() {
        if (count === 0) {
            count = 1;
            audio.play();
        } else {
            count = 0;
            audio.pause();
            audio.currentTime = 0;
        }
    }

    if (playButton) {
        playButton.addEventListener('click', playMusic);
    } else {
        console.error('Play button not found');
    }
});
