const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const packageJson = require("./package.json");

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    publicPath: "http://localhost:3000/",
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "detail",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductDetail": "./src/ProductDetail/bootstrap",
        "./Cart": "./src/Cart/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
