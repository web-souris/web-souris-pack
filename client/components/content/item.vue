<template>
  <div :class="items.class" :style="items.style">
    <h2 v-if="items.type == 'title'">
      {{items.content}}
    </h2>
    <div class="text" v-else-if="items.type == 'text'" v-html="items.content"></div>
    <img v-img :src="items.path" :alt="items.alt" v-else-if="items.type == 'image'">
    <a :href="items.link" target="_blank" :style="items.style" v-else-if="items.type == 'link'">{{items.content}}</a>
    <item v-for="(item, index) in items.content" :key="index" :items="item" v-else></item>
  </div>
</template>

<script>
  import Item from './item'
  export default {
    name: "item",
    props: ['items'],
    components: {
      Item
    },
    computed: {
      isArr() {
        return Array.isArray(this.items.content)
      }
    }
  }
</script>

<style scoped lang="less">
  .wrapper {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 50px;
    flex-wrap: wrap;
  }
  div {
    border-bottom: none !important;
  }
  h2 {
    font-size: 34px;
    font-weight: bold;
    padding-bottom: 15px;
  }
  .text {
    font-size: 16px;
  }
  @media screen and (max-width: 992px){
    .item {
      padding-bottom: 20px;
      flex-basis: 100% !important;
    }
  }
</style>
