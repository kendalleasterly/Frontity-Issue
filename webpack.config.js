const path = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "youngtutors.js",
    path: path.resolve(__dirname, "YOUNGTUTORS")

  },
  resolve: {
    mainFields: ['main']
  }
}