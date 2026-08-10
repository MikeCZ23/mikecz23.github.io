<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)

const target = new Date('2026-08-24T13:36:00+02:00').getTime()

let timer

function update() {
  const diff = Math.max(0, target - Date.now())

  days.value = Math.floor(diff / 86400000)
  hours.value = Math.floor((diff % 86400000) / 3600000)
  minutes.value = Math.floor((diff % 3600000) / 60000)
}

onMounted(() => {
  update()
  timer = setInterval(update, 1000)
})

onUnmounted(() => clearInterval(timer))
</script>

<template>
  <div class="countdown">
    <div class="unit">
      <strong>{{ days }}</strong>
      <span>DAYS</span>
    </div>

    <div class="separator">:</div>

    <div class="unit">
      <strong>{{ String(hours).padStart(2, '0') }}</strong>
      <span>HOURS</span>
    </div>

    <div class="separator">:</div>

    <div class="unit">
      <strong>{{ String(minutes).padStart(2, '0') }}</strong>
      <span>MINUTES</span>
    </div>
  </div>
</template>

<style scoped>
.countdown {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin: 30px 0;
  border: 1px solid #8d1c2b;
  padding: 30px 50px;
  border: 1px solid rgba(141, 28, 43, 0.6);
  background: rgba(0, 0, 0, 0.15);
  border-radius: 15px;
}

.unit {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.unit strong {
  font-family: Georgia, serif;
  font-size: clamp(28px, 5vw, 40px);
  font-weight: 400;
  line-height: 1;
  color: #e8e3df;
}

.unit span {
  margin-top: 12px;
  font-family: Georgia, serif;
  font-size: 10px;
  letter-spacing: 5px;
  color: #9b918c;
}

.separator {
  margin-bottom: 20px;
  font-family: Georgia, serif;
  font-size: 60px;
  color: #8d1c2b;
}
</style>