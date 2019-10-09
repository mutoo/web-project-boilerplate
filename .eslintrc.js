module.exports = {
    'extends': [
        'google',
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
    ]
};
