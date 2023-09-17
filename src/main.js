import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// font-awesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { faPenRuler } from '@fortawesome/free-solid-svg-icons'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faMagnifyingGlass, 
            faEarthAsia, 
            faLanguage, 
            faTerminal, 
            faPenRuler, 
            faBookOpen,
            faMusic,
            faPalette)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
