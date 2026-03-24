---
title: Plague Inc – Čeština
sidebar: false
lastUpdated: false
editLink: false
author: MikeCZ
tags:
  - Plague Inc
  - Čeština
category: Češtiny
publish: false
outline: [2, 4]
---
<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Zadej sem svůj unikátní identifikátor (např. "projekt1")
const fileId = 'plague';

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
    { name: "Papu", role: "Překlad, Korektura"},
    { name: "Rescue", role: "Překlad"},
    { name: "Tedus", role: "Překlad"},
    { name: "Janonas", role: "Překlad"},
    { name: "null", role: "Korektura"},
  ],
  support: [
    { name: "Martin3D", role: "Technika, fonty"},
  ],
  partners: [
    { name: "FlyGunCZ", role: "Promo"}
  ]
};
</script>

<div class="banner" style="border-radius: 16px; overflow: hidden; margin-bottom: 16px;">
  <img src="https://i.imgur.com/BlpSGnq.jpg">
</div>

# Plague Inc – Čeština 
<div class="page-tag-info" aria-label="Tag🏷" data-balloon-pos="up">
<svg xmlns="http://www.w3.org/2000/svg" class="icon tag-icon" viewBox="0 0 1024 1024" fill="currentColor" aria-label="tag icon" name="tag"><path d="M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"></path></svg>
<div style="max-width: 600px" class="tag-custom page-tag-item">
<a href="" class="yellow">
<el-tag type="warning" effect="light">Early Access</el-tag>
</a></div></div> 

<div class="stavpr prog-custom" style="display: flex; align-items: center; column-gap: 12px">
  <div class="infopr">Překlad:</div>
  <div class="progpr" style="flex: 1"><el-progress :percentage="100" :stroke-width="18" :text-inside="true" status="success" striped /></div>
</div>
<div class="stavpr prog-custom" style="display: flex; align-items: center; column-gap: 12px">
  <div class="infopr">Korektura:</div>
  <div class="progpr" style="flex: 1"><el-progress :percentage="25" :stroke-width="18" :text-inside="true" status="warning" striped /></div>
</div>
<div class="stavpr prog-custom" style="display: flex; align-items: center; column-gap: 12px">
  <div class="infopr">Testovani:</div>
  <div class="progpr" style="flex: 1"><el-progress :percentage="100" :stroke-width="18" :text-inside="true" status="primary" striped /></div>
</div>
    
![](https://img.shields.io/badge/herní%20klient-Steam-grey?style=for-the-badge) 
![](https://img.shields.io/badge/verze%20hry-aktuální-grey?style=for-the-badge) 
![](https://img.shields.io/badge/verze%20překladu-0.7.7-grey?style=for-the-badge)

------------
Plague Inc: Evolved je jedinečná kombinace vysoké strategie a děsivě realistické simulace. Váš patogen právě nakazil „Patient Zero“ - nyní musíte dosáhnout konce lidské historie vyvinutím smrtícího, globálního moru a zároveň se přizpůsobit všem, co lidstvo může udělat, aby se bránilo.
<br><br>
Plague Inc: The Cure byla vytvořena za pomoci světových odborníků na zdraví a infekční choroby z celého světa, včetně Koalice pro připravenost na epidemii (CEPI), Světové zdravotnické organizace (WHO) a Globální sítě pro vypuknutí a reakci na ohniska (GOARN). Vaším úkolem je vyvážit sociální, ekonomické a globální zdravotní faktory s cílem udržet nemoc pod kontrolou a zároveň zachovat důvěru veřejnosti.

## Známé chyby
- Něco může být nepřeložené <br />


## Členové týmu

Na překladu se podílejí následující lidé:

<PTeamMembers :members="people.lead" />

<PTeamMembers :members="people.l10n" />

<PTeamMembers :members="people.support" />

<PTeamMembers :members="people.partners" />
---
<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=SsTbQcXs7E_c1tyn&amp;list=PLDyEBUIwzAFAYZXa2alKi_ArKGt2HVuw1" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---
### Instalace


## Ke stažení
<div class="download-block">
  <a href="https://lokalizace.net/localizations/hollow-knight" download id="download-link" target="_blank" class="download-button">Přejít ke stažení
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="icons"><path fill="#ccc" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"/></svg></a>
  <div class="download-divider"></div>
  <div class="download-count" v-text="downloadCount"></div>
</div>

<el-divider />


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
