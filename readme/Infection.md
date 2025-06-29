---
title: Infection Free Zone – Čeština
sidebar: false
lastUpdated: false
editLink: false
author: MikeCZ, Starsoul
category: Češtiny
publish: false
outline: [2, 4]
---
<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Zadej sem svůj unikátní identifikátor (např. "projekt1")
const fileId = 'infekce';

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
    { name: "MikeCZ", role: "Vedení projektu, Překlad"}
  ],
  l10n: [
    { name: "Starsoul", role: "Překlad, Korektura", url: "https://lokalizace.net/tym/starsoul" },
  ]
};
</script>

<div style="border-radius: 16px; overflow: hidden; margin-bottom: 16px;">
  <img src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1465460/library_hero.jpg?t=1644920770">
</div>

# Infection Free Zone - Čeština 
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
  <div class="progpr" style="flex: 1"><el-progress :percentage="100" :stroke-width="18" :text-inside="true" status="warning" striped /></div>
</div>
<div class="stavpr prog-custom" style="display: flex; align-items: center; column-gap: 12px">
  <div class="infopr">Testovani:</div>
  <div class="progpr" style="flex: 1"><el-progress :percentage="100" :stroke-width="18" :text-inside="true" status="primary" striped /></div>
</div>

![](https://img.shields.io/badge/herní%20klient-Steam-grey?style=for-the-badge) 
![](https://img.shields.io/badge/verze%20hry-aktuální-grey?style=for-the-badge) 
![](https://img.shields.io/badge/verze%20překladu-0.25.6.23_13-grey?style=for-the-badge)

------------
Vyberte si libovolný skutečný region na světě. Zvolte si základnu a poté přestavte a přizpůsobte budovy v okolí, abyste vytvořili soběstačnou osadu. Převezměte vedení skupiny přeživších z vašeho města. A když padne noc - braňte zónu před nakaženými!

## Členové týmu

Na překladu se podílejí následující lidé:

<PTeamMembers :members="people.lead" />

<PTeamMembers :members="people.l10n" />

<PTeamMembers :members="people.support" />

<PTeamMembers :members="people.partners" />

<hr>

### Instalace
cesta: ..\Infection Free Zone_Data\StreamingAssets\Languages <br />

## Ke stažení
<div class="download-wrapper">
  <a href="https://lokalizace.net/cestina-do/infection-free-zone" download id="download-link" target="_blank">Přejit ke stažení</a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="icons"><path fill="#888888" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"/></svg>
  <div class="download-count" v-text="downloadCount"></div>
</div>

<el-divider />


<!-- <a href="https://www.dropbox.com/scl/fi/3mdvc1jdeqy25625qzs1s/Infection-Free-Zone-e-tina.rar?rlkey=xtw23oflo72tpmt9btffh9im3&st=dzpev8do&dl=1" target="_blank">Stáhnout</a> -->

<style>
.disabled{
  cursor: not-allowed;
  opacity: 0.5;
}

  
.download-wrapper {
  display: inline-flex;
  align-items: center; /* vertikální zarovnání na střed */
  gap: 8px; /* mezera mezi tlačítkem a číslem */
}

#download-link {
  /* text-decoration: none; */
  /* font-weight: 600; */
  /* color: #0057b8; */
}

.download-count {
  width: 25px;
  height: 25px;
  border: 1px solid rgb(198, 75, 69);
  border-radius: 4px;
  text-align: center;
  font-weight: normal;
  font-size: 0.8rem;
  color:rgb(198, 75, 69);
  background-color: #333;
  line-height: 24px; /* centrování textu vertikálně */
  user-select: none;
}
</style>








