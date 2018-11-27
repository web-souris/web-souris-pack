<template>
    <div>
      <first></first>
      <section class="white section section_white" style="background-color: #f7fdff;" data-type-header="dark" data-type-footer="dark">
        <div class="container">
          <div class="helps">
            <p class="subtitle subtitle_blue">целиком погружаясь</p>
            <h2 class="title title_dark">Помогаем в решении</h2>
            <p class="helps__text">Повышение жизненных стандартов оправдывает социометрический<br/>портрет потребителя, используя опыт предыдущих кампаний</p>
            <help></help>
            <div class="helps__wrap">
              <button class="button" @click="changeForm(true)">Заказать консультацию</button>
            </div>
          </div>
        </div>
      </section>
      <about></about>
      <div class="section section_white" data-type-header="dark" data-type-footer="dark">
        <about-items></about-items>
      </div>
      <works :works="works"></works>
      <news :news="news"></news>
      <contacts></contacts>
    </div>
</template>
<script>
  import {mapMutations} from 'vuex'
import First from '~/components/index/first'
import Help from '~/components/index/Help'
import About from '~/components/index/About'
import AboutItems from '~/components/index/AboutItems'
import Works from '~/components/index/Works'
import News from '~/components/index/News'
import Contacts from '~/components/index/Contacts'
export default {
  components: {
    First,
    Help,
    About,
    AboutItems,
    Works,
    News,
    Contacts
  },
  async asyncData({app}) {
    const works = await app.$axios.get('/works')
    const news = await app.$axios.get('/blog')
    return {
      works: works.data,
      news: news.data
    }
  },
  methods: {
    ...mapMutations(['changeForm'])
  },
  data() {
    return {
    }
  }
}
</script>


