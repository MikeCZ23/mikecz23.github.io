---
title: Hollow Knight – Čeština
sidebar: false
lastUpdated: false
editLink: false
author: MikeCZ
tags:
  - Hollow Knight
  - Čeština
category: Češtiny
publish: false
outline: [2, 4]
---
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
 document.body.classList.add('special-page');
});

onUnmounted(() => {
 document.body.classList.remove('special-page');
});


  
const people = {
  lead: [
    { name: "MikeCZ", role: "Vedení projektu"}
  ],
  l10n: [
    { name: "Toasat165", role: "Překlad"},
    { name: "DesoloSVK", role: "Překlad"},
    { name: "UwU-master", role: "Překlad, Korektura"},
    { name: "LucianoLukin", role: "Překlad"},
    { name: "Yohnny", role: "Překlad"},
    { name: "Atoschi", role: "Překlad"},
    { name: "Manz_z", role: "Překlad, Korektura"},
    { name: "SeymoreClavage", role: "Korektura"},
    { name: "Bendalf21", role: "Korektura"},
  ],
  support: [
    { name: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 448 512"><path fill="#888888" d="M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4c-47.3 8.7-78 22.8-78 38.6c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7.3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143l38.7-96.9c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4h-59.9c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1m56 208h-12.4c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40v-14.4c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40m-88 96l16 32l-32 128l-48-192zm128-32l-48 192l-32-128l16-32z"/></svg>`, role: "Technika, fonty" },
  ],
  partners: [
    { name: "HaiseT", role: "Promo"},
    { name: "CzechCloud", role: "Promo"},
    { name: "PatrikTuri", role: "Mediální partner"}
  ]
};
</script>

<div style="border-radius: 16px; overflow: hidden; margin-bottom: 16px;">
  <img src="https://cdn2.steamgriddb.com/hero/8a1854f491c11482630ebb4135df2d2b.jpg">
</div>

# Hollow Knight – Čeština 
<div class="page-tag-info" aria-label="Tag🏷" data-balloon-pos="up">
<svg xmlns="http://www.w3.org/2000/svg" class="icon tag-icon" viewBox="0 0 1024 1024" fill="currentColor" aria-label="tag icon" name="tag"><path d="M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"></path></svg>
<div style="max-width: 600px" class="tag-custom page-tag-item">
<a href="" class="red">
<el-tag type="warning" effect="light">Modifikace</el-tag>
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

------------
Vytvořte si svou vlastní cestu v Hollow Knight! Epické akční dobrodružství v rozlehlém zničeném království hmyzu a hrdinů. Prozkoumejte kroutící se jeskyně, bojujte s poskvrněnými tvory a spřátelte se s bizarními brouky, to vše v klasickém, ručně kresleném 2D stylu.

## Požadavky
<a href="https://github.com/fifty-six/Scarab/releases">Scarab</a> <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#ccc" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg> <br />
- Po prvnim spuštění se tě to zeptá kde máš hru nainstalovanou. <br />
- V horní části appky je vyhledávání. Najdi a zapni **SFCore**, **Vasi** a **LanguageSupport** <br />
<img src="https://i.imgur.com/uAUAHpw.png"  width="55%" height="50%" loading="lazy"> <br />

## Známé chyby
- ❗Na Xbox GamePassu nejede❗
- Skloňování může být trochu nesmyslné <br />
- Hra si nepamatuje zvolený jazyk. Při každém spuštění hry budete muset jazyk znovu zvolit <br />

## Členové týmu

Na překladu se podílejí následující lidé:

<PTeamMembers :members="people.lead" />

<PTeamMembers :members="people.l10n" />

<PTeamMembers :members="people.support" />

<PTeamMembers :members="people.partners" />
---
<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=IQe0R4bIUonT-6Ib&amp;list=PLDyEBUIwzAFA-v9MwBdW6ZmZ_TzCNCLNp" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Instalace
Exáč se o vše postará. Hlavně splň požadavky. <a href="#pozadavky"><svg class="svg footnote" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 14.5v-2a3 3 0 0 0-3-3h-8"/><path d="m7.5 12.5l-3.001-3l3.001-3"/></g></svg></a>

## Ke stažení
<!-- <a href="https://www.dropbox.com/scl/fi/5tpna05csgzojvlhsgcpv/HollowKnight-Czech.exe?rlkey=abj4xgakbxoh4sjdw4gyeq7vc&st=alhbd51o&dl=1" target="_blank" download>Stáhnout</a> <br> -->
<a href="https://lokalizace.net/cestina-do/hollow-knight" target="_blank">Přejit ke stažení</a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="icons"><path fill="#888888" d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"/></svg> <br> <!--1. listopad 2024-->

<el-divider />






<style>
.special-page {
  font-family: 'Cinzel', serif;
}
</style>
