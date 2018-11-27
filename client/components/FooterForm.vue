<template>
  <div class="form">
    <div class="subtitle">хотите узнать больше?</div>
    <h2>
      Заполните форму для
      получения консультации
    </h2>
    <form @submit.prevent="submitForm(form)" class="form__wrap">
      <div class="item item_half" v-for="(item, index) in form" :key="index">
        <input :type="item.type" :placeholder="item.placeholder" v-model="item.value" v-validate="item.validate" :data-vv-name="item.name"
               :class="{'input__error': errors.has(item.name) &&  showError}">
        <span v-if="errors.has(item.name) && showError" class="error">{{ errors.first(item.name) }}</span>
      </div>
      <div class="item">
        <textarea v-model="text" placeholder="Ваше сообщение"></textarea>
      </div>
      <div class="item">
        <button>Отправить</button>
      </div>
      <div class="item item_last">
        <p>Отправляя заявку вы соглашаетесь с
          <nuxt-link to='/privacy-policy' target="_blank">Политикой конфиденциальности</nuxt-link>
          и даете согласие на
          <nuxt-link to='/personal-data' target="_blank">Обработку персональных данных</nuxt-link>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
  import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        showError: false,
        form: {
          name: {
            value: null,
            validate: 'required|min:3',
            name: 'Имя',
            placeholder: 'Ваше имя',
            type: 'text'
          },
          phone: {
            value: null,
            validate: {
              'required': true,
              'regex': /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
            },
            name: 'Телефон',
            placeholder: 'Ваш телефон',
            type: 'text'
          },
          mail: {
            value: null,
            validate: {
              'required': true,
              'email': true
            },
            name: 'E-mail',
            type: 'mail',
            placeholder: 'Ваш E-mail'
          }
        },
        text: '',
      }
    },
    methods: {
      ...mapMutations(['changeResponseMessage']),
      submitForm: function(form) {
        this.$validator.validateAll().then((result) => {
          if(result) {
            this.sendForm()
          }
          else {
            this.showError = true
          }
        })
      },
      sendForm() {
        var vm = this
        this.$axios.post('/clients', {
          name: this.form.name.value,
          phone: this.form.phone.value,
          mail: this.form.mail.value,
          text: this.text,
        }).then(function(data) {
          const message = data.data
          vm.changeResponseMessage(message)
          vm.clearForm()
        }).catch(function(err) {
          console.log(err)
        })
      },
      clearForm() {
        this.form.name.value = null
        this.form.phone.value = null
        this.form.mail.value = null
        this.text = null
        return this
      },
    },
  }
</script>
<style lang="less" scoped>
  .error {
    display: block;
    color: red;
    font-size: 12px;
    text-align: right;
    position: absolute;
    top: 50%;
    right: 5px;
  }
  .input__error {
    border-color: red;
  }
  input, textarea {
    border-radius: 23px;
    border: solid 1px rgba(#000, .5);
    background-color: transparent;
    width: 100%;
    padding: 12px 15px;
    font-size: 14px;
    color: #000;
    transition: all .25s;
    &::placeholder {
      color: rgba(#000, .5);
    }
    &:hover {
      border-color: #000;
    }
  }
  textarea {
    resize: vertical;
  }
  .form {
    background-color: #fff;
    padding: 50px 30px;
    position: relative;
    margin: 0 auto;
  }
  h2 {
    font-weight: bold;
    color: #202028;
    max-width: 400px;
    font-size: 30px;
  }
  .item {
    padding-top: 20px;
    color: #202028;
    position: relative;
    flex-basis: 100%;
    &_half {
      flex-basis: 48%;
    }
    &_last {
      padding-top: 5px;
    }
  }
  button {
    width: 100%;
    display: block;
    color: #0b0b0b;
    font-size: 18px;
    font-weight: 500;
    border-radius: 30px;
    background-color: #0baae3;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: .5em;
    line-height: 50px;
  }
  p {
    width: 90%;
    margin: 0 auto;
    font-size: 13px;
    text-align: center;
    a {
      color: #0baae3;
    }
  }
  .form__wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 768px) {
    .item {
      &_half {
        flex-basis: 100%;
      }
    }
    .form {
      padding: 20px 10px;
    }
  }
</style>
