'use strict';

const { methods } = require('./wrapper.js');

exports.plugin = {
    name: 'hapijs-mongoose-init-utils',
    version: '1.0.0',
    register: async function (server, options) {
        server.method(methods);
    }
};