<template>
  <div class="work">
    <nuxt-link :to="'/about/portfolio/' + item.alias">
    <div class="work__wrap" :style="'background: ' + item.background">
      <div class="work__image">
        <img :src="item.image" :alt="item.title">
      </div>
      <div class="work__content">
        <div class="work__top">
          <div class="work__left">
            {{item.theme}}
          </div>
          <div class="work__right">
            <i class="fas fa-external-link-alt"></i>
          </div>
        </div>
        <div class="work__bottom">
          <h3 class="work__title">{{item.title}}</h3>
          <p>{{item.shortText}}</p>
        </div>
      </div>
    </div>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    name: "Work",
    props: ['item']
  }
</script>

<style scoped lang="less">
  @media screen and (max-width: 992px){
    .item__wrap {
      flex-wrap: wrap;
      height: auto;
    }
    .item__content {
      position: relative;
      flex-basis: 100%;
      opacity: 1;
    }
    .item a {
      text-decoration: none;
    }
    .item__image {
      padding: 70px 0;
    }


  }
</style>
