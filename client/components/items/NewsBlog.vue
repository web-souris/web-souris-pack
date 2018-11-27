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
      <div class="footer">
        <div class="left">
          {{getDate}}
        </div>
        <div class="right">
          <nuxt-link :to="'/about/blog/' + news.alias">
            <div class="article__right">
              <i class="fas fa-angle-right"></i>
            </div>
          </nuxt-link>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "NewsBlog",
    props: ['news','index'],
    computed: {
      getDate() {
        const date = new Date(this.news.updatedAt)
        return date.getDay() + '.' + date.getMonth() + '.' + date.getFullYear()
      },
    }
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
  .footer {
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .right {
    a {
      text-decoration: none;
    }
  }
  .left {
    font-weight: bold;
  }
</style>
