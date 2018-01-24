const path = require('path');

// npm install -P bunyan bunyan-prettystream
const bunyan = require('bunyan');
const prettyStream = require('bunyan-prettystream');
const prettyStdOut = new prettyStream();
prettyStdOut.pipe(process.stdout);

exports.root = path.resolve(process.cwd());
exports.folders = require('./folders.js');

exports.logger = bunyan.createLogger({
    name: 'app',
    streams: [{ type: 'raw', stream: prettyStdOut }, { path: path.join(exports.folders.logs, `${(new Date()).getTime()}.log`) }],
    serializers: bunyan.stdSerializers
});