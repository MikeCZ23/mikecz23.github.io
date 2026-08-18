<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const target = new Date('2026-08-24T12:00:00+02:00').getTime()

let timer

function update() {
  const diff = Math.max(0, target - Date.now())

  days.value = Math.floor(diff / 86400000)
  hours.value = Math.floor((diff % 86400000) / 3600000)
  minutes.value = Math.floor((diff % 3600000) / 60000)
  seconds.value = Math.floor((diff % 60000) / 1000)
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

    <div class="separator">:</div>

    <div class="unit">
      <strong>{{ String(seconds).padStart(2, '0') }}</strong>
      <span>SECONDS</span>
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
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
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

  

@media (max-width: 600px) {
  .countdown {
    gap: 6px;
    padding: 20px 8px;
  }

  .unit {
    flex: 1;
    min-width: 0;
  }

  .unit strong {
    font-size: clamp(24px, 9vw, 34px);
  }

  .unit span {
    margin-top: 7px;
    font-size: 7px;
    letter-spacing: 1.5px;
  }

  .separator {
    font-size: 32px;
    margin-bottom: 15px;
  }
}


@media (max-width: 380px) {
  .countdown {
    gap: 3px;
    padding: 16px 4px;
  }

  .unit strong {
    font-size: 24px;
  }

  .unit span {
    font-size: 6px;
    letter-spacing: 1px;
  }

  .separator {
    font-size: 26px;
  }
}
</style>
