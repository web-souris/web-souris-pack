<template>
  <div class="menu flex flex_items-center flex_content-center" :class="'menu_'+getHeaderTheme">
    <div class="container">
      <nav class="menu__wrapper">
        <div class="menu__wrap menu__wrap_half">
          <h2 class="menu__title">
            <nuxt-link to="/uslugi">Услуги</nuxt-link>
          </h2>
          <ul class="menu__list">
            <li class="menu__item">
              <span>
                <nuxt-link to="/uslugi/sayti">Сайты</nuxt-link>
              </span>
              <ul class="menu__hidden">
                <li>
                  <nuxt-link to="/uslugi/sozdanie-sayta-vizitki">Создание сайта визитки</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/uslugi/sozdanie-internet-magazina">Создание интернет магазина</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/uslugi/sozdanie-landing-page">Создание Landing-page</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/uslugi/sozdanie-promo-sayta">Создание промо сайта</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/uslugi/sozdanie-korporatvnogo-sayta">Создание корпоративного сайта</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/uslugi/sozdanie-web-prilosheniy">Создание веб-приложений</nuxt-link>
                </li>
              </ul>
            </li>
            <li class="menu__item">
              <span>
                <nuxt-link to="/uslugi/firmeniy-style">Фирменный стиль</nuxt-link>
              </span>
              <ul class="menu__hidden">
                <li>
                  <nuxt-link to="/uslugi/razrabotka-logotipa">Разработка логотипа</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/uslugi/razrabotka-vizitki">Разработка визитки</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/uslugi/razrabotka-brenda">Разработка бренда</nuxt-link>
                </li>
              </ul>
            </li>
            <li class="menu__item">
              <span>
                <nuxt-link to="/uslugi/soc-seti">Социальные сети</nuxt-link>
              </span>
              <ul class="menu__hidden">
                <li>
                  <nuxt-link to="/uslugi/oformlenie-grupi-vk">Оформление группы ВК</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/uslugi/oformlenie-grupi-instagram">Оформление группы Instagram</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/uslugi/oformlenie-grupi-facebook">Оформление группы Facebook</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/uslugi/oformlenie-grupi-twitter">Оформление группы Twitter</nuxt-link>
                </li>
              </ul>
            </li>
            <li class="menu__item">
              <span>
                <nuxt-link to="/uslugi/prodvishenie-i-reklama">Продвижение и реклама</nuxt-link>
              </span>
              <ul class="menu__hidden">
                <li>
                  <nuxt-link to="/uslugi/seo-prodvishenie">SEO продвижение</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/uslugi/nastroyka-reklami-yandex">Настройка рекламы Яндекс Директ</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/uslugi/nastoyka-reklami-google">Настройка рекламы Google Adwords</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/uslugi/nastoyka-reklami-soc">Настройка рекламы в Соц.сетях</nuxt-link>
                </li>
              </ul>
            </li>
            <li class="menu__item">
              <span>
                <nuxt-link to="/uslugi/kopiright">Копирайт</nuxt-link>
              </span>
            </li>
            <li class="menu__item">
              <span>
                <nuxt-link to="/uslugi/other">Другое</nuxt-link>
              </span>
              <ul class="menu__hidden">
                <li>
                  <nuxt-link to="/uslugi/tech-podderska">Техническая поддержка сайта</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/uslugi/boti-dlya-messengarov">Боты для месенджеров</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/uslugi/boti-dlya-soc-setey">Боты для Соц.сетей</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="menu__wrap menu__wrap_half">
          <h2 class="menu__title">
            <nuxt-link to="/about">О нас</nuxt-link>
          </h2>
          <ul class="menu__list">
            <li class="menu__item">
                <nuxt-link to="/about/portfolio">Портфолио</nuxt-link>
            </li>
            <li class="menu__item">
                <nuxt-link to="/about/review">Отзывы</nuxt-link>
            </li>
            <li class="menu__item">
              <nuxt-link to="/about/team">Команда</nuxt-link>
            </li>
            <li class="menu__item">
              <nuxt-link to="/about/events">Акции</nuxt-link>
            </li>
            <li class="menu__item">
              <nuxt-link to="/about/blog">Статьи</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="menu__wrap menu__wrap_contacts">
          <h2 class="menu__title">
            <nuxt-link to="/contacts">Контакты</nuxt-link>
          </h2>
          <ul class="menu__list menu__contacts">
            <li class="menu__item">
              <a :href="'tel:'+getSetting.linkPhone">
                <i class="fas fa-mobile-alt"></i>
                <span>{{getSetting.phone}}</span>
              </a>
            </li>
            <li class="menu__item">
              <a :href="'mailto:'+getSetting.email">
                <i class="far fa-envelope"></i>
                <span>{{getSetting.email}}</span>
              </a>
            </li>
            <li class="menu__item">
                <i class="fas fa-map-marker-alt"></i>
                <span>{{getSetting.address}}</span>
            </li>
          </ul>
          <div class="menu__social">
            <div class="item" v-for="(item, index) in getSocial" :key="index">
              <a target="_blank" :href="item.link">
                <i :class="item.icon"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "MainMenu",
    computed: {
      ...mapGetters([
        'getHeaderTheme', 'getSocial', 'getSetting'
      ])
    },
    mounted: function () {
      document.body.classList.add('body_hidden')
    },
    beforeDestroy: function () {
      document.body.classList.remove('body_hidden')
    }
  }
</script>
