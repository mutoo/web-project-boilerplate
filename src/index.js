// Index JS
// ========
// This file is the webpack entry point.

'use strict';

// Polyfill's for ie11
import 'babel-polyfill';
import 'es6-promise/auto';

// a hint for bundle loaded
global.BUNDLE_LOADED = true;
