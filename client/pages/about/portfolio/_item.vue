<template>
  <main class="page_portfolio main">
    <section class="section section_first" :style="{'background': work.background}" :data-type-header="work.content.firstScreen.headerTheme"
             :data-type-footer="work.content.firstScreen.footerTheme">
      <div class="container">
        <div class="back">
          <nuxt-link to="/about/portfolio" :style="{color: work.content.firstScreen.headerTheme == 'white' ?  '#fff' : '#000'}"><i class="fas fa-arrow-left"></i> Назад в портфолио</nuxt-link>
        </div>
        <div class="wrapper">
          <div class="left">
            <h1 :style="{color: work.content.firstScreen.headerTheme == 'white' ?  '#fff' : '#000'}">{{work.content.firstScreen.title}}</h1>
            <div class="subtitle" :style="{color: work.content.firstScreen.headerTheme == 'white' ?  '#fff' : '#000'}">
              {{work.content.firstScreen.subtitle}}
            </div>
            <div class="work__type" :style="{color: work.content.firstScreen.headerTheme == 'white' ?  '#fff' : '#000'}">
              <span>Разделы:</span>
              <nuxt-link :to="'/about/portfolio?type=' + item.alias" v-for="item in work.uslugas" :key="item.id" :style="{color: work.content.firstScreen.headerTheme == 'white' ?  '#fff' : '#000'}">{{item.name}}</nuxt-link>
            </div>
            <div class="work__button">
              <button @click="changeForm(true)" class="button" :style="{color: work.content.firstScreen.headerTheme == 'white' ?  '#fff' : '#000', 'border-color': work.content.firstScreen.headerTheme == 'white' ?  '#fff' : '#000'}">Заказать</button>
            </div>
            <div class="work__social">
              <h3 :style="{color: work.content.firstScreen.headerTheme == 'white' ?  '#fff' : '#000'}">Поделиться</h3>
              <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
              <script src="//yastatic.net/share2/share.js"></script>
              <div class="ya-share2" data-services="vkontakte,facebook,twitter,blogger,linkedin,lj,viber,whatsapp,skype,telegram"></div>
            </div>
          </div>
          <div class="right">
            <img :src="work.content.firstScreen.image" :alt="work.content.firstScreen.title">
          </div>
        </div>
      </div>
    </section>
    <section :data-type-header="item.headerTheme"
             :data-type-footer="item.footerTheme"  :style="item.style" v-for="(item, index) in work.content.content" :key="index">
        <div v-if="item.type == 'gallery'" class="container" style="padding-top: 50px;padding-bottom: 50px;">
          <h2 style="text-align: center;font-size: 32px;">Галерея работы</h2>
          <div v-if="work.gallery.length" class="gallery">
            <gallery v-for="item in work.gallery" :key="item.id" :image="item"></gallery>
          </div>
          <div v-else>На данный момент галерея пуста, зайдите позже</div>
        </div>
        <item :items="item" v-else></item>
    </section>
    <section class="section" style="padding: 30px 0;" :style="{'background': work.background}" :data-type-header="work.content.firstScreen.headerTheme"
             :data-type-footer="work.content.firstScreen.footerTheme">
      <div class="container">
        <h2 :style="{color: work.content.firstScreen.headerTheme == 'white' ?  '#fff' : '#000'}" style="text-align: center;">Понравилась работа?<br/>Отправьте нам заявку и мы сделаем для вас лучше.</h2>
        <div class="works">
          <div class="left">
            <div class="work__button">
              <button @click="changeForm(true)" class="button" :style="{color: work.content.firstScreen.headerTheme == 'white' ?  '#fff' : '#000', 'border-color': work.content.firstScreen.headerTheme == 'white' ?  '#fff' : '#000'}">Заказать</button>
            </div>
          </div>
          <div class="right">
            <!-- uSocial -->
            <h3 :style="{color: work.content.firstScreen.headerTheme == 'white' ?  '#fff' : '#000'}" style="padding-bottom: 10px">Или поделитесь нами в соц. сети</h3>
            <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
            <script src="//yastatic.net/share2/share.js"></script>
            <div class="ya-share2" data-services="vkontakte,facebook,twitter,blogger,linkedin,lj,viber,whatsapp,skype,telegram"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="section" style="padding: 30px 0;">
      <div class="container">
        <h2 style="text-align: center;">Другие наши работы</h2>
        <div class="other">
          <works-item class="work_index" v-for="(item, index) in random" :key="index" :item="item"></works-item>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import Gallery from '~/components/content/gallery'
  import Item from '~/components/content/item'
  import WorksItem from '~/components/items/Work'
  import {mapMutations} from 'vuex'
  export default {
    name: "workItem",
    async asyncData({app,params, error}) {
      const work = await app.$axios.get('/works/'+params.item);
      if(work.statusCode != 404) {
        return {
          work: work.data.work,
          random: work.data.random
        }
      }
      else {
        error({})
      }
    },
    components: {
      Item,
      Gallery,
      WorksItem
    },
    head() {
      return {
        title: this.work.head.title,
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: this.work.head.description },
          { hid: 'og:title', name: 'og:title', content: this.work.head.title},
          { hid: 'og:description', name: 'og:description', content:  this.work.head.description},
          { hid: 'og:image', name: 'og:image', content:  this.work.head.image},
          { hid: 'name', name: 'name', content: this.work.head.title},
          { hid: 'description', name: 'description', content: this.work.head.description},
          { hid: 'image', name: 'image', content: this.work.head.image},
        ],
      }
    },
    methods: {
      ...mapMutations(['changeForm'])
    }
  }
</script>

<style scoped lang="less">
  .section_first {
    padding: 0px 0 5vh;
    .wrapper {
      align-items: center;
      display: flex;
      padding: 3vh 0;
      justify-content: space-between;
      .left {
        flex-basis: 45%;
        padding-bottom: 20px;
      }
      .right {
        flex-basis: 45%;
      }
      h1 {
        font-size: 48px;
        font-weight: bold;
      }
      .subtitle {
        font-size: 18px;
        text-transform: none;
        font-weight: 500;
        padding-top: 20px;
        padding-bottom: 20px;
      }
    }
  }
  .back {
    padding-top: 10px;
    a {
      font-size: 16px;
      text-transform: uppercase;
      text-decoration: none;
      i {
        padding-right: 5px;
      }

    }
  }
  .work {
    &__type {
      span {
        margin-right: 5px;
      }
      a {
        text-decoration: none;
        margin-right: 10px;
        &::after {
          content: ',';
        }
        &:last-child {
          &::after {
            content: '';
          }
        }
      }
    }
    &__button {
      padding: 25px 0 0;
      button {
        border: 2px solid;
        background-color: transparent;
        width: 50%;
        min-width: 300px;
        &:hover {
          opacity: 1;
        }
      }
    }
    &__social {
      padding: 20px 0 0;
      h3 {
        padding-bottom: 15px;
      }
    }
  }
  h2 {
    font-size: 28px;
    padding: 10px 0;
  }
  .gallery {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 15px;
    align-items: flex-start;
  }
  .works {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .left {
      flex-basis: 40%;
      button {
        width: 100%;
      }
    }
  }
  .other {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 25px;
    .item {
      flex-basis: 30%;
    }
  }
  @media screen  and  (max-width: 768px){
    .section_first {
      .wrapper {
        .right {
          display: none;
        }
        .left {
          flex-basis: 100%;
        }
      }
    }
    .works {
      .left {
        flex-basis: 100%;
        padding-bottom: 20px;

      }
    }
    .other {
      .item {
        flex-basis: 100%;
        margin-bottom: 20px;
      }
    }
  }

</style>
