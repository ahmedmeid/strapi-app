const cfenv = require("cfenv");
const appEnv = cfenv.getAppEnv();
const service = appEnv.getServices()['postgres-instance'];

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: service.credentials.hostname,
      port: service.credentials.port,
      database: service.credentials.dbname,
      user: service.credentials.username,
      password: service.credentials.password,
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
