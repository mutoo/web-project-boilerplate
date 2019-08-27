module.exports = {
    'extends': [
        'google',
        'plugin:vue/essential'
    ],
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
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
    },
    'plugins': [
        'vue'
    ]
};
