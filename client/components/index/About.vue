<template>
  <section class="section section_white" style="background-color: #efefef; padding: 0;" data-type-header="dark" data-type-footer="dark">
    <div class="container">
      <div class="about flex flex_content-between">
        <div class="about__left">
          <div class="subtitle">О нас</div>
          <h2 class="title title_dark about__title">Полный цикл работ,
            для достижения результата!</h2>
          <div class="about__text">
            <p>Наша команда занимается:</p>
            <ul>
              <li>Созднием сайтов</li>
              <li>Разработкой фирменного стиля</li>
              <li>Оформлением и продвижением социальных сетей</li>
              <li>Продвижением сайтов</li>
            </ul>
            <p>Компания создана в конце 2017 года и уже успела поучаствовать в 10-ти крупных проектах. А сумарный опыт нашей команды в разработке и продвижении проектов любой сложности 10 лет. Более подробную информацию вы можете прочитать нажав "Узнать больше".</p>
            <p>Мы молодая команда, которая постоянно развивается, поэтому будьте уверены, ваш проект будет сделан с поддержкой всех новейших технологий.</p>
            <p>Мы постоянно проводим акции для наших любимых клиентов, для того чтобы узнать о них одним из первых свяжитесь с нами через форму обратной связи.</p>
          </div>
          <div class="about__link">
            <nuxt-link to="/about">Узнать больше ></nuxt-link>
          </div>
        </div>
        <div class="about__right">
          <mouse></mouse>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Mouse from './About/Mouse'
  export default {
    name: "About",
    components: {
      Mouse
    }
  }
</script>

<style scoped lang="less">
  .section {
    padding: 0;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 80vh;
  }
  .left {
    flex-basis: 50%;
    padding: 50px 0;
  }
  .right {
    flex-basis: 50%;
  }
  .subtitle {
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    color: #0baae3;
  }
  h2 {
    font-size: 32px;
    font-weight: bold;
    color: #202028;
    letter-spacing: 1.2px;
    line-height: 1.1;
    padding: 20px 0 2vh;
  }
  .text {
    font-size: 15px;
    color: #3b3b3b;
    p {
      padding-bottom: 10px;
      &:first-letter {
        padding-left: 5px;
      }
      &:last-child {
        padding-bottom: 0;
      }
    }
  }
  .link {
    font-size: 14px;
    padding-top: 25px;
    a {
      color: #0baae3;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 1170px){
    .left {
      flex-basis: 100%;
    }
    .right {
      display: none;
    }
  }
</style>
