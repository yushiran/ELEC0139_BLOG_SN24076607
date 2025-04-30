import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { loadReferences } from './utils/referenceManager';
import refsBibContent from './assets/refs.bib?raw';

// Import KaTeX CSS and vue3-katex
import 'katex/dist/katex.min.css';
import VueKatex from '@hsorby/vue3-katex';

loadReferences(refsBibContent);

// Create app and use KaTeX plugin
const app = createApp(App);
app.use(VueKatex);
app.mount('#app');
