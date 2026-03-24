---
title: Progressbar95 - čeština
sidebar: false
editLink: false
lastUpdated: false
publish: false
outline: [2, 4]
---
<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Zadej sem svůj unikátní identifikátor (např. "projekt1")
const fileId = 'progress';

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
  ]
};
</script>

<div style="border-radius: 16px; overflow: hidden; margin-bottom: 16px;">
  <img src="https://i.imgur.com/xRpbY8J.jpg">
</div>

# Progressbar95 - Čeština

![](https://img.shields.io/badge/přeloženo-100%25-darkgreen?style=for-the-badge)<br>
![](https://img.shields.io/badge/herní%20klient-Steam-grey?style=for-the-badge) 
![](https://img.shields.io/badge/verze%20hry-2024-grey?style=for-the-badge) 
![](https://img.shields.io/badge/verze%20překladu-2024/11/11-grey?style=for-the-badge)

------------
Progressbar95 je jedinečná indie hra se silnou nostalgickou atmosférou. Promění vintage prvky GUI, jako jsou panely, tlačítka a ikony, na herní prvky! Jednoduchá a návyková hra založená na desítkách mini-her a hádanek. Hra vás rozesměje!

## Členové týmu

Na překladu se podílejí následující lidé:

<PTeamMembers :members="people.lead" />

<PTeamMembers :members="people.l10n" />

<PTeamMembers :members="people.support" />

<PTeamMembers :members="people.partners" />

<hr>

### Instalace
cesta: Progressbar95\Resources\international\en <br />

## Ke stažení
<div class="download-block">
  <a href="https://lokalizace.net/localizations/hollow-knight" download id="download-link" target="_blank" class="download-button">Přejít ke stažení
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="icons"><path fill="#ccc" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"/></svg></a>
  <div class="download-divider"></div>
  <div class="download-count" v-text="downloadCount"></div>
</div>

<el-divider />



<style>
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





