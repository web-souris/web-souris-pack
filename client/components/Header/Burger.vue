<template>
  <div class="burger">
    <div class="burger__wrapper" @click="changeMenu(!getMenu)">
      <div class="burger__wrap" v-for="(item, index) in burger" :key="index" >
        <span class="burger__item" v-for="(val, k) in item" :key="k" :class="['burger__item_' +val, 'burger__item_' + getHeaderTheme, 'burger__item_' + getPaddings(k, val)]"></span>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  data() {
    return {
      burger: [
        ['round','full'],
        ['half', 'round', 'half'],
        [ 'full', 'round']
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getHeaderTheme',
      'getMenu'
    ]),
  },
  methods: {
    getPaddings(index, item) {
      if(index == 1 && item == 'full' || index == 2 && item == 'half') {
        return 'left'
      }
      else if (index == 0 && item == 'full' || index == 0 && item == 'half') {
        return 'right'
      }
    },
    ...mapMutations(['changeMenu'])
  }
}
</script>
<style lang="less">
.left {
  margin-left: 3px;
}
.right {
  margin-right: 3px;
}
</style>
