<template>
  <div class="wrapper" ref="modal">
    <div class="form">
      <div class="form__cross" @click="changeForm(false)"></div>
      <h2>Заполните форму, мы свяжемся с Вами в ближайшее время</h2>
      <form @submit.prevent="submitForm(form)">
        <div class="item" v-for="(item, index) in form" :key="index">
          <input :type="item.type" :placeholder="item.placeholder" v-model="item.value" v-validate="item.validate" :data-vv-name="item.name"
                 :class="{'input__error': errors.has(item.name) &&  showError}">
          <span v-if="errors.has(item.name) && showError" class="error">{{ errors.first(item.name) }}</span>
        </div>
        <div class="item">
          <button>Отправить</button>
        </div>
        <div class="item">
          <p>Отправляя заявку вы соглашаетесь с
            <nuxt-link to='/privacy-policy' target="_blank">Политикой конфиденциальности</nuxt-link>
            и даете согласие на
            <nuxt-link to='/personal-data' target="_blank">Обработку персональных данных</nuxt-link>
          </p>
        </div>
      </form>
    </div>
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
      }
    },
    methods: {
      ...mapMutations(['changeForm', 'changeResponseMessage']),
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
          mail: this.form.mail.value
        }).then(function(data) {
          const message = data.data
          vm.changeResponseMessage(message)
          vm.clearForm()
          vm.changeForm(false)
        }).catch(function(err) {
          console.log(err)
        })
      },
      clearForm() {
        this.form.name.value = null
        this.form.phone.value = null
        this.form.mail.value = null
        return this
      },
    },
    mounted: function() {
      document.body.classList.add('body_hidden')
      const modal = this.$refs.modal
      const vm = this
      modal.addEventListener('click', function(e) {
        const target = e.target.className
        if (target == 'wrapper') {
          vm.changeForm(false)
        }
      })
      document.addEventListener('keypress', function(e) {
        const key = e.keyCode;
        if(key == 27) {
          vm.changeForm(false)
        }
      })
    },
    beforeDestroy: function() {
      document.body.classList.remove('body_hidden')
      const modal = this.$refs.modal
      modal.removeEventListener('click', function() {
        console.log('Успешно удален')
      })
      document.removeEventListener('keypress', function() {})
    }
}
</script>
<style lang="less" scoped>
  .wrapper {
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(#000, .9);
    display: flex;
    align-items: center;
  }
  .error {
    display: block;
    color: red;
    font-size: 12px;
    text-align: center;
    position: absolute;
    top: 50%;
    right: 5px;
  }
  .input__error {
    border-color: red;
  }
  input {
    border-radius: 23px;
    border: solid 1px rgba(#fff, .6);
    background-color: transparent;
    width: 100%;
    padding: 15px 20px;
    font-size: 14px;
    color: #fff;
    transition: all .25s;
    &::placeholder {
      color: rgba(#fff, .6);
    }
    &:hover {
      border-color: #fff;
    }
  }
  .form {
    box-shadow: 0px 7px 12px 0 rgba(0, 1, 5, 0.35);
    background-color: rgba( #0c0c0f, 30%);
    padding: 30px 10px;
    max-width: 500px;
    position: relative;
    margin: 0 auto;
    &__cross {
      position: absolute;
      width: 22px;
      height: 22px;
      background-image: url(/img/cross.png);
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  }
  h2 {
    text-align: center;
    color: #fff;
    line-height: 1.33;
    letter-spacing: 0.8px;
    font-size: 24px;
  }
  .item {
    padding-top: 20px;
    color: #fff;
    position: relative;
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
      color: #fff;
    }
  }
  @media screen and (max-width: 992px) {
     .form {
       padding:20px;
     }
  }
</style>
