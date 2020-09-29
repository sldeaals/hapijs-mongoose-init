'use strict';
module.exports = [
  require("@hapi/inert"),
  require("@hapi/vision"),
  {
    plugin: require("hapi-swagger"),
    options: {
      info: {
        title: 'hapijs-mongoose-init API Documentation'
      },
      grouping: 'tags',
      /*securityDefinitions: {
        jwt: {
          type: 'apiKey',
          name: 'Authorization',
          in: ''
        }
      },
      security: [{ 'jwt': [] }]*/
    }
  },
  require("./country"),
  require("./db/mongoDb/index.js"),
  require("./gender"),
  require("./imageType"),
  require("./user"),
  require("./userType"),
  require("./utils")
];