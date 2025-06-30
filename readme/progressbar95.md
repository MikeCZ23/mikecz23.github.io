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
![](https://img.shields.io/badge/verze%20hry-aktuální-grey?style=for-the-badge) 
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
<div class="download-wrapper">
  <a href="https://www.dropbox.com/scl/fi/wy3jpyxcydhk2s54lnav6/Progressbar95-Czech.7z?rlkey=6z5xn804mbv34d9twaybag005&st=2m6f12bj&dl=1" download id="download-link" target="_self">Stáhnout</a>
  <div class="download-count" v-text="downloadCount"></div>
</div>

<el-divider />









