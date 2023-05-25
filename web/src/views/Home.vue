<template>
  <div class="home">
    <homeHeader /> 
     <homeSubjectVue />
     <homeLicenseType />
     <homeButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import homeButton from '../components/homeButton.vue'
import homeHeader from "../components/homeHeader.vue";
import homeSubjectVue from "../components/homeSubject.vue";
import homeLicenseType from "../components/homeLicenseType.vue"
export default defineComponent({
  name:"HomePage",
  components:{homeHeader,homeSubjectVue,homeLicenseType,homeButton}
})


</script>
