// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  var img = document.querySelector('img');
  var voiceSelect = document.getElementById('voice-select');
  var textArea = document.getElementById('text-to-speak');
  var button = document.querySelector('button');

  var voices = []

  function createOptions() {
    voices = synth.getVoices();
  
    for(let i = 0; i < voices.length; i++){
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  createOptions();
  if(speechSynthesis.onvoiceschanged !== undefined){
    speechSynthesis.onvoiceschanged = createOptions;
  }

  button.addEventListener('click', function(event) {
    if(textArea.value === '' || voiceSelect.selectedOptions[0].disabled){
      event.preventDefault();
      return;
    }
    
    const utterThis = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    utterThis.voice = voices.find(voice => voice.name === selectedOption);
    
    utterThis.addEventListener('start', function() {
      img.src = '/assets/images/smiling-open.png';
    });
    
    utterThis.addEventListener('end', function() {
      img.src = '/assets/images/smiling.png'
    });
    
    synth.speak(utterThis);
  });


}