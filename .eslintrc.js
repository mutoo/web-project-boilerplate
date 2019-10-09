module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'rules': {
    'max-len': [
      'warn', {
        'code': 120,
        'comments': 80,
      },
    ],
  },
  'globals': {
    'global': true,
  },
  'plugins': [
    'react',
  ],
};
