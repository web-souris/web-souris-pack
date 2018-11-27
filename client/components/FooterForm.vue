<template>
  <div class="footer-form">
    <div class="subtitle subtitle_blue">хотите узнать больше?</div>
    <h2 class="title title_dark">
      Заполните форму для
      получения консультации
    </h2>
    <form @submit.prevent="submitForm(form)" class="footer-form__wrap">
      <div class="footer-form__item footer-form__item_half" v-for="(item, index) in form" :key="index">
        <input class="footer-form__input" :type="item.type" :placeholder="item.placeholder" v-model="item.value" v-validate="item.validate" :data-vv-name="item.name"
               :class="{'footer-form__input_error': errors.has(item.name) &&  showError}">
        <span class="footer-form__error" v-if="errors.has(item.name) && showError">{{ errors.first(item.name) }}</span>
      </div>
      <div class="footer-form__item">
        <textarea class="footer-form__textarea" v-model="text" placeholder="Ваше сообщение"></textarea>
      </div>
      <div class="footer-form__item footer-form__item_button">
        <button class="button">Отправить</button>
      </div>
      <div class="footer-form__item footer-form__item_last">
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
