const handlers = require('./handlers.js');
const schemas = require('./schemas.js');

module.exports = [{
    method: 'POST',
    path: '/api/userType',
    handler: handlers.createUserType,
    options: {
        description: "Creates an user's type in the db.",
        tags: ['api', 'userType'],
        validate: {
            payload: schemas.createUserType
        }
    }
}, {
    method: 'GET',
    path: '/api/userType',
    handler: handlers.findUserType,
    options: {
        description: "Gets users' type from db.",
        tags: ['api', 'userType']
    }
}, {
    method: 'GET',
    path: '/api/userType/{id}',
    handler: handlers.findUserTypeById,
    options: {
        description: "Gets a user's type by its id from db.",
        tags: ['api', 'userType']
    }
}, {
    method: 'PATCH',
    path: '/api/userType/{id}',
    handler: handlers.updateUserType,
    options: {
        description: "Updates given user's type.",
        tags: ['api', 'userType'],
        validate: {
            payload: schemas.updateUserType
        }
    }
}, {
    method: 'DELETE',
    path: '/api/userType/{id}',
    handler: handlers.deleteUserType,
    options: {
        description: "Deletes an user's type from db.",
        tags: ['api', 'userType']
    }
}
];