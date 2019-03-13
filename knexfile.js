module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/sea_level_rise',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useDefaultAsNull: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useDefaultAsNull: true
  }

};
