'use strict';

const routes = require('./routes.js');
const after = function (server) {
    server.route(routes);
};

exports.plugin = {
    name: 'hapijs-mongoose-init-userType',
    version: '0.0.1',
    register: async function (server, options) {
        server.dependency(['hapijs-mongoose-init-mongoDb'], after);
    }
};