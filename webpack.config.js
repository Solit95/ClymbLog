const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: '/client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    proxy: {
      '/': 'http://localhost:3000',
    },
  },  
    module: {
      rules: [
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
        {
          test: /.(css|scss)$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './client/index.html'),
      filename: 'index.html',
    }),
  ],
}
