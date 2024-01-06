const Pool = require("pg").Pool;

const pool = new Pool({
    user: "yasai",
    password: "1108",
    host: "localhost",
    port: 5432,
    database: "thriftscraper"
});

module.exports = pool;