<template>
  <div class="header">
    <h3>细节驾校题库</h3>
    <div class="user" @click="goProfile">
      <span class="icon iconfont icon-user"></span>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
export default defineComponent({
  name:'homeHeader',
   
})
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';
@import '~@/assets/styles/mixins.scss';
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:.5rem;
  background-color:$brandColor ;
  h3{
    flex: 1;
    color: #fff;
    text-align: center;
  }
}
.icon{
  display: inline-block;
  color: #fff;
  height: .3rem;
  width: .3rem;
}
</style>