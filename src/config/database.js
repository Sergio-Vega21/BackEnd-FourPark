const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "system",
  port: 5432,
});

pool.on("connect", (client) => {
  console.log("Connected to the database");
  const originalQuery = client.query;
  client.query = (...args) => {
    console.log(args);
    return originalQuery.apply(client, args);
  };
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

module.exports = pool;
