// Index JS
// ========
// This file is the webpack entry point.

'use strict';

// Polyfill's for ie11
import 'es6-promise/auto';

// Import the style entry point
import './scss/index.scss';

// Vue example
import VueExample from './components/vue-component-exmaple/index.vue';
Vue.component('vue-example', VueExample);
new Vue({el: '#vue-app'});

// a hint for bundle loaded
global.BUNDLE_LOADED = true;
