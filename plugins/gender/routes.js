const handlers = require('./handlers.js');
const schemas = require('./schemas.js');

module.exports = [{
    method: 'POST',
    path: '/api/gender',
    handler: handlers.createGender,
    options: {
        description: 'Creates a gender in the db.',
        tags: ['api', 'gender'],
        validate: {
            payload: schemas.createGender
        }
    }
}, {
    method: 'GET',
    path: '/api/gender',
    handler: handlers.findGender,
    options: {
        description: 'Gets countries from db.',
        tags: ['api', 'gender']
    }
}, {
    method: 'GET',
    path: '/api/gender/{id}',
    handler: handlers.findGenderById,
    options: {
        description: 'Gets a gender by its id from db.',
        tags: ['api', 'gender']
    }
}, {
    method: 'PATCH',
    path: '/api/gender/{id}',
    handler: handlers.updateGender,
    options: {
        description: 'Updates given gender.',
        tags: ['api', 'gender'],
        validate: {
            payload: schemas.updateGender
        }
    }
}, {
    method: 'DELETE',
    path: '/api/gender/{id}',
    handler: handlers.deleteGender,
    options: {
        description: 'Deletes a gender from db.',
        tags: ['api', 'gender']
    }
}, {
    method: 'POST',
    path: '/api/gender/many',
    handler: handlers.createManyGenders,
    options: {
        description: 'Creates many genders in db.',
        tags: ['api', 'gender'],
        validate: {
            payload: schemas.createManyGenders
        }
    }
}
];