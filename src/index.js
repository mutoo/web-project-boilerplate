// Index JS
// ========
// This file is the webpack entry point.

'use strict';

// Polyfill's for ie11
import 'babel-polyfill';
import 'es6-promise/auto';

// Import the style entry point
import './scss/index.scss';

import SimpleComponent from './components/simple-component/index.vue';
Vue.component('simple', SimpleComponent);

new Vue({
    el: '#simple',
});

// a hint for bundle loaded
global.BUNDLE_LOADED = true;
