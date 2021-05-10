import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'

Vue.config.productionTip = false

Vue.use(VueCompositionAPI).use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
