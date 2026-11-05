<template>
  <div class="translation-compact">
    
    <!-- Minimalistický přepínač -->
    <div class="compact-switch">
      <button 
        :class="{ active: activeTab === 'base' }" 
        @click="activeTab = 'base'"
      >
        Základní hra
      </button>
      <button 
        :class="{ active: activeTab === 'dlc' }" 
        @click="activeTab = 'dlc'"
      >
        DLC Sea of Sorrow
      </button>
    </div>

    <!-- Obsah: Základní hra -->
    <div v-show="activeTab === 'base'" class="progress-section">
      <div class="stavpr prog-custom" style="display: flex; align-items: center; column-gap: 12px">
        <div class="infopr">Překlad:</div>
        <div class="progpr" style="flex: 1"><el-progress :percentage="100" :stroke-width="18" :text-inside="true" status="success" striped /></div>
      </div>
      <div class="stavpr prog-custom" style="display: flex; align-items: center; column-gap: 12px">
        <div class="infopr">Korektura:</div>
        <div class="progpr" style="flex: 1"><el-progress :percentage="50" :stroke-width="18" :text-inside="true" status="warning" striped /></div>
      </div>
      <div class="stavpr prog-custom" style="display: flex; align-items: center; column-gap: 12px">
        <div class="infopr">Testování:</div>
        <div class="progpr" style="flex: 1"><el-progress :percentage="50" :stroke-width="18" :text-inside="true" status="primary" striped /></div>
      </div>
    </div>

    <!-- Obsah: DLC -->
    <div v-show="activeTab === 'dlc'" class="progress-section">
      <div class="stavpr prog-custom" style="display: flex; align-items: center; column-gap: 12px">
        <div class="infopr">Překlad:</div>
        <div class="progpr" style="flex: 1"><el-progress :percentage="0" :stroke-width="18" :text-inside="true" status="success" striped /></div>
      </div>
      <div class="stavpr prog-custom" style="display: flex; align-items: center; column-gap: 12px">
        <div class="infopr">Korektura:</div>
        <div class="progpr" style="flex: 1"><el-progress :percentage="0" :stroke-width="18" :text-inside="true" status="warning" striped /></div>
      </div>
      <div class="stavpr prog-custom" style="display: flex; align-items: center; column-gap: 12px">
        <div class="infopr">Testování:</div>
        <div class="progpr" style="flex: 1"><el-progress :percentage="0" :stroke-width="18" :text-inside="true" status="primary" striped /></div>
      </div>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const activeTab = ref('base')
    return { activeTab }
  }
}
</script>

<style scoped>
/* Malý přepínač ve stylu posuvné pilulky */
.compact-switch {
  display: inline-flex;
  background: var(--vp-c-bg-mute, #1e1e24);
  border: 1px solid var(--vp-c-border, #333);
  border-radius: 20px;
  padding: 3px;
  margin-bottom: 16px;
}

.compact-switch button {
  background: transparent;
  border: none;
  color: var(--vp-c-text-2, #888);
  font-size: 0.85rem;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.compact-switch button:hover {
  color: var(--vp-c-text-1, #fff);
}

.compact-switch button.active {
  background: var(--vp-c-brand-1, #646cff);
  color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* Tvé zachované styly pro progress bary */
.prog-custom .el-progress.is-success .el-progress-bar__inner{
  background-color: var(--el-color-custom-success);
}
.prog-custom .el-progress.is-warning .el-progress-bar__inner{
  background-color: var(--el-color-custom-warning);
}
.prog-custom .el-progress.is-primary .el-progress-bar__inner{
  background-color: var(--el-color-custom-primary);
}
.stavpr{
  margin-bottom: 7.5px;
}
.infopr{
  max-width: 5px;
}
.progpr .el-progress-bar{
  position: relative;
  max-width: 5000px;
  margin-left: 7em;
  border: 3px solid var(--el-border-color-lighter); 
  border-radius: var(--outer-radius);
  --outer-radius: 50px; 
  color: var(--vp-c-text-1);
  overflow: hidden;
}
.progpr .el-progress-bar__inner,
.progpr .el-progress-bar__outer{
  text-align: center;
  border-radius: calc(var(--outer-radius) - 3px);
}
.progpr .el-progress-bar__innerText{
  font-weight: 500;
}
</style>