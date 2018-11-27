<template>
    <div class="help">
      <div class="help__wrapper">
        <div class="help__image" v-html="item.image">
        </div>
        <div class="help__small" :style="{left: item.small.left, top: item.small.top}"></div>
        <div class="help__big" :style="{left: item.big.left, top: item.big.top}"></div>
      </div>
      <h3 class="help__title">{{item.title}}</h3>
      <p class="help__text">{{item.text}}</p>
    </div>
</template>

<script>
  export default {
    name: "Item",
    props: ['item']
  }
</script>
