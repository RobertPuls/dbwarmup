module.exports = {

  development: {
    client: "pg",
    connection: "postgres://localhost/warmup"
  },
  production: {
  client: "pg",
  connection: process.env.DATABASE_URL
  }
};