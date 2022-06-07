module.exports = {
    env: {
        es6: true,
    },
    extends: ['@darraghor/nestjs-typed/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2022,
        project: ['./tsconfig.json'],
        sourceType: 'module',
    },
};
