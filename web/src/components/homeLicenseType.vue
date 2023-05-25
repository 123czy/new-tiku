<template>
  <div>
    <h2>请选择驾照类型</h2>
    <div class="block">
      <div class="license" :class="item.value == active ? 'bg' : ''" @click="chooseLicense(item.value)" v-for="(item,index) of licenseType" :key="index">
        {{item.name}} 
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive ,ref } from 'vue'
import {Store,useStore} from 'vuex'
export default defineComponent({
  name:'homeLicenseType',
  setup() {
    const store: Store<any> = useStore();
     const licenseType = reactive([
       {
        name: 'A1',
        value: 'a1'
      },
      {
        name: 'A2',
        value: 'a2'
      },
      {
        name: 'B1',
        value: 'b1'
      },
      {
        name: 'B2',
        value: 'b2'
      },
      {
        name: 'C1',
        value: 'c1'
      },
      {
        name: 'C2',
        value: 'c2'
      }
     ])
     const active = ref('a1')
     const chooseLicense = (val: string) =>{
       store.dispatch('tiku/set_LicenseType',val)
       active.value = val
     }
     return {
       licenseType,
       active,
       chooseLicense
     }
  },
})
</script>

<style lang="scss" scoped>
h2{
  font-size: .18rem;
  margin-top: .2rem;
}
.bg{
  background:#0098ff ;
}
.block{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  .license{
    margin: .2rem 0 0 .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: .6rem;
    height: .6rem;
    font-size: 0.18rem;
    color: #303133;
    border-radius: 0.1rem;
    border: 1px solid #909399;
  }
}

</style>
