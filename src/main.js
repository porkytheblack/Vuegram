import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store' // import const object not defalt file.
import './registerServiceWorker'
import './assets/scss/app.scss'
import Navigation from './components/Navigation.vue'
const fb = require('./firebaseConfig.js')

Vue.config.productionTip = false

Vue.component('Navigation', Navigation) // Common toolbar
// handle page reloads
let app
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
