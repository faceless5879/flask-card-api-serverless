const path = require("path");

module.exports = {
  entry: "./src/lambda.js",
  externals: [
    {
      sqlite3: "sqlite3",
      mysql2: "mysql2",
      mariasql: "mariasql",
      mysql: "mysql",
      mssql: "mssql",
      oracle: "oracle",
      "strong-oracle": "strong-oracle",
      oracledb: "oracledb",
      "pg-native": "pg-native",
      tedious: "tedious",
      "better-sqlite3": "better-sqlite3",
      // pg: "pg",
      "pg-query-stream": "pg-query-stream",
    },
  ],
  target: "node",
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    // library: 'serverlessExpressEdge',
    libraryTarget: "commonjs2",
  },
};
