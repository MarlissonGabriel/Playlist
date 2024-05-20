// chamdando variaveis
const progressBar = document.getElementById("progressBar");
const buttonPlay = document.querySelector('#play');
const buttonPause = document.querySelector('#pause');
const tempoAtual = document.getElementById("tempoAtual");
const tempoTotal = document.getElementById("tempoTotal");
const buttonVo = document.querySelector('#voltar');
const buttonAv = document.querySelector('#avancar');

// metodo de audio

const music = new Audio('./assets/Dandara.mp3');
let interval;

//funçoes

function updateMusic() {
    console.log("Updating music...");
    music.load(); 
  }
  
  function formatarTempo(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
  }
  
  function updateMusicTime() {
    const progresso = (music.currentTime / music.duration) * 100;
    progressBar.value = progresso;
    tempoAtual.textContent = formatarTempo(music.currentTime);
  }
  
  music.addEventListener('loadedmetadata', function () {
    tempoTotal.textContent = formatarTempo(music.duration);
    play(); 
  });
  
  function play() {
    buttonPlay.classList.toggle('hide');
    buttonPause.classList.toggle('hide');
    music.play();
    interval = setInterval(updateMusicTime, 1000);
  }
  
  function pause() {
    buttonPlay.classList.toggle('hide');
    buttonPause.classList.toggle('hide');
    music.pause();
    clearInterval(interval);
  }
  
  buttonPlay.addEventListener('click', play);
  buttonPause.addEventListener('click', pause);

  buttonAv.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
  

  buttonVo.addEventListener('click', () => {
    window.location.href = 'index2.html';
  });
  
  updateMusic();