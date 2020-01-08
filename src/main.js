import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import FontAwesomeLayers from "@fortawesome/vue-fontawesome/src/components/FontAwesomeLayers";
// ...
library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
