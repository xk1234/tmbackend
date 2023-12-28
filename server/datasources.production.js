'use strict';

module.exports = {
  db: {
    url: process.env.URL,
    hostname: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'postgres',
    connector: 'postgresql',
    name: process.env.NAME,
  },
};
