<template>
  <section class="section" data-type-header="dark" data-type-footer="dark" style="background: #f7fdff;">
    <div class="container news">
      <div class="news__top flex flex_content-between flex_items-center">
        <div class="news__left">
          <h2 class="title title_dark">Статьи</h2>
        </div>
        <div class="news__right">
          <nuxt-link to="/about/blog" class="news__link">Все статьи <i class="fas fa-arrow-right"></i></nuxt-link>
        </div>
      </div>
      <div class="news__wrapper flex flex_content-between flex_items-stretch">
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

