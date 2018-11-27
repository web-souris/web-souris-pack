<template>
  <div class="article">
    <nuxt-link :to="'/about/blog/' + item.alias" class="article__link">
      <div class="article__image" :style="getBackground"></div>
      <div class="article__content">
        <h3 class="article__title">{{item.title}}</h3>
        <div class="article__text" v-html="getText"></div>
        <div class="article__footer">
          <div class="article__left">
            {{getDate}}
          </div>
          <div class="article__right">
            <i class="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: "NewsIndex",
    props: ['item'],
    computed: {
      getBackground() {
        return 'background-image:url(' + this.item.image.index + ');'
      },
      getDate() {
        const date = new Date(this.item.updatedAt)
        return date.getDay() + '.' + date.getMonth() + '.' + date.getFullYear()
      },
      getText() {
        const text = this.item.shortText.substr(0,350)
        return text != this.item.shortText ? text + '...' : text
      }
    }
  }
</script>
