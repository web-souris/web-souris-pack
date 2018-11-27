<template>
  <main data-type-header="dark" data-type-footer="dark" class="main">
    <div class="container">
      <div class="back">
        <nuxt-link to="/about/blog"><i class="fas fa-arrow-left"></i> Назад к статьям</nuxt-link>
      </div>
      <h1>{{article.title}}</h1>
      <div v-html="article.content"></div>
      <div class="wrapper">
        <div class="left">
          <div class="work__button">
            <button @click="changeForm(true)" class="button">Заказать звонок</button>
          </div>
        </div>
        <div class="right">
          <!-- uSocial -->
          <h3 style="padding-bottom: 10px">Поделиться в соц.сетях</h3>
          <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
          <script src="//yastatic.net/share2/share.js"></script>
          <div class="ya-share2" data-services="vkontakte,facebook,twitter,blogger,linkedin,lj,viber,whatsapp,skype,telegram"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: "blogItem",
    async asyncData({app,params, error}) {
      const blog = await app.$axios.get('/blog/' + params.item)
      if(blog.statusCode != 404) {
        return {
          article: blog.data.article,
          random: blog.data.random
        }
      }
      else {
        return error({})
      }
    },
    head() {
      return {
        title: this.article.head.title,
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: this.article.head.description },
          { hid: 'og:title', name: 'og:title', content: this.article.head.title},
          { hid: 'og:description', name: 'og:description', content:  this.article.head.description},
          { hid: 'og:image', name: 'og:image', content:  this.article.head.image},
          { hid: 'name', name: 'name', content: this.article.head.title},
          { hid: 'description', name: 'description', content: this.article.head.description},
          { hid: 'image', name: 'image', content: this.article.head.image},
        ],
      }
    },
    methods: {
      ...mapMutations(['changeForm'])
    }
  }
</script>

<style scoped lang="less">
  .back {
    padding-top: 10px;
    a {
      font-size: 16px;
      color: #0baae3;
      text-transform: uppercase;
      text-decoration: none;
      i {
        padding-right: 5px;
      }

    }
  }
  .wrapper {
    display: flex;
    padding-top: 25px;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
  .right {
    min-width: 320px;
    ul {
      padding: 0;
    }
  }
  .left {
    min-width: 320px;
  }
</style>
