const handlers = require('./handlers.js');
const schemas = require('./schemas.js');

module.exports = [{
    method: 'POST',
    path: '/api/user',
    handler: handlers.createUser,
    options: {
        description: 'Creates an user in the db.',
        tags: ['api', 'user'],
        validate: {
            payload: schemas.createUser
        }
    }
}, {
    method: 'GET',
    path: '/api/user',
    handler: handlers.findUser,
    options: {
        description: 'Gets users from db.',
        tags: ['api', 'user']
    }
}, {
    method: 'GET',
    path: '/api/user/{id}',
    handler: handlers.findUserById,
    options: {
        description: 'Gets a user by its id from db.',
        tags: ['api', 'user']
    }
}, {
    method: 'PATCH',
    path: '/api/user/{id}',
    handler: handlers.updateUser,
    options: {
        description: 'Updates given user.',
        tags: ['api', 'user'],
        validate: {
            payload: schemas.updateUser
        }
    }
}, {
    method: 'DELETE',
    path: '/api/user/{id}',
    handler: handlers.deleteUser,
    options: {
        description: 'Deletes an user from db.',
        tags: ['api', 'user']
    }
}, {
    method: 'GET',
    path: '/api/user/profile/{id}',
    handler: handlers.getUserProfile,
    options: {
        description: "Gets user's profile information from db.",
        tags: ['api', 'user']
    }
},{
    method: 'POST',
    path: '/api/user/createAccount',
    handler: handlers.createUserAccount,
    options: {
        description: 'Creates an user account in the db.',
        tags: ['api', 'user'],
        validate: {
            payload: schemas.createUserAccount
        }
    }
},{
    method: 'GET',
    path: '/api/user/login/{user}/{password}/{expired}',
    handler: handlers.login,
    options: {
        description: 'Logs the user into the app.',
        tags: ['api', 'user']
    }
},
{
    method: 'PATCH',
    path: '/api/changePassword/{user}',
    handler: handlers.changePassword,
    options: {
      description: "User's password change",
      tags: ['api', 'user'],
      auth: false,
      validate: {
        payload: schemas.changePassword
      }
    }
  },
];