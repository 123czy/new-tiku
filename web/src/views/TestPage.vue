<template>
  <div>
    <testHeader />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import testHeader from '../components/testHeader.vue'
export default defineComponent({
  name:'TestPage',
  components:{testHeader}
  // setup() {
    
  // },
})
</script>
