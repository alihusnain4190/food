const ENV = process.env.NODE_ENV || "development";
const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};
const customConfig = {
  development: {
    connection: { database: "pizza", user: "ali", password: "secretword123" },
  },
  test: {
    connection: {
      database: "test_pizza",
      user: "ali",
      password: "secretword123",
    },
  },
};

module.exports = { ...baseConfig, ...customConfig[ENV] };
