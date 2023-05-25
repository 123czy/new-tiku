<template>
  <div class="page-container">
    <div class="container">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name:'App'
})
</script>

<style lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  height: 100%;

  .container {
    flex: 1;
    min-height: 0;
    overflow-y: scroll;
  }
}
</style>
