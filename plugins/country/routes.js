const handlers = require('./handlers.js');
const schemas = require('./schemas.js');

module.exports = [{
    method: 'POST',
    path: '/api/country',
    handler: handlers.createCountry,
    options: {
        description: 'Creates a country in the db.',
        tags: ['api', 'country'],
        validate: {
            payload: schemas.createCountry
        }
    }
}, {
    method: 'GET',
    path: '/api/country',
    handler: handlers.findCountry,
    options: {
        description: 'Gets countries from db.',
        tags: ['api', 'country']
    }
}, {
    method: 'GET',
    path: '/api/country/{id}',
    handler: handlers.findCountryById,
    options: {
        description: 'Gets a country by its id from db.',
        tags: ['api', 'country']
    }
}, {
    method: 'PATCH',
    path: '/api/country/{id}',
    handler: handlers.updateCountry,
    options: {
        description: 'Updates given country.',
        tags: ['api', 'country'],
        validate: {
            payload: schemas.updateCountry
        }
    }
}, {
    method: 'DELETE',
    path: '/api/country/{id}',
    handler: handlers.deleteCountry,
    options: {
        description: 'Deletes a country from db.',
        tags: ['api', 'country']
    }
}, {
    method: 'POST',
    path: '/api/country/many',
    handler: handlers.createManyCountries,
    options: {
        description: 'Creates many countries in db.',
        tags: ['api', 'country'],
        validate: {
            payload: schemas.createManyCountries
        }
    }
}
];