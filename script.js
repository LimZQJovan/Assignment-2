var bgmusic = new Audio('../bg.mp3');

window.addEventListener("load", function() {
  var loaderWrapper = document.querySelector(".loader-wrapper");
  loaderWrapper.style.opacity = 0;
  setTimeout(function() {
    loaderWrapper.style.display = "none";
  }, 1000);
});

// Music Play/Pause Button Testing  
const muteButton = document.querySelector('.fa-volume-xmark'),
      unmuteButton = document.querySelector('.fa-volume-high');
      //bgmusic = document.getElementById('bgmusic')
      bgmusic.volume = 0.4;
      bgmusic.loop = true

      muteButton.style.display ='none';

// Music will play once user interact with browser
window.addEventListener('click', () => {
    bgmusic.play();
});


muteButton.addEventListener('click', () => {
  muteButton.style.display = 'none';
  unmuteButton.style.display = 'block';
  bgmusic.muted = false;
  bgmusic.play();
},200);

unmuteButton.addEventListener('click', () => {
  muteButton.style.display = 'block';
  unmuteButton.style.display = 'none';
  bgmusic.muted = true;
  bgmusic.pause();
},200);




