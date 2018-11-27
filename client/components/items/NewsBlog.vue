<template>
  <div class="item" :class="index % 2 == 1 ? 'item_reverse' : ''">
    <div class="item__image">
      <nuxt-link :to="'/about/blog/' + news.alias">
        <img :src="news.image.blog" :alt="news.title">
      </nuxt-link>
    </div>
    <div class="item__content">
      <h2>
        <nuxt-link :to="'/about/blog/' + news.alias">
          {{news.title}}
        </nuxt-link>
      </h2>
      <div class="text">
        {{news.shortText}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NewsBlog",
    props: ['news','index']
  }
</script>

<style scoped lang="less">
  .item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    &_reverse {
      flex-direction: row-reverse;
    }
    &__image {
      flex-basis: 45%;
    }
    &__content {
      flex-basis: 50%;
      h2 {
        a {
          text-decoration: none;
          font-size: 28px;
          color: #202028;
        }
      }
      .text {
        font-size: 16px;
        padding-top: 10px;
      }
    }
  }
</style>
