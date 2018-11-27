/**
 * Created by Zver on 09.10.2018.
 */
export default {
  state: {
    headerTheme: 'dark',
    footerTheme: 'white',
    social: [
      {
        link: 'https://vk.com/websouris',
        icon: 'fab fa-vk'
      },
      {
        link: 'https://www.instagram.com/web_souris/',
        icon: 'fab fa-instagram'
      },
      {
        link: 'https://api.whatsapp.com/send?phone=79780587275',
        icon: 'fab fa-whatsapp'
      },
      {
        link: 'https://t.me/web_souris',
        icon: 'fab fa-telegram'
      }
    ],
    menu: false,
    form: false,
    setting: {
      phone: '+7 (978) 058-72-75',
      linkPhone: '79780587275',
      email: 'web-souris@ya.ru',
      address: 'г. Севастополь, проспект Генерала Острякова, 98'
    },
    responseMessage: null
  },
  getters: {
    getHeaderTheme: (state) => {
      return state.headerTheme
    },
    getSetting: (state) => {
      return state.setting
    },
    getFooterTheme: (state) => {
      return state.footerTheme
    },
    getSocial: (state) => {
      return state.social
    },
    getMenu: (state) => {
      return state.menu
    },
    getForm: (state) => {
      return state.form
    },
    getResponseMessage: (state) => {
      return state.responseMessage
    }
  },
  mutations: {
    changeTheme: (state, payload) => {
      return state[payload.theme + 'Theme'] = payload.value
    },
    changeMenu: (state, payload) => {
      return state.menu = payload
    },
    changeForm: (state, payload) => {
      return state.form = payload
    },
    closeMenu: (state, payload) => {
      return state.menu = false
    },
    closeForm: (state) => {
      return state.form = false
    },
    changeResponseMessage: (state, payload) => {
      return state.responseMessage = payload
    }

  },
  actions: {

  }
}
