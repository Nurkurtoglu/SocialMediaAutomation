require('dotenv').config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;


module.exports = {
    development: {
        client: "pg",
        connection: {
            database: dbName,
            user: dbUser,
            password: dbPass,
        },
    },
    migrations: {
        directory: "./data/migrations",
    },
    seeds: {
        direction: "./data/seeds",
    },
    production: {}
}