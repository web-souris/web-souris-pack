<template>
  <main data-type-header="dark" data-type-footer="dark" class="page">
    <div class="container">
      <h1>Статьи</h1>
      <div class="subtitle">
        Любая полезная информация<br/>
        на ваш вкус
      </div>
      <div class="blog">
        <news-blog v-for="(item, index) in blog.rows" :key="item.id" :news="item" :index="index"></news-blog>
      </div>
      <div class="works__footer" v-if="blog.count > blog.rows.length">
        <button class="button" @click="loadMore">Загрузить еще</button>
      </div>
    </div>
  </main>
</template>

<script>
  import NewsBlog from '~/components/items/NewsBlog'
  export default {
    name: "index",
    components: {
      NewsBlog
    },
    async asyncData({app}) {
      const articles = await app.$axios.get('/blog/all')
      return {
        blog: articles.data
      }
    },
    head() {
      return {
        title: 'Наши статьи'
      }
    },
    methods: {
      async loadMore() {
        const articles = await this.$axios.get('/blog/all', {
          params: {
            limit: this.blog.rows.length
          }
        })
        const vm = this
        articles.data.rows.map((item) => {
          this.blog.rows.push(item)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .blog {
    padding: 25px 0;
  }
  .container {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  h1 {
    text-align: left;
    font-size: 40px;
    color: #202028;
    padding-bottom: 5px;
    font-weight: bold;
  }
  .subtitle {
    font-size: 16px;
    font-weight: 500;
  }
  .works {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &__footer {
      padding-top: 20px;
      text-align: center;
      button {
        font-size: 14px;
        padding: 15px 35px;
      }
    }
  }
</style>
