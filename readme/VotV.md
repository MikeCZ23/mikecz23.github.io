---
title: Voices of the Void – čeština
sidebar: false
lastUpdated: false
editLink: false
author: MikeCZ
tags:
  - VotV
  - Voices of the Void
  - Čeština
category: Češtiny
publish: false
outline: [2, 4]
---
<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Zadej sem svůj unikátní identifikátor (např. "projekt1")
const fileId = 'votv';

// Sestav URL s parametrem file podle ID
const apiUrl = `https://mikeproject.4fan.cz/update.php?file=${fileId}`;

// Reaktivní proměnná pro počet stažení
const downloadCount = ref('Načítám počet stažení...');

async function loadCounter() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    downloadCount.value = data.count;
  } catch {
    downloadCount.value = 'Nepodařilo se načíst počet stažení.';
  }
}

async function incrementCounter() {
  try {
    await fetch(apiUrl, { method: 'POST' });
    await loadCounter();
  } catch {
    console.error('Chyba při zvyšování počítadla');
  }
}

onMounted(() => {
  loadCounter();
  const downloadLink = document.getElementById('download-link');
  if (downloadLink) {
    downloadLink.addEventListener('click', incrementCounter);
  }
});


  
const people = {
  lead: [
    { name: "MikeCZ", role: "Vedení projektu"}
  ],
  l10n: [
    { name: "Hopes", role: "Překlad, Korektura"},
    { name: "Redpomp55", role: "Překlad"},
    { name: "Metroxx", role: "Překlad"},
    { name: "Wellociraptor", role: "Překlad"},
    { name: "Hupham", role: "Překlad"}, 
  ],
  support: [
    { name: "termit", role: "Technika, fonty"},
  ],
  partners: [
    { name: "RTHWLDN", role: "Mediální partner", url: "https://rothwellden.art"},
    { name: "Sterakdary", role: "Promo", url: "https://sterakdary.cz"}
  ]
};
</script>

<div style="border-radius: 16px; overflow: hidden; margin-bottom: 16px;">
  <img src="https://cdn2.steamgriddb.com/hero_thumb/217831965d021a41b6d1c8525748d334.jpg">
</div> 

# Voices of the Void – Čeština 
<div class="page-tag-info" aria-label="Tag🏷" data-balloon-pos="up">
<svg xmlns="http://www.w3.org/2000/svg" class="icon tag-icon" viewBox="0 0 1024 1024" fill="currentColor" aria-label="tag icon" name="tag"><path d="M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"></path></svg>
<div style="max-width: 600px" class="tag-custom page-tag-item">
<a href="" class="tyrkys">
<el-tag type="warning" effect="light">Official</el-tag>
</a>
<a href="" class="purple">
<el-tag type="warning" effect="light">Demo</el-tag>
</a></div></div> 

<div class="stavpr prog-custom" style="display: flex; align-items: center; column-gap: 12px">
  <div class="infopr">Překlad:</div>
  <div class="progpr" style="flex: 1"><el-progress :percentage="100" :stroke-width="18" :text-inside="true" status="success" striped /></div>
</div>
<div class="stavpr prog-custom" style="display: flex; align-items: center; column-gap: 12px">
  <div class="infopr">Korektura:</div>
  <div class="progpr" style="flex: 1"><el-progress :percentage="97" :stroke-width="18" :text-inside="true" status="warning" striped /></div>
</div>
<div class="stavpr prog-custom" style="display: flex; align-items: center; column-gap: 12px">
  <div class="infopr">Testovani:</div>
  <div class="progpr" style="flex: 1"><el-progress :percentage="90" :stroke-width="18" :text-inside="true" status="primary" striped /></div>
</div>
    
![](https://img.shields.io/badge/herní%20klient-itch.io-grey?style=for-the-badge) 
![](https://img.shields.io/badge/verze%20hry-0.8.2c-grey?style=for-the-badge) 
![](https://img.shields.io/badge/verze%20překladu-0.8.2c-grey?style=for-the-badge)

------------
Pracujete jako vědec v izolované výzkumné laboratoři ve Švýcarských horách. Vaším úkolem je shromažďovat signály z vesmíru, analyzovat je, zpracovávat a prodávat, abyste získali body. Můžete získávat běžné signály a objekty, jako jsou trpasličí planety a hvězdy, nebo můžete získat něco "neobvyklého" či "podivného". Hra obsahuje více než 50 dní a událostí, více než 150 možných signálů, několik easter eggů a tajemství.<br /><br />

## Známé chyby
- Skloňování muže být nesmyslné
- Něco je nepřeložené 

## Členové týmu

Na překladu se podílejí následující lidé:

<PTeamMembers :members="people.lead" />

<PTeamMembers :members="people.l10n" />

<PTeamMembers :members="people.support" />

<PTeamMembers :members="people.partners" />
---
<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=63Jv5EeacLCH1Y1J&amp;list=PLDyEBUIwzAFAVOYZCfhwj9IQhT1xPI_0T" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Hlášení
**CHYBY V PŘEKLADU NAHLAŠUJTE NA JEHO DISCORDU V [TÉTO ROOMCE](https://discord.com/channels/512287844258021376/1213827086708379688) VE FORMĚ SCREENU, A JÁ DO DRUHÉHO DNE VYDÁM UPDATE**
<br><br>
<span style="background:red;color:white;">Češtinu má hra officiálně, ale toto slouží jen jako opravy řádků. Do další verze hry se toto propíše přímo do hry.</span><br><br>
<span style="background:red;color:white;">Chceš se přidat k týmu? Prostě mi napiš do komentářů.</span><br><br>
<span style="background:red;color:white;">Pokud stahovací odkaz nefunguje, znamená to že hra má nejnovější češtinu už v sobě.</span>

---
### Instalace
cesta: ..\VotV\Content\Paks <br />
nahradí to Češtinu

## Ke stažení
<div class="download-block">
   <a target="_self" download id="download-link" class="disabled">Stáhnout</a>
   <div class="download-divider"></div>
 <!--  <div class="download-count" v-text="downloadCount"></div> -->
</div>

<el-divider />
<!-- https://www.dropbox.com/scl/fi/ktf9o7xv1obk74z3thyqo/VotV_Czech.7z?rlkey=qtgj5tggxnej92s8bgm5qxqms&st=ncz80j55&dl=1 -->

<style>
.disabled{
  cursor: not-allowed;
  opacity: 0.5;
}
.download-block {
  height: 45px;
  display: inline-flex; /* Flexbox pro zarovnání vedle sebe */
  align-items: center; /* Vertikální zarovnání */
  border: 2px solid #000; /* Černý rámeček kolem bloku */
  border-radius: 8px; /* Zaoblené rohy */
  overflow: hidden; /* Skrýt přesahující obsah */
}

.download-button {
  background-color: rgb(202, 73, 73); /* Světle červené pozadí tlačítka */
  color: white; /* Bílý text */
  border: none; /* Bez rámečku */
  padding: 10px 20px; /* Vnitřní odsazení */
  font-size: 1rem; /* Velikost textu */
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Přechod barvy */
  text-shadow: 1px 1px 5px #111, 1px 1px 1px #111;
}

.download-button:hover {
  background-color: rgb(158 50 50); /* Tmavší červená při hoveru */
}

.download-divider {
  width: 1px; /* Tloušťka čáry */
  height: 45px; /* Pevná výška */
  background-color: #666; /* Jasně zelená barva */
  border: none; /* Žádný rámeček */
  display: inline-block; /* Ujistí viditelnost */
}

.download-count {
  background-color: #333; /* Tmavě šedé pozadí */
  color: #ccc; /* Bílý text */
  padding: 10px 10px; /* Vnitřní odsazení */
  text-align: center; /* Zarovnání na střed */
  font-size: 0.8rem; /* Velikost textu */
  font-weight: bold;
  pointer-events: none; /* Zákaz klikání */
  user-select: none; /* Zákaz označení textu */
}

#download-link {
  color: rgba(255, 255, 245, 0.86);
  text-decoration: none;
}

svg.svgicons {
    display: inline;
    position: relative;
    bottom: 5px;
}
</style>


