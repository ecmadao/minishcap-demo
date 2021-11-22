import * as Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import './styles.css'

library.add(faGithub)

Vue
    .createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
