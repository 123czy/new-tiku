<template>
  <div>
    <testHeader />
    <testContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import testHeader from '../components/testHeader.vue'
import testContent from '../components/testContent.vue'
export default defineComponent({
  name:'TestPage',
  components:{testHeader,testContent}
  // setup() {
    
  // },
})
</script>
