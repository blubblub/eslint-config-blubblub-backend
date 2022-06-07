module.exports = {
    env: {
        es6: true,
    },
    extends: [
        './index.js',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2022,
        project: ['./tsconfig.json'],
        sourceType: 'module',
    },
};
