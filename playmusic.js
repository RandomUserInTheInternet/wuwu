const audioPlayer = document.querySelector('.audio-player');
const overlayaudio = document.querySelector('.overlay-audio');
const playButton = document.getElementById('playButton');
const overlay = document.getElementById('overlay');
const closeOverlayButton = document.getElementById('closeOverlay');

playButton.addEventListener('click', function() {
  audioPlayer.play(); // Play background music
  overlayaudio.play(); // Play audio in overlay
  overlay.style.display = "block"; // Show overlay
});

closeOverlayButton.addEventListener('click', function() {
  overlay.style.display = "none"; // Hide overlay
});
