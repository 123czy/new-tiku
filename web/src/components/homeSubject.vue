<template>
  <div>
    <h2 >请选择科目</h2>
    <div class="block">
      <div class="subject" :class="item.value == active ? 'bg' : ''" @click="chooseSubject(item.value)"  v-for="(item,index) of subjectList" :key="index">
        {{item.name}} 
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive ,ref} from 'vue'
import {Store,useStore} from 'vuex'
export default defineComponent({
  name:'homeSubject',
  setup() {
    const store: Store<any> = useStore();
    const subjectList = reactive([
      {
        name:'科目1',
        value:1
      },
      {
        name:'科目4',
        value:4
      },
    ])
    const active = ref(1)
    const chooseSubject=(val: number)=>{
      store.dispatch('tiku/set_Subject',val)
      active.value = val
    }
    return {
      subjectList,
      active,
      chooseSubject
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
  justify-content: space-around;
  margin: .2rem auto;
.subject{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.4rem;
    height: 0.6rem;
    font-size: 0.18rem;
    color: #303133;
    border-radius: 0.1rem;
    border: 1px solid #909399;
}
}

</style>
