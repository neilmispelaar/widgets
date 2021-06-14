import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/index';

// Add tailwindcss
import './assets/styles/main.css';

// Create the app
let app = createApp(App);

// Setup Vue to use the Vuex store
app.use(store);

// Mount the app
app.mount('#app')
