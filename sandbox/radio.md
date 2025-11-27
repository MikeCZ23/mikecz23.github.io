---
title: Radio
sidebar: false
next: false
editLink: false
lastUpdated: false
publish: false
---

<h1 class="radioname">Rádia</h1>
<div class="radio-container">
    <!-- Rádio 1 -->
    <div class="radio-card simulator-radio">
    <img src="https://static.mytuner.mobi/media/tvos_radios/5K9k6Xu6s2.jpg" alt="Simulator Radio">
    <h3>Simulator Radio</h3>
    <div class="audio-player">
        <audio id="audio1" preload="auto">
            <source src="https://simulatorradio.stream/stream?t=17066077351706607744877" type="audio/mpeg">
            Váš prohlížeč nepodporuje přehrávání rádia.
        </audio>
        <div class="controls">
            <button id="playPause1"><i class="fas fa-play"></i></button>
            <div class="mute-volume">
                <button id="mute1"><i class="fas fa-volume-up"></i></button>
                <div class="volume">
                    <input type="range" id="volume1" min="0" max="1" step="0.01" value="1">
                </div>
            </div>
        </div><hr class="radio">
        <a href="https://simulatorradio.com/home" class="visit-website" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i> Navštívit oficiální web</a>
    </div>
</div>
  <!-- Rádio 2 -->
     <div class="radio-card truckers-fm">
        <img src="https://static2.mytuner.mobi/media/tvos_radios/wvnjbmar3vmu.png" alt="Radio 3">
        <h3>Truckers FM</h3>
        <div class="audio-player">
            <audio id="audio2" preload="auto">
                <source src="https://radio.truckers.fm/" type="audio/mpeg">
                Váš prohlížeč nepodporuje přehrávání rádia.
            </audio>
            <div class="controls">
                <button id="playPause2"><i class="fas fa-play"></i></button>
                <div class="mute-volume">
                    <button id="mute2"><i class="fas fa-volume-up"></i></button>
                    <div class="volume">
                        <input type="range" id="volume2" min="0" max="1" step="0.01" value="1">
                    </div>
                </div>
            </div><hr class="radio">
            <a href="https://truckers.fm/" class="visit-website" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i> Navštívit oficiální web</a>
        </div>
    </div>
    <!-- Rádio 3 -->
    <div class="radio-card trucksim-fm">
        <img src="https://static2.mytuner.mobi/media/tvos_radios/2BgjcLahUb.png" alt="Radio 3">
        <h3>TruckSim FM</h3>
        <div class="audio-player">
            <audio id="audio3" preload="auto">
                <source src="https://radio.trucksim.fm:8000/stream" type="audio/mpeg">
                Váš prohlížeč nepodporuje přehrávání rádia.
            </audio>
            <div class="controls">
                <button id="playPause3"><i class="fas fa-play"></i></button>
                <div class="mute-volume">
                    <button id="mute3"><i class="fas fa-volume-up"></i></button>
                    <div class="volume">
                        <input type="range" id="volume3" min="0" max="1" step="0.01" value="1">
                    </div>
                </div>
            </div><hr class="radio">
            <a href="https://www.trucksim.fm/" class="visit-website" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i> Navštívit oficiální web</a>
        </div>
    </div>
    <!-- Rádio 4 -->
    <div class="radio-card truckstopradio">
        <img src="https://cdn-profiles.tunein.com/s328253/images/logod.png" alt="Radio 2">
        <h3>TruckStopRadio</h3>
        <div class="audio-player">
            <audio id="audio4" preload="auto">
                <source src="https://oreo.truckstopradio.co.uk/listen/truckstopradio/radio.mp3" type="audio/mpeg">
                Váš prohlížeč nepodporuje přehrávání rádia.
            </audio>
            <div class="controls">
                <button id="playPause4"><i class="fas fa-play"></i></button>
                <div class="mute-volume">
                    <button id="mute4"><i class="fas fa-volume-up"></i></button>
                    <div class="volume">
                        <input type="range" id="volume4" min="0" max="1" step="0.01" value="1">
                    </div>
                </div>
            </div><hr class="radio">
            <a href="https://truckstopradio.co.uk/" class="visit-website" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i> Navštívit oficiální web</a>
        </div>
    </div>
    <!-- Rádio 5 -->
    <div class="radio-card simliveradio">
        <img src="https://cdn-profiles.tunein.com/s256550/images/logod.png?t=638678835590000000" alt="Radio 2">
        <h3>SimLiveRadio</h3>
        <div class="audio-player">
            <audio id="audio5" preload="auto">
                <source src="https://simliveradio.stream.laut.fm/simliveradio?ref=radiodns" type="audio/mpeg">
                Váš prohlížeč nepodporuje přehrávání rádia.
            </audio>
            <div class="controls">
                <button id="playPause5"><i class="fas fa-play"></i></button>
                <div class="mute-volume">
                    <button id="mute5"><i class="fas fa-volume-up"></i></button>
                    <div class="volume">
                        <input type="range" id="volume5" min="0" max="1" step="0.01" value="1">
                    </div>
                </div>
            </div><hr class="radio">
        <a href="https://simliveradio.net/" class="visit-website" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-external-link-alt"></i> Navštívit oficiální web</a>
    </div>
</div>
</div>

<br><br>
<div style="max-width: 1920px"> <!-- DEFAULT 600 --> 
    <el-alert
      title="INFO"
      type="info"
      description="Veškerá práva patří jednotlivým rádiím."
      description="Má to ve zvyku při přepnutí rádia hrát něco jiného než tam ve skutečnosti hraje takže doporučuji obnovit stránku a zapnout si rádio co chete."
      :closable="false"
      show-icon
    />
  </div>
<br>
<hr>


<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Inicializace přehrávače pro každé rádio
  const radios = document.querySelectorAll('.audio-player');

  radios.forEach((player, index) => {
    const audio = player.querySelector('audio');
    const playPauseButton = player.querySelector(`#playPause${index + 1}`);
    const volumeControl = player.querySelector(`#volume${index + 1}`);
    const muteButton = player.querySelector(`#mute${index + 1}`);

    initializePlayer(audio, playPauseButton, volumeControl, muteButton, index + 1);
  });
});

function initializePlayer(audio, playPauseButton, volumeControl, muteButton, index) {
  // Play/Pause funkce
  playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
      stopAllRadios(index);
      audio.play();
      playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      audio.pause();
      playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
  });

  // Nastavení hlasitosti
  volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
  });

  // Mute/Unmute funkce
  muteButton.addEventListener('click', () => {
    audio.muted = !audio.muted;
    muteButton.innerHTML = audio.muted
      ? '<i class="fas fa-volume-mute"></i>'
      : '<i class="fas fa-volume-up"></i>';
  });
}

function stopAllRadios(exceptIndex) {
  const radios = document.querySelectorAll('.audio-player');

  radios.forEach((player, index) => {
    if (index + 1 !== exceptIndex) {
      const audio = player.querySelector('audio');
      const playPauseButton = player.querySelector(`#playPause${index + 1}`);
      if (!audio.paused) {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
      }
    }
  });
}
</script>





<style>
    h1.radioname {
        text-align: center;
        margin: 20px 0;
        font-size: 2em;
      	color: #333;
    }

    .radio-container {
      	font-family: Arial, sans-serif;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        margin: 20px;
    }

    .radio-card {
        background-color: #232323;
        border: 1px solid #444;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        width: 300px;
        padding: 20px;
        text-align: center;
        transition: transform 0.3s;
    }

    .radio-card:hover {
        transform: scale(1.02);
    }

    .radio-card img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .radio-card h3 {
        margin: 15px 0 10px;
        font-size: 1.2em;
        color: #777;
    }

    .audio-player {
        width: 100%;
        background-color: #333;
        border-radius: 8px;
        padding: 20px;
        margin-top: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        color: #fff;
        /* border: 1px solid #444; */
    }

    .audio-player audio {
        display: none;
    }

    .controls {
        display: flex;
        align-items: center;
        /* justify-content: flex-start; */
        gap: 10px;
    }

    .controls button {
        background-color: #555;
        border: none;
        color: white;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.5em;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.5s;
    }

    .controls button:hover {
        background-color: #444;
    }

    .controls .volume {
        display: flex;
        align-items: center;
    }

    .controls .volume input {
        width: 100px;
        margin: 0;
    }

    .controls .mute-volume {
    display: flex;
    align-items: center;
    gap: 8px; /* Mezera mezi Mute a Volume */
    margin-left: 10px; /* Posun Mute a Volume doprava */
    }

    hr.radio {
        border-top: 1px solid #444 !important;
    }

    .progress-bar {
        width: 100%;
        height: 8px;
        background-color: #444;
        border-radius: 5px;
        position: relative;
        cursor: pointer;
        margin-top: 10px;
    }

    .progress-bar .progress {
        height: 100%;
        width: 0;
        background-color: #f39c12;
        border-radius: 5px;
    }


button {
    font-size: 1.5rem; /* Velikost ikony uvnitř tlačítka */
    padding: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #fff; /* Barva pro ikony */
}

button i {
    font-size: inherit; /* Zajištění velikosti ikon pro všechny tlačítka */
}

button#mute1,
button#mute2,
button#mute3, 
button#mute4, 
button#mute5 {
    font-size: 1.0rem; /* Stejná velikost pro mute tlačítka */
    background: none;  /* Odstranění pozadí */
    width: 40px;        /* Velikost tlačítka */
    height: 40px;       /* Velikost tlačítka */
    border-radius: 0%; /* Kulatý tvar tlačítka */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0px;
    position: relative;
    left: 5px; /* Posun doprava */
}

button#mute1 i,
button#mute2 i,
button#mute3 i,
button#mute4 i,
button#mute5 i {
    font-size: inherit; /* Zajištění velikosti ikony */
}

button i.fas {
    font-size: inherit; /* Ujistíme se, že ikony mají stejnou velikost jako ostatní tlačítka */
}

.radio-card .visit-website {
    display: inline-flex;
    align-items: center;
    margin-top: 0px; /* Odstup od ovládacích prvků */
    padding: 8px 12px;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 0.9rem;
    text-align: center;
    transition: background-color 0.3s ease;
    transition: filter 0.3s ease;
    /* border: 1px solid #444; */
    background: linear-gradient(55deg, #000dff, #6728e5);
}

.visit-website svg {
    width: 16px; /* Nastavení šířky ikony */
    height: 16px; /* Nastavení výšky ikony */
    margin-right: 5px; /* Odstup od textu */
    color: #fff; /* Nastavení barvy */
    transition: color 0.3s ease; /* Přechod při změně barvy */
}

.radio-card .visit-website:hover {
    background-color: #0056b3;
    filter: brightness(0.8);
}

.radio-card.simulator-radio .visit-website {
    background: linear-gradient(55deg, #ED3559, #E55C28);
    color: #fff;
    text-decoration: none;
}
.radio-card.trucksim-fm .visit-website {
    background: linear-gradient(135deg, #003168, #000525);
    color: #fff;
    text-decoration: none;
}
.radio-card.truckers-fm .visit-website {
    background: linear-gradient(135deg, #9B344D, #6E2341);
    color: #fff;
    text-decoration: none;
}
.radio-card.simliveradio .visit-website {
    background: linear-gradient(135deg, #F87D04, #FAAB62 80%);
    color: #fff;
    text-decoration: none;
}
.radio-card.truckstopradio .visit-website {
    background: linear-gradient(135deg, #0269FF, #001534 65%);
    color: #fff;
    text-decoration: none;
}

</style>


