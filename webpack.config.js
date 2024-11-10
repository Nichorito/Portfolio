const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js', // Main JS file
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      // Babel loader for JS files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Transpile JS to be compatible with older browsers
          },
        },
      },
      // CSS loader and style loader for CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // File loader for images (like .png, .jpg, .gif)
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]', // Naming convention for images
              outputPath: 'images/', // Output folder for images
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // HTML Webpack Plugin to generate the index.html file
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template HTML file
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // Serve files from the dist folder
    open: true, // Open the browser automatically
  },
};
