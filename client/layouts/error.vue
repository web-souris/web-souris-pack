<template>
  <div>
    <section class="section section_dark section_full section_image flex flex_items-center"
             data-type-header="dark" data-type-footer="white" style="background-image: url(/img/first-background.jpg)">
      <div class="container flex flex_items-center flex_content-between">
        <div class="left">
          <h1>Ой, что-то пошло не так!</h1>
          <p class="first-p">Возможно страница находится в разработке, или её  не существует!
            Вы можете воспользоваться услугой и заказать звонок для
            консультации или вернуться на главную страницу.
          </p>
          <div class="footer">
            <div>
              <button class="button" @click="changeForm(true)">Заказать звонок</button>
            </div>
            <div class="link__wrap">
              <nuxt-link to="/" class="link">На главную</nuxt-link>
            </div>
          </div>

        </div>
        <div class="right">
          {{getStatusError}}
        </div>
      </div>
    </section>
    <main-form v-if="getForm"></main-form>
    <response-message v-if="getResponseMessage != null"></response-message>
  </div>
</template>
<script>
  import {mapMutations, mapGetters} from 'vuex'
  import MainForm from '~/components/MainForm'
  import ResponseMessage from '~/components/ResponseMessage'
  export default {
    components: {
      MainForm,
      ResponseMessage
    },
    middleware: ['middlewareClose'],
    layout: ['errors'],
    computed: {
      getStatusError() {
        const status = this.error ? this.error.statusCode : 404
        return status
      },
      ...mapGetters(['getForm', 'getResponseMessage'])
    },
    methods: {
      ...mapMutations(['changeForm'])
    }
  }
</script>
<style lang="less" scoped>
  .section {
    padding: 0;
    background-color: #0b1015;
  }
  .container {
    background-image: url(/img/error-bg.png);
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: bottom right;
    padding: 75px 0;
  }
  h1 {
    font-size: 48px;
    color: #fff;
    font-weight: bold;
    padding: 0;
    margin: 0;
    line-height: 1.08;
    padding-bottom: 20px;
    span {
      font-weight: 500;
      font-size: 34px;
    }
  }
  .first-p {
    color: #fff;
    line-height: 22px;
    color: #9eabb0;
    font-size: 15px;
    width: 85%;
  }
  .left {
    flex-basis: 40%;
  }
  .right {
    flex-basis: 59%;
    text-align: center;
    color: #fff;
    font-size: 30vh;
    font-weight: bold;
  }
  .footer {
    display: flex;
    align-items: center;
    padding-top: 20px
  }
  .button {
    border: none;
    cursor: pointer;
    border-radius: 35px;
    background-color: #0baae3;
    font-weight: 500;
    text-transform: uppercase;
    color: #0b0b0b;
    font-size: 18px;
    padding: 20px 40px;
    letter-spacing: 1.8px;
    opacity: 1;
    transition: all .25s;
    &:hover {
      opacity: .6;
    }
    &:focus {
      opacity: .8;
    }
  }
  .link__wrap {
    margin-left: 10%
  }
  .link {
    color: #0baae3;
    font-size: 18px;
    &:hover {
      text-decoration: none;
    }
  }
  @media screen and (max-width: 992px) {
    .right {
      display: none;
    }
    .first-p {
      color: #fff;
    }
    .left {
      flex-basis: 100%;
    }
    .container {
      background-position: bottom center;
    }
    h1 {
      font-size: 32px;
      span {
        font-size: 28px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .footer {
      flex-wrap: wrap;
      div {
        flex-basis: 100%;
        text-align: center;
      }
    }
    .link__wrap {
      padding-top: 25px;
      margin-left: 0;
    }
  }
</style>
