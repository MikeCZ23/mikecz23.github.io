<template>
    <div class="social-links">
      <div v-for="link in links" :key="link.name" class="social-link">
        <a :href="link.url" target="_blank" rel="noopener noreferrer">
          <img :src="link.icon" :alt="link.name" class="social-icon" />
        </a>
        <div class="social-name">{{ link.name }}</div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    links: { name: string, url: string, icon: string }[]
  }>();
  </script>
  
  <style scoped>
  .social-links {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 20px;
  }
  
  .social-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
  }
  
  .social-icon {
      width: 32px;
      height: 32px;
      transition: transform 0.2s;
      margin: 0px;
  }
  
  .social-icon:hover {
      transform: scale(1.1);
  }
  
  .social-name {
      margin-top: 5px;
      font-size: 0.875em;
      color: #333;
  }
  </style>
  