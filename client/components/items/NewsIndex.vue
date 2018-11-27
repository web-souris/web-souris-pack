<template>
  <div class="item">
    <nuxt-link :to="'/about/blog/' + item.alias">
      <div class="item__image" :style="getBackground"></div>
      <div class="item__content">
        <h3>{{item.title}}</h3>
        <div class="item__text" v-html="getText"></div>
        <div class="item__footer">
          <div class="item__left">
            {{getDate}}
          </div>
          <div class="item__right">
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

<style scoped lang="less">
  .item {
    position: relative;
    flex-basis: 32%;
    transition: all .25s;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.25);
    a {
      text-decoration: none;
      color: #202028;
      transition: all .25s;
    }
    &:hover {
      box-shadow: 0px 5px 25px 0 rgba(0, 0, 0, 0.35);
      a {
        color: #ffff;
      }
      .item__image {
        opacity: 1;
      }
    }
    &__content {
      padding: 50px 30px;
      position: relative;
      z-index: 2;
    }
    &__image {
      transition: all .25s;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      background-size: cover;
      background-position: center;
      opacity: 0;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(#202028, .7);
      }
    }
    &__text {
      font-size: 15px;
      padding-bottom: 10vh;
    }
    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__right {
      width: 50px;
      height: 50px;
      text-align: center;
      -webkit-border-radius: 10em;
      -moz-border-radius: 10em;
      border-radius: 10em;
      background-color: #0baae3;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 20px;
      }
    }
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 35px;
  }
  @media screen and (max-width: 992px) {
    .item {
      margin-bottom: 25px;
      a {
        color: #fff;
      }
      &__image {
        opacity: 1;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .item {
      flex-basis: 100%;
      max-width: 320px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
