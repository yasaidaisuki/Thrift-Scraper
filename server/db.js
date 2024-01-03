const Pool = require("pg").Pool;

const pool = new Pool({
    users: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "postgres"
})

module.exports = pool;