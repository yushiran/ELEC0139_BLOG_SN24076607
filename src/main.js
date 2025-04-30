import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { loadReferences } from './utils/referenceManager';
import refsBibContent from './assets/refs.bib?raw';

loadReferences(refsBibContent);

createApp(App).mount('#app')
