const { join } = require('path');

exports.js = 'js';
exports.js_modules = join(exports.js, 'modules');

exports.logs = 'logs';

exports.files = [
    {
        filename: 'app.js',
        path: exports.js,
        base64: 'Y29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnLmpzJyk7DQpjb25zdCB7IGxvZ2dlciB9ID0gY29uZmlnOw=='
    }
];