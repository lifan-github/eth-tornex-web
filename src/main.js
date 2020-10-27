import Vue from 'vue';
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import App from './App.vue';
import '@/assets/iconfont/iconfont.css';
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(ElementUI);

const i18n = new VueI18n({
    locale: 'zh',
    messages: {
        'zh': require('./i18n/zh'),
        'en': require('./i18n/en')
    },
})

Vue.config.productionTip = false

new Vue({
    router,
    i18n,
    render: h => h(App),
}).$mount('#app')
