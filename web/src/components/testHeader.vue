<template>
   
    <div class="test">
      <div >我要交卷</div>
      <div class="ft-w">{{licenseType}}--科目{{subject}}</div>
      <div class="clock">
        <div>
          <i class="icon iconfont icon-clock"></i>
          <span>{{time}}</span>
        </div>
        <i class="icon iconfont icon-more"></i>
      </div>
    </div>
   
</template>

<script lang="ts">
import { defineComponent,onMounted } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const licenseType = computed(() => store.state.tiku.licenseType)
    const subject = computed(() => store.state.tiku.subject)
    const time = computed(()=>{
      const minutes = Math.floor(store.state.tiku.time / 60000);
      const seconds = ((store.state.tiku.time % 60000) / 1000).toFixed(0).padStart(2, '0');
        return `${minutes}:${seconds}`;
    })
    onMounted(()=>{
      setInterval(() => {
         store.dispatch('tiku/set_Time', 1000);
      }, 1000);
    })
    return {
      licenseType,
      subject,
      time
    }
  },
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


