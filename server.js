'use strict';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
process.stdout.write(
  `${String.fromCharCode(27)}]0; {"project-name"} API v1.0.0 ${String.fromCharCode(7)}`
);

const Hapi = require("@hapi/hapi");
const config = require('./server-config.js');
const plugins = require('./plugins/index.js');

const init = async () => {
  const server = new Hapi.Server(config.server);

  server.route({
    method: '*',
    path: '/{p*}',
    handler: async (request, h) => ({
      success: false,
      message: 'This route is not define.',
      data: []
    }),
    options: { auth: false }
  });

  try {
    await server.register(plugins);
    await server.start();
    console.log('Server running at: ', server.info.uri);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

init();