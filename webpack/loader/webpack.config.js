const path = require("path");

module.exports = {
  mode: "development",
  // entry: "./src/index.js",
  // output: {
  //   filename: "bundle.js",
  //   path: path.resolve(__dirname, "dist"),
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.csv$/,
        use: ["csv-loader"],
      },
    ],
  },
};