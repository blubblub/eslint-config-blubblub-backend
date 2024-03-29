module.exports = {
    env: {
        jest: true,
    },
    extends: [
        '@blubblubinc/blubblub-base/jest',
        './index.js',
    ],
    rules: {
        'jest/consistent-test-it': [
            'error',
            {
                fn: 'test',
                withinDescribe: 'test',
            },
        ],
        'jest/no-hooks': 0,
    },
};
