import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import i18n from './plugins/i18n'
import JQuery from 'jquery'
import 'bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueParallaxJs from 'vue-parallax-js'
import VueScrollMonitor from 'vue-scrollmonitor'
import SVGInjectorVue from 'svginjector-vue'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueMeta)
Vue.use(VueParallaxJs)
Vue.use(VueScrollMonitor)
Vue.use(SVGInjectorVue)
Vue.use(VueTypedJs)


window.$ = JQuery

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/loaders/loader-pulse.css"
import "./assets/css/theme.css"
import "./styles/scss/custom.scss"

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')
