module.exports = {
    env: {
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'es2019',
        project: ['./tsconfig.json'],
        sourceType: 'module',
    },
};
