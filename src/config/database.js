const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "monorail.proxy.rlwy.net",
  database: "railway",
  password: "QrCBkAfIeeMqJtHSReoKrCGDLQXQuVnv",
<<<<<<< HEAD
  port:56134,
=======
  port: 56134,
>>>>>>> 70c0ea7432c0a62ac6f2e6696e864a7742747e8c
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
