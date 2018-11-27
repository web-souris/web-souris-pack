<template>
  <section class="section" data-type-header="dark" data-type-footer="dark">
    <div class="container">
      <div class="left">
        <h2>Наши контакты</h2>
        <div class="item">
          <a :href="'tel:' + getSetting.linkPhone">{{getSetting.phone}}</a>
        </div>
        <div class="item">
          <a :href="'mailto:' + getSetting.email">{{getSetting.email}}</a>
        </div>
        <div class="item">
          <span>{{getSetting.address}}</span>
        </div>
        <div class="item item__social">
          <div class="social" v-for="(item, index) in getSocial" :key="index">
            <a :href="item.link" target="_blank">
              <i :class="item.icon"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="right">
        <fotter-form></fotter-form>
      </div>
    </div>
  </section>
</template>

<script>
  import FotterForm from '../FooterForm'
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    name: "Contacts",
    components: {
      FotterForm
    },
    computed: {
      ...mapGetters(['getSetting', 'getSocial'])
    }
  }
</script>

<style scoped lang="less">
  .section {
    background-color: #ffe8d0;
    background-image: url(/img/contacts-bg.jpg);
    background-repeat: no-repeat;
    background-position: 20% bottom;
    min-height: 800px;
    display: flex;
    align-items: stretch;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  a {
    text-decoration: none;
  }
  .left {
    flex-basis: 40%;
    padding: 40px 30px;
    background-color: #eeeeee;
    h2 {
      font-size: 30px;
      font-weight: bold;
      color: #202028;
      padding-bottom: 20px;
    }
    .item {
      padding-bottom: 6px;
      &__social {
        display: flex;
        align-items: center;
        padding-top: 15px;
      }
      &:last-child {
        padding-bottom: 0;
      }
    }
    a {
      font-size: 18px;
      color: #191919;
      font-weight: 500;
    }
    span {
      font-size: 15px;
      color: #191919;
      font-weight: 500;
    }
    .social {
      padding-right: 15px;
      &:last-child {
        padding-right: 0;
      }
      i {
        font-size: 22px;
        color: #0baae3;
      }
      a {
        width: 42px;
        height: 42px;
        background-color: #fff;
        align-items: center;
        display: flex;
        justify-content: center;
        -webkit-border-radius: 10em;
        -moz-border-radius: 10em;
        border-radius: 10em;
        transition: all .25s;
        &:hover {
          box-shadow: 0px 2px 10px 0 rgba(0, 0, 0, 0.35);
          background-color: #0baae3;
          i {
            color: #fff;
          }
        }
      }

    }
  }
  .right {
    flex-basis: 59%;
  }
  @media screen and (max-width: 768px) {
     .container {
       flex-wrap: wrap;
     }
    .left {
      flex-basis: 100%;
      margin-bottom: 20px;
    }
    .right {
      flex-basis: 100%;
    }
  }

</style>
