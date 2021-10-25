import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Form } from 'vant';
import { Field } from 'vant';
import { Picker } from 'vant';
import { Popup } from 'vant';
import { Calendar } from 'vant';
import { Uploader } from 'vant';
import { Button } from 'vant';
import { Area } from 'vant';
import { DatetimePicker } from 'vant';


Vue.use(Form);
Vue.use(Field);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Calendar);
Vue.use(Uploader);
Vue.use(Button);
Vue.use(Area);
Vue.use(DatetimePicker);
import 'amfe-flexible';

import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
Vue.use(VueDirectiveImagePreviewer)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
