import './assets/main.css';

import { createApp } from 'vue';
import Modal from '../src/components/Modal.vue';
import App from './App.vue';

const app = createApp(App);
app.component("Modal", Modal)

app.mount('#app');
