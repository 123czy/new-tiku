<template>
   
    <div class="test">
      <div>我要交卷</div>
      <div class="ft-w">4545545</div>
      <div class="clock">
        <div>
          <i class="icon iconfont icon-clock"></i>
          <span>44:09</span>
        </div>
        <i class="icon iconfont icon-more"></i>
      </div>
    </div>
   
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // setup() {
    
  // },
})
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss';
@import '~@/assets/styles/mixins.scss';
.test{
  padding: 0 .2rem;
  height: .5rem;
  background-color:$brandColor ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: .18rem;
  .ft-w{
    font-weight: 700;
  }
  .clock{
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icon{
  display: inline-block;
  color: #fff;
  height: .2rem;
  width: .2rem;
}
}

</style>


