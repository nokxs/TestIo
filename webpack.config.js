module.exports = {
  mode: "development",
  // devtool: "inline-source-map",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader", exclude: "/node_modules/" },
    ],
    noParse: /\/native-require.js$/,
  },
  target: 'node',
  node: {
    __dirname: false
  }
};
