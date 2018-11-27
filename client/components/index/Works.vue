<template>
  <section class="section section_work" data-type-header="white" data-type-footer="white" style="background-color: #202028;">
    <div class="container">
      <div class="flex flex_content-between flex_items-center">
        <div class="work work_index">
          <h2 class="work__title work__title_big">Наши работы</h2>
          <div class="work__text work__text_main">
            <p>
              Наш приоритет-<span>качество</span> и
              <span>достижение</span> поставленной <span>задачи</span>
            </p>
            <p class="small">
              Мы нацелены на результативную и продуманную работу. Не важно сколько лет вашему бренду, будь это молодой стартап или компания с
              опытом не менее 10 лет, итог один-повышение продаж и привлечение новых клиентов.
            </p>
          </div>
        </div>
        <work class="work_index" v-for="(item, index) in works" :key="index" :item="item"></work>
        <div class="work work_index">
          <div class="work__link">
            <nuxt-link to="/about/portfolio">
              Смотреть все работы
              <i class="fas fa-arrow-right"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Work from "../items/Work";
  export default {
    name: "Works",
    components: {Work},
    props: ['works']
  }
</script>

