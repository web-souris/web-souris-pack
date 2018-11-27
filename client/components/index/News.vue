<template>
  <section class="section" data-type-header="dark" data-type-footer="dark" style="background: #f7fdff;">
    <div class="container">
      <div class="news__top">
        <div class="news__left">
          <h2>Статьи</h2>
        </div>
        <div class="news__right">
          <nuxt-link to="/about/blog">Все статьи <i class="fas fa-arrow-right"></i></nuxt-link>
        </div>
      </div>
      <div class="wrapper">
        <news-item v-for="(item, index) in news" :key="index" :item="item"></news-item>
      </div>
    </div>
  </section>
</template>

<script>
  import NewsItem from '../items/NewsIndex'
  export default {
    name: "News",
    props: ['news'],
    components: {
      NewsItem
    }
  }
</script>

<style scoped lang="less">
  .news {
    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        font-weight: bold;
        font-size: 30px;
        color: #202028;
      }
    }
    &__right {
      a {
        text-decoration: none;
        font-size: 16px;
        text-transform: uppercase;
        color: #0baae3;
        font-weight: bold;
        i {
          padding-left: 10px;
        }
      }
    }
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding-top: 40px;
    flex-wrap: wrap;
  }
</style>
