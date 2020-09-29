const handlers = require('./handlers.js');
const schemas = require("./schemas.js");

module.exports = [{
  method: 'POST',
  path: '/api/imageType',
  handler: handlers.createImageType,
  options: {
    description: "Creates an image type in the system",
    tags: ['api', 'imageType'],
    auth: false,
    validate: {
      payload: schemas.createImageType
    }
  }
}, {
  method: 'GET',
  path: '/api/imageType/{id}',
  handler: handlers.findImageTypeById,
  options: {
    description: "Gets an image type by his id from the system.",
    tags: ['api', 'imageType'],
    auth: false
  }
}, {
  method: 'GET',
  path: '/api/imageType',
  handler: handlers.findImageType,
  options: {
    description: "Gets all image types from the system.",
    tags: ['api', 'imageType'],
    auth: false
  }
}, {
  method: 'PATCH',
  path: '/api/imageType/{id}',
  handler: handlers.updateImageType,
  options: {
    description: "Updates an image type from the system",
    tags: ['api', 'imageType'],
    auth: false,
    validate: {
      payload: schemas.updateImageType
    }
  }
}, {
  method: 'DELETE',
  path: '/api/imageType/{id}',
  handler: handlers.deleteImageType,
  options: {
    description: "Erases an image type from the system",
    tags: ['api', 'imageType'],
    auth: false
  }
}
]