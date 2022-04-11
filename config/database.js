module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      ssl: { rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false) },
    },
  },
});
