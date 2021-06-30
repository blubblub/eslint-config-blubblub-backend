module.exports = {
    extends: [
        './index.js',
        './jest.js',
        './mongo.js',
        './looseComments.js',
    ],
    rules: {
        'unicorn/require-post-message-target-origin': 0,
    },
};
