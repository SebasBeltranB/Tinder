// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: 'containers-us-west-39.railway.app',
      data: 'Tinder',
      port: '5619',
      user: 'postgres',
      password: 'CRtmFDFAWXYcGhx2zLfL'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
        host: 'containers-us-west-39.railway.app',
        data: 'Tinder',
        port: '5619',
        user: 'postgres',
        password: 'CRtmFDFAWXYcGhx2zLfL'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
        host: 'containers-us-west-39.railway.app',
        data: 'Tinder',
        port: '5619',
        user: 'postgres',
        password: 'CRtmFDFAWXYcGhx2zLfL'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
