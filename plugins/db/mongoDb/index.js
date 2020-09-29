'use strict';

const dbHandlers = require('./db.js');

exports.plugin =  {
  name: 'hapijs-mongoose-init-mongoDb',
  version: '1.0.0',
  register: async function (server, options) {
    try {
      server.app.db = {};
      server.app.db.conn = dbHandlers.getConnection();
      server.app.db.models = dbHandlers.getModels();
    } catch (err) {
      console.log(err);
    }
  }
};