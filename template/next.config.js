const withCSS = require("@zeit/next-css");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
const webpack = require("webpack");

if (typeof require !== "undefined") {
  require.extensions[".css"] = () => { };
}
module.exports = withCSS({
  webpack(config, options) {
    config.plugins.push(new FilterWarningsPlugin({ exclude: /mini-css-extract-plugin[^]*Conflicting order between:/ }));
    config.plugins.push(new webpack.ProvidePlugin({
      "window.hljs": "highlight.js",
      "window.katex": "katex"
    })),
      config.module.rules.push(
        {
          test: /\.md$/,
          use: "raw-loader"
        }
      );
    return config;
  }
});