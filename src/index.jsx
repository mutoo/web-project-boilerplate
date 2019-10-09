// Index JS
// ========
// This file is the webpack entry point.
import React from 'react';
import ReactDom from 'react-dom';

// Polyfill's for ie11
import 'es6-promise/auto';

// Import the global style entry point
import './scss/index.scss';
import App from './components/app';

ReactDom.render(<App />, document.getElementById('app'));

// a hint for bundle loaded
global.BUNDLE_LOADED = true;
