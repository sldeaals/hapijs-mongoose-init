// mongoDb Configuration

module.exports = {
  atlas: {
    config: {
      host: 'localhost',
      port: 8080,
      username: '{USERNAME}',
      password: '{PASSWORD}',
      hostlist: 'localhost:8080',
      database: '{"DATABASE_NAME"}',
      authSource: '$[hostlist]/$[database]',
      urlTempl: `mongodb://$[username]:$[password]@$[hostlist]/$[database]?authSource=$[authSource]`,
      url: 'mongodb+srv://$[username]:$[password]@$[hostlist]/$[database]?retryWrites=true&w=majority'
    },
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },
  server: {
    config: {
      host: 'localhost',
      port: 8080,
      url: 'localhost:8080'
    },
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }
};