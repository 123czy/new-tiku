<template>
  <div style="display:flex">
    <button class="test" @click="toTest">前往测试</button>
  </div>
</template>

<script lang="ts">
import { defineComponent  } from 'vue'
import { Router, useRouter } from 'vue-router';

export default defineComponent({
  name:'homeButton',
  
  setup() {
    const router: Router = useRouter();
    const toTest = ()=>{
       router.replace({
          name: 'test'
        });
    }
    return {
      toTest
    }
  },
})
</script>

<style lang="scss" scoped>
.test{
  font-size: .18rem;
  justify-content: center;
  margin: .2rem;
  border-radius: .1rem;
  display: flex;
  flex: 1;
  height: .5rem;
  line-height: .5rem;
  background: goldenrod;
  border: none;
}
</style>
