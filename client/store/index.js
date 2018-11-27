/**
 * Created by Zver on 09.10.2018.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Setting from './setting'
Vue.use(Vuex)
export default () => new Vuex.Store({
  modules: {
    Setting
  }
})

