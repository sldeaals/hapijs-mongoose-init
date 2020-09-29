'use strict';

const routes = require('./routes.js');

const after = function (server) {
  server.route(routes);
}

exports.plugin = {
  name: 'hapijs-mongoose-init-imageType',
  version: '1.0.0',
  register: async function (server, options) {
    server.dependency(['hapijs-mongoose-init-utils', 'hapijs-mongoose-init-mongoDb'], after);
  }
}