<template>
  <section class="section section_dark section_full section_image flex flex_items-center" data-type-header="dark" data-type-footer="white" style="background-image: url(/img/first-background.jpg)">
    <div class="container">
      <div class="first-screen flex flex_content-center flex_items-center">
        <div class="first-screen__left">
          <h1 class="title title_big title_white">Создание и продвижение <br/><span>digital продукции</span></h1>
          <p>
            Каждая наша проектная команда — это уникальный коллектив профессионалов,
            подобранный по профилю проекта заказчика. Мы выделяем монопольные команды на проект и, таким образом,
            гарантируем заказчику,
            что ему посвящено 100% рабочего времени и вовлеченности проектной группы, созданной для достижения
            его бизнес-целей.
          </p>
          <div class="first-screen__footer">
            <div class="first-screen__button">
              <button class="button" @click="changeForm(true)">Заказать звонок</button>
            </div>
            <div class="first-screen__link">
              <nuxt-link to="/about/events">Акции</nuxt-link>
            </div>
          </div>
        </div>
        <div class="first-screen__right">
          <mouse></mouse>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import {mapMutations} from 'vuex'
import Mouse from '~/components/index/Mouse'
export default {
  components: {
    Mouse
  },
  methods: {
    ...mapMutations(['changeForm'])
  }
}
</script>
