// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var hornSelect = document.getElementById('horn-select');
  var button = document.querySelector('button');
  var audioSlider = document.getElementById('volume');
  var audioSliderImage = document.getElementById('volume-controls').querySelector('img');
  var audio = document.getElementsByClassName('hidden')[0];
  var img = document.querySelector('img');
  const confetti = new JSConfetti();
  
  audio.volume = 0.5;
  audioSliderImage.src = 'assets/icons/volume-level-1.svg';
  
  hornSelect.addEventListener('change', function() {
    let selectedHorn = hornSelect.value;
  
    switch(selectedHorn){
      case 'air-horn':
        img.src = 'assets/images/air-horn.svg';
        audio.src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        img.src = 'assets/images/car-horn.svg';
        audio.src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        img.src = 'assets/images/party-horn.svg';
        audio.src = 'assets/audio/party-horn.mp3';
        break;
    }
  });

  button.addEventListener('click', function() {
    if(hornSelect.value === 'party-horn'){
      confetti.addConfetti();
    }
    audio.currentTime = 0;
    audio.play();
  });

  audioSlider.addEventListener('input', function() {
    if(audioSlider.value == 0){
      audioSliderImage.src = 'assets/icons/volume-level-0.svg';
    }
    else if(audioSlider.value < 33){
      audioSliderImage.src = 'assets/icons/volume-level-1.svg';
    }
    else if(audioSlider.value < 67){
      audioSliderImage.src = 'assets/icons/volume-level-2.svg';
    }
    else{
      audioSliderImage.src = 'assets/icons/volume-level-3.svg';
    }
    audio.volume = audioSlider.value / 100;
  });

}