import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './vuex'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(mavonEditor);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
