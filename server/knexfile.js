module.exports = {
    development: {
        client: "pg",
        connection: {
            database: "media_automation",
            user: "postgres",
            password: "i.nur0806",
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