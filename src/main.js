// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    user: {
      email: '',
      name: '',
      cpf: '',
      birthdate: '',
      phone: '',
      password: '',
      companyname: '',
      cnpj: '',
      creationdate: '',
      companyphone: '',
      user_type: ''
    },
    rules: {
      email: {
          valid: null
      },
      user_type: {
          valid: null
      },
      name: {
          valid: null
      },
      cpf: {
          valid: null
      },
      birthdate: {
          valid: null
      },
      phone: {
          valid: null
      },
      companyname: {
          valid: null
      },
      cnpj: {
          valid: null
      },
      creationdate: {
          valid: null
      },
      companyphone: {
          valid: null
      },
      password: {
        valid: null
    },
    },
  },
  router,
  components: { App },
  template: '<App/>'
})
