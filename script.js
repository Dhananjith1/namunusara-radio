const playButton = document.getElementById('playButton');
const playIcon = document.getElementById('playIcon');
const statusText = document.getElementById('statusText');
const audioStream = document.getElementById('audioStream');

let isPlaying = false;

playButton.addEventListener('click', function() {
    if (isPlaying) {
        audioStream.pause();
        playIcon.src = "https://img.icons8.com/material-rounded/24/000000/play.png";
        statusText.textContent = 'LIVE';
    } else {
        audioStream.play();
        playIcon.src = "https://img.icons8.com/material-rounded/24/000000/pause.png";
        statusText.textContent = 'PLAYING';
    }
    isPlaying = !isPlaying;
});
