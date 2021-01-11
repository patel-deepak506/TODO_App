// Update with your config settings.

module.exports = {
  development: {
      client: 'mysql',
      connection: "mysql://root:Deepak@20@localhost:3306/deepak",
      migrations: {
          directory: __dirname + "/migrations",
      },

  },

  production: {
    client: "mysql",
    connection: "mysql://root:Deepak@20@localhost:3306/deepak",
  },

};
