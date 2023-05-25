import { createStore } from 'vuex'
import tiku from './tiku';
// import user from './user';
export default createStore({
  modules: {
    tiku,
    // user
  }
})
