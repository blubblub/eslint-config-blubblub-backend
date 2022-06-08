module.exports = {
    env: {
        es6: true,
    },
    extends: ['plugin:@darraghor/nestjs-typed/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'es2019',
        project: ['./tsconfig.json'],
        sourceType: 'module',
    },
    plugins: ['@darraghor/nestjs-typed'],
};
