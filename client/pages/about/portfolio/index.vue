<template>
  <main data-type-header="dark" data-type-footer="dark" class="page">
    <div class="container">
      <h1>Портфолио</h1>
      <div class="subtitle">
        Наш приоритет-качество и<br/>
        достижение поставленной задачи
      </div>
      <div class="types">
        <div class="item" v-for="(item,index) in types" :key="index">
          <nuxt-link :to="{query: {type: item.query}}" v-if="item.query">{{item.text}}</nuxt-link>
          <nuxt-link to="/about/portfolio" v-else>{{item.text}}</nuxt-link>
        </div>
      </div>
      <div class="works">
        <work-item v-for="item in works.rows" :key="item.id" :item="item" class="item"></work-item>
      </div>
      <div class="works__footer" v-if="works.count > works.rows.length">
        <button class="button" @click="loadMore">Загрузить еще</button>
      </div>
    </div>
  </main>
</template>

<script>
  import WorkItem from '~/components/items/Work'
  export default {
    name: "index",
    components: {
      WorkItem
    },
    async asyncData({app, query }) {
      const type = query.type
      const works = await app.$axios.get('/works/all', {
        params: {
          type: type
        }
      })
      return {
        works: works.data
      }
    },
    head() {
      return {
       title: this.getTitle()
      }
    },
    data() {
      return {
        types: [{
          text: 'Все',
        },{
          text: 'Сайты',
          query: 'sayti'
        }, {
          text: 'Фирменный стиль',
          query: 'firmeniy-style'
        }, {
          text: 'Продвижение и реклама',
          query: 'prodvishenie-i-reklama'
        }, {
          text: 'Копирайт',
          query: 'kopiright'
        }, {
          text: 'Социальные сети',
          query: 'soc-seti',
        }, {
          text: 'Другое',
          query: 'other'
        }]
      }
    },

    methods: {
      async getWorks() {
        const type = this.$route.query.type || ''
        const works = await this.$axios.get('/works/all', {
          params: {
            type: type,
          }
        })
        this.works = works.data
      },
      getTitle() {
        const type = this.$route.query.type
        var title = ''
        if(type) {
          switch(type) {
            case 'sayti': title = 'Сайты, примеры наших работ'; break
            case 'firmeniy-style': title = 'Фирменный стиль , примеры наших работ'; break
            case 'prodvishenie-i-reklama': title = 'Продвижение и реклама, примеры наших работ'; break
            case 'kopiright': title = 'Копирайт, примеры наших работ'; break
            case 'soc-seti': title = 'Социальные сети, примеры наших работ'; break
            case 'other': title = 'Другое, примеры наших работ'; break
            default: title = 'Портфолио'
          }
        }
        else {
          title = 'Примеры наших работ'
        }
        return title
      },
      async loadMore() {
        const vm = this
        const type = this.$route.query.type || ''
        const limit = this.works.rows.length
        const works = await this.$axios.get('/works/all', {
          params: {
            type: type,
            limit: limit
          }
        })
        works.data.rows.map(function (item) {
          vm.works.rows.push(item)
        })
        return this
      }
    },
    mounted: function () {
      this.$router.afterEach((r) => {
        this.getWorks()
      })
    }
  }
</script>

<style scoped lang="less">
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
  .types {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4vh 0 ;
    a {
      font-size: 18px;
      text-decoration: none;
      color: #202028;
      transition: all .25s;
      &:hover {
        color: #0baae3;
      }
      &.nuxt-link-exact-active {
        color: #0baae3;
        border-bottom: 1px solid #0baae3;
      }
    }
  }
  .works {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      flex-basis: 49%;
    }
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
