const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/main.js',
   output: {
      path: path.join(__dirname, '../node_modules'),
      filename: 'index_bundle.js'
   },
   devServer: {    
      inline: true,
      port: 8080
   },
  
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.css$/i, 
            use: ['style-loader', 'css-loader'],
          }
      ] 
   },
   devServer: {
      historyApiFallback : true,
    },
   plugins:[
      new HtmlWebpackPlugin({
         template: './src/index.html'
      })
   ]
}