var bgmusic = new Audio('bg.mp3')

// Music Play/Pause Button Testing  
const muteButton = document.querySelector('.fa-volume-xmark'),
      unmuteButton = document.querySelector('.fa-volume-high');
      //bgmusic = document.getElementById('bgmusic')
      bgmusic.volume = 0.4;
      bgmusic.loop = true

      unmuteButton.style.display ='none';

// Music will play once user interact with browser
window.addEventListener('click', () => {
    bgmusic.play();
});


muteButton.addEventListener('click', () => {
  muteButton.style.display = 'none';
  unmuteButton.style.display = 'block';
  bgmusic.muted = true;
  bgmusic.pause();
},200);

unmuteButton.addEventListener('click', () => {
  muteButton.style.display = 'block';
  unmuteButton.style.display = 'none';
  bgmusic.muted = false;
  bgmusic.play();
},200);