
module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "./dist/bundle.js"
    },
    module: {
      loaders: [
        { test: /\.js(x?)$/, exclude: /node_modules/, loader: 'babel-loader' }
      ]
    },devtool: 'source-map'
};
