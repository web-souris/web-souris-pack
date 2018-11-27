<template>
  <div class="page">
    <main-header></main-header>
    <div class="page__wrapper">
      <div class="page__content">
        <nuxt/>
      </div>
      <div class="page__footer">
        <main-footer></main-footer>
      </div>
    </div>
    <fixed-footer></fixed-footer>
    <main-menu v-if="getMenu"></main-menu>
    <main-form v-if="getForm"></main-form>
    <response-message v-if="getResponseMessage != null"></response-message>
    <top v-if="showTop"></top>
  </div>
</template>
<script>
  import MainHeader from '~/components/MainHeader'
  import MainMenu from '~/components/MainMenu'
  import MainForm from '~/components/MainForm'
  import FixedFooter from '~/components/FixedFooter'
  import MainFooter from '~/components/MainFooter'
  import ResponseMessage from '~/components/ResponseMessage'
  import Top from '~/components/Top'
  import scroll from '~/utils/scroll'
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    components: {
      MainHeader,
      FixedFooter,
      MainMenu,
      MainForm,
      ResponseMessage,
      MainFooter,
      Top
    },
    middleware: ['middlewareClose'],
    data() {
      return {
        sections: [],
        offsetTop: 0,
        offsetBottom: 0,
        showTop: false,
        positions: {
          header: {
            top: 0,
            bottom: 0
          },
          footer: {
            top: 0,
            bottom: 0
          }
        }
      }
    },
    computed: {
      ...mapGetters(['getMenu', 'getForm', 'getResponseMessage'])
    },
    methods: {
      ...mapMutations([
        'changeTheme'
      ]),
      changeHeader() {
        if(this.offsetTop >= this.positions.header.bottom || this.offsetTop < this.positions.header.top) {
          const vm = this
          const values = this.sections.filter(function (item) {
            return vm.offsetTop >= item.top
          })
          const value = this.sections[values.length - 1 ]
          this.positions.header.top = value.top
          this.positions.header.bottom = value.bottom
          this.changeTheme({theme: 'header', value: value.header})
        }
      },
      changeFooter() {
        if(this.offsetBottom > this.positions.footer.bottom || this.offsetBottom <= this.positions.footer.top) {
          const vm = this
          const  values = this.sections.filter(function (item) {
            return vm.offsetBottom >= item.top
          })
          const value = this.sections[values.length - 1]
          this.positions.footer.top = value.top
          this.positions.footer.bottom = value.bottom
          this.changeTheme({theme: 'footer', value: value.footer})
        }
      },
      getSections() {
        const sections = document.querySelectorAll('[data-type-header]')
        this.sections = scroll.getAllSections(sections)
        if(this.sections.length) {
          this.positions.header.bottom = this.sections[0].bottom
          this.positions.footer.bottom = this.sections[0].bottom
          this.changeTheme({theme: 'footer', value: this.sections[0].footer})
          this.changeTheme({theme: 'header', value: this.sections[0].header})
        }
        else {
          this.sections = [
            {
              top: 0,
              bottom: Math.max(document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight ),
              header: 'dark',
              footer: 'dark'
            }
          ]
          this.changeTheme({theme: 'header', value: this.sections[0].header})
          this.changeTheme({theme: 'footer', value: this.sections[0].footer})
        }
      }
    },
    mounted: function() {
      this.getSections()
      const vm = this
      window.addEventListener('scroll', function () {
        if(vm.offsetTop > window.pageYOffset && window.pageYOffset > 0) {
          vm.showTop = true
        }
        else {
          vm.showTop = false
        }
        const offsetTop = window.pageYOffset
        const offsetBottom = offsetTop + window.innerHeight - (window.innerHeight / 100 * 5)
        vm.offsetTop = offsetTop
        vm.offsetBottom = offsetBottom
        vm.changeHeader()
        vm.changeFooter()
      })
      window.addEventListener('resize', function() {
        vm.getSections()
      })
      this.$router.afterEach((r) => {
        setTimeout(function () {
          vm.getSections()
        }, 2000)
      })
    },
    beforeDestroy: function() {
      window.removeEventListener('scroll')
      window.removeEventListener('resize')
    }
  }
</script>
<style lang="less">
</style>

