<template>
    <div class="avatar-container">
      <img :src="src" alt="avatar" class="avatar" />
      <div class="name">{{ name }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    src: string,
    name: string
  }>();
  </script>
  
  <style scoped>
  .avatar-container {
      text-align: center;
      margin-bottom: 20px;
  }
  
  .avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 2px solid #007acc;
  }
  
  .name {
      margin-top: 10px;
      font-size: 1.5em;
      font-weight: 600;
      color: #333;
  }
  </style>
  